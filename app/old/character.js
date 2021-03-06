'use strict';

/**
 * @ngdoc function
 * @name dCraftApp.controller:MainCtrl
 * @description
 * # CharacterCtrl
 * Controller of the dCraftApp
 */
 /* jshint ignore:start */
angular.module('dCraftApp')
  .controller('CharacterCtrl', function ($scope, $rootScope, ClassSrv, RaceSrv, transitionSrv) {
    
//    $rootScope.$on('$locationChangeStart', function(event, next, current) {
//      console.log('Location change start!!!');
//      var curPath = current.slice( current.lastIndexOf('/')+1, current.length );
//      var nextPath = next.slice( next.lastIndexOf('/')+1, next.length );
//      //transitionSrv.setTransition(curPath, nextPath);
//      
//      });
    //console.log(ClassSrv.classes);
    //Define the DB
    console.log(RaceSrv.races);
    var db = new Dexie("test-db-2");
    db.version(1).stores({
      charClasses: 'name',
      characters: 'id++,name,race,subrace,class,level,gender',
      race:'id++,name,subraces',
      gender:'name',
      // ...add more stores (tables) here...
    });
    
    db.open();
    //Character Functions

    // Get Races
    $rootScope.getRaces = function(){    
      db.open();
      $rootScope.raceArray = [];

      //for each race in the table
      db.race.each(function(race) {
        //push each into an array
        $rootScope.raceArray.push({name:race["name"], subraces:race["subraces"]});
      }).then(function (result) {
        //after the loop, update the race
        //raceList = $rootScope.raceArray;
        if($scope.char.race){
          $rootScope.updateSubrace($scope.char.race);
        }        
        $rootScope.$digest();
        //console.log('selectedRace');
        //$rootScope.updateSubrace(race);
      }).catch(function (error) {
      // Handle error
        //console.log(error);
      });
      db.close();
    }
        
    //update subrace select
    $rootScope.updateSubrace = function(selectedRace){
      $rootScope.subraceArray = [];
      db.race.where("name").equalsIgnoreCase(selectedRace).each(function(theRace) {
        //console.log('the race:')
        //console.log(theRace.subraces);
        if(theRace.subraces !== 'None'){        
          for (var index in theRace.subraces){
            $rootScope.subraceArray.push(theRace.subraces[index].name);
            //console.log($rootScope.subraceArray);
          }
        } else {
          $rootScope.subraceArray.push('n/a');
        }
      });
    }
//    $rootScope.updateSubrace = function(selectedRace){
//      console.log('Updating subraces for:' + selectedRace);
//      for (var index in $rootScope.raceArray) {
//        console.log($rootScope.raceArray);
//        
//        if($rootScope.raceArray[index].name == selectedRace && $rootScope.raceArray[index].subraces){
//          $rootScope.subraceArray = $rootScope.raceArray[index].subraces.split(',');
//        }
//      }
//      console.log($rootScope.subraceArray);
//      //$rootScope.$digest();
//    }
    
    // Get Classes
    $rootScope.getClasses = function(){
      $scope.classArray = [];
      //for each class in the table
      db.charClasses.each(function(charClass) {
        //push each into an array
        $scope.classArray.push(charClass["name"]);
      });
    }
    
    //update character info
//    $scope.updateChar = function(id, field, value){
//      switch (field) {
//        case "name":
//          db.characters.update(id, {name: value});
//          $rootScope.updateList = true;
//          $scope.updateStorage(id);
//          break;
//        case "race":
//          db.characters.update(id, {race: value});
//          $rootScope.updateList = true;
//          $scope.updateStorage(id);
//          break;
//        case "subrace":
//          db.characters.update(id, {subrace: value});
//          //$rootScope.updateList = true;
//          $scope.updateStorage(id);
//          break;
//        case "class":
//          db.characters.update(id, {class: value});
//          //$rootScope.updateList = true;
//          $scope.updateStorage(id);
//          break;
//      }
//
//    }
    
//    $scope.updateStorage = function(id){
//      console.log('update storage');
//      db.open();
//      
//      //find the character that matches the selected id
//      db.characters.where('id').equals(id).each(function (character) {
//        console.log('CHARACTER:');
//        $rootScope.selectedCharacter = character;
//      }).then(function(){
//        localStorage.setObject('character', $rootScope.selectedCharacter);
//        console.log('CHARACTER:');
//        console.log(localStorage.getObject('character'));
//        $rootScope.$digest();
//      });
//      db.close();
//    }
    //unlock the page
    $scope.lockBasic = false;
    
    //Lock the page
    $scope.lockPage = function(page){
      $scope.lockBasic = true;
      //$scope.$digest();
    }
    
    $scope.unlockPage = function(page){
      $scope.lockBasic = false;
    }

    //let's see if there's a local character set
    var localCharacter = JSON.parse(localStorage.getObject('character'));

    //if there is no local character, let's try to set it to the selectedCharacter
    if(localCharacter == 'undefined'){
      //console.log('adding character to localstorage')
      localStorage.setObject('character', $rootScope.selectedCharacter);

    //else, if the selected character is undefined (e.g. reload)
    } else if($rootScope.selectedCharacter == undefined){
      //console.log('character is undefined');
      //console.log(localCharacter);
      $rootScope.selectedCharacter = localCharacter;
    }    

    $scope.char = $rootScope.selectedCharacter;

    //Call functions
    $rootScope.getRaces();
    //$rootScope.updateSubrace($scope.char.race);
    $rootScope.getClasses();
  })
  
  .controller('AppearanceCtrl', function ($scope, $rootScope) {
    //Define the DB
    var db = new Dexie("test-db-2");
    db.version(1).stores({
      characters: 'id++,name,race,subrace,class,level,height,weight,description'
      // ...add more stores (tables) here...
    });
    
    //let's see if there's a local character set
    var localCharacter = JSON.parse(localStorage.getObject('character'));

    //if there is no local character, let's try to set it to the selectedCharacter
    if(localCharacter == 'undefined'){
      //console.log('adding character to localstorage')
      localStorage.setObject('character', $rootScope.selectedCharacter);

    //else, if the selected character is undefined (e.g. reload)
    } else if($rootScope.selectedCharacter == undefined){
      //console.log('character is undefined');
      //console.log(localCharacter);
      $rootScope.selectedCharacter = localCharacter;
    }    

    $scope.char = $rootScope.selectedCharacter;
    
    
  })
  
  .controller('HistoryCtrl', function ($scope, $rootScope) {
    //Define the DB
    var db = new Dexie("test-db-2");
    db.version(1).stores({
      characters: 'id++,name,race,subrace,class,level,background,personality,ideals,bonds,flaws',
      //charHistory: 'id,background,personality,ideals,bonds,flaws',
      backgrounds: 'name,skills,tools,feat,featInfo'
      // ...add more stores (tables) here...
    });
    
    //let's see if there's a local character set
    var localCharacter = JSON.parse(localStorage.getObject('character'));

    //if there is no local character, let's try to set it to the selectedCharacter
    if(localCharacter == 'undefined'){
      //console.log('adding character to localstorage')
      localStorage.setObject('character', $rootScope.selectedCharacter);

    //else, if the selected character is undefined (e.g. reload)
    } else if($rootScope.selectedCharacter == undefined){
      //console.log('character is undefined');
      //console.log(localCharacter);
      $rootScope.selectedCharacter = localCharacter;
    }
    
    $scope.char = $rootScope.selectedCharacter;
    $scope.backgroundArray = [];
    
    //console.log($scope.char.background)
    $scope.getBackgrounds = function(){
      db.open();
      //console.log('Get Backgrounds:');      
      
      db.backgrounds.each(function(background){
        console.log(background.name);
        $scope.backgroundArray.push(background);
      }).then(function(){
        $scope.$digest();
      });
      db.close();
    }
    
    $scope.getBackgrounds();
    
  })
  
  .controller('TraitsCtrl', function ($scope, $rootScope) {
    //Define the DB
    var db = new Dexie("test-db-2");
    db.version(1).stores({
      characters: 'id++,name,race,subrace,class,level',
      race: 'id++,name,traits,subraces'
      // ...add more stores (tables) here...
    });
    
    //let's see if there's a local character set
    var localCharacter = JSON.parse(localStorage.getObject('character'));
    
    //if there is no local character, let's try to set it to the selectedCharacter
    if(localCharacter == 'undefined'){
      //console.log('adding character to localstorage')
      localStorage.setObject('character', $rootScope.selectedCharacter);

    //else, if the selected character is undefined (e.g. reload)
    } else if($rootScope.selectedCharacter == undefined){
      //console.log('character is undefined');
      //console.log(localCharacter);
      $rootScope.selectedCharacter = localCharacter;
    }
    
    $scope.char = $rootScope.selectedCharacter;
    $scope.raceTraitList = [];
    
    $scope.getRaceTraits = function(race){
      db.open();
      //console.log('off to the races' + race);
      db.race.where('name').equalsIgnoreCase(race).each(function(theRace) {
        $scope.raceTraitList = theRace.traits;
        console.log($scope.raceTraitList);
      }).then(function(){
        $scope.$digest();
      }).catch(function(error){
        console.log(error);
      });
      db.close();
    }
    
    $scope.getRaceTraits($scope.char.race);
    
    
    
  })
/* jshint ignore:end */