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
  .controller('CharacterCtrl', function ($scope, $rootScope) {
    
    //Define the DB
    var db = new Dexie("test-database");
    db.version(1).stores({
      charClasses: 'name,description',
      characters: 'id++,name,race,subrace,class,level,gender',
      race:'id++,name,subraces',
      gender:'name',
      // ...add more stores (tables) here...
    });
    
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
      });
       db.close();
    }
    
    //update subrace select
    $rootScope.updateSubrace = function(selectedRace){
      console.log('Updating subraces for:' + selectedRace);
      for (var index in $rootScope.raceArray) {
        console.log($rootScope.raceArray);
        
        if($rootScope.raceArray[index].name == selectedRace && $rootScope.raceArray[index].subraces){
          $rootScope.subraceArray = $rootScope.raceArray[index].subraces.split(',');
        }
      }
      console.log($rootScope.subraceArray);
      //$rootScope.$digest();
    }
    
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
    $scope.updateChar = function(id, field, value){
      switch (field) {
        case "name":
          db.characters.update(id, {name: value});
          $rootScope.updateList = true;
          $scope.updateStorage(id);
          break;
        case "race":
          db.characters.update(id, {race: value});
          $rootScope.updateList = true;
          $scope.updateStorage(id);
          break;
        case "subrace":
          db.characters.update(id, {subrace: value});
          //$rootScope.updateList = true;
          $scope.updateStorage(id);
          break;
        case "class":
          db.characters.update(id, {class: value});
          //$rootScope.updateList = true;
          $scope.updateStorage(id);
          break;
      }

    }
    
    $scope.updateStorage = function(id){
      console.log('update storage');
      db.open();
      
      //find the character that matches the selected id
      db.characters.where('id').equals(id).each(function (character) {
        console.log('CHARACTER:');
        $rootScope.selectedCharacter = character;
      }).then(function(){
        localStorage.setObject('character', $rootScope.selectedCharacter);
        console.log('CHARACTER:');
        console.log(localStorage.getObject('character'));
        $rootScope.$digest();
      });
      db.close();
    }
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
      console.log('adding character to localstorage')
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
  });
  
/* jshint ignore:end */