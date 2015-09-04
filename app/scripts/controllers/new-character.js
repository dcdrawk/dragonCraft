/* jshint ignore:start */
'use strict';

/**
 * @ngdoc function
 * @name dCraftApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dCraftApp
 */
angular.module('dCraftApp')
  .controller('NewCharCtrl', function ($scope, $rootScope, $mdDialog) {
  
    //set up some empty arrays;
    $scope.classArray = [];
    var raceList = [];
    $scope.characterArray = [];
    $rootScope.raceArray = [];
    $rootScope.genderArray = [];
    
    //
    // Define the database
    //
    var db = new Dexie("test-db-2");
    db.version(1).stores({
        charClasses: 'name',
        characters: 'id++,name,race,subrace,class,level,gender,height,weight,description',
        charHistory: 'id++,background,personality,ideals,bonds,flaws',
        race:'id++,name,subraces',
        gender:'name',
        alignments: 'name',
        backgrounds: 'name,skills,tools,feat,featInfo'
        // ...add more stores (tables) here...
    });

    //
    // Open it
    //
    db.open();
    
    // Get Races
    $rootScope.getRaces = function(){
      console.log('GETTING RACES');
      
      console.log(db.race);
      $rootScope.raceArray = [];
      
      //for each race in the table
      db.race.each(function(race) {
        console.log('races');
        //push each into an array
        $rootScope.raceArray.push({name:race["name"], subraces:race["subraces"]});
      }).then(function (result) {
        //after the loop, update the race
        raceList = $rootScope.raceArray;
        //console.log(raceList);
      });
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
    
    // Get Genders
    $rootScope.getGenders = function(){
      $rootScope.genderArray = [];
      
      //for each gender in the table
      db.gender.each(function(gender) {
        //push each into an array
        $rootScope.genderArray.push({name:gender["name"]});
      });
    }
    
    // Call the get functions
    $rootScope.getRaces();
    $rootScope.getClasses();
    $rootScope.getGenders();
    
    //add Character to database
    $scope.addCharacter = function(name, race, subrace, charClass, level, gender){
      console.log('Adding Character' + name + ' ' + race + ' ' + subrace + ' ' + charClass + ' ' + level + ' ' + gender + ' ')
      db.characters.add({name: name, race: race, subrace: subrace, class: charClass, level: level, gender: gender});
      //db.charHistory.add({background: '', personality: '', ideals: '', bonds: '', flaws: ''});
      $rootScope.characterList = [];
    }
    
    //update subrace select
    $rootScope.updateSubrace = function(selectedRace){
      for (var index in raceList) {
        if(raceList[index].name == selectedRace && raceList[index].subraces){
          $rootScope.subraceArray = raceList[index].subraces.split(',');
        }
      }
    }
    
    //set some initial values
    $rootScope.char = {
      name: '',
      class: '',
      race: '',
      subrace: '',
      level: 1,
      gender: ''
    }
    
    //show the 'add custom' dialog
    $scope.showDialog = function(ev, selection) {    
      var tmpl = '';
      //find the template
      switch (selection) {
        case "race":
          tmpl = '../views/templates/dialog/custom-race.html';
          break;
        case "subrace":
          tmpl = '../views/templates/dialog/custom-subrace.html';
          break;
        case "class":
          tmpl = '../views/templates/dialog/custom-class.html';
          break;
        case "gender":
          tmpl = '../views/templates/dialog/custom-gender.html';
          break;
      }
      
      //show the dialog window
      $mdDialog.show({
        controller: DialogController,
        templateUrl: tmpl,
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:false
      });
    };
    
    //Dialog Controller
    function DialogController($scope, $rootScope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
        $rootScope.char["class"] = '';
      };
      $scope.cancel = function(selection) {
        $mdDialog.cancel();
        $rootScope.char[selection] = '';
      };
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
      
      // Add a custom class
      $scope.addCustomClass = function(name, description) {
        db.charClasses.add({name: name, description: description});
        $rootScope.getClasses();
        $rootScope.char.class = name;
        $mdDialog.hide();
      };
      
      // Add a custom race
      $scope.addCustomRace = function(name, description, subraces) {
        console.log('lol races');
        db.race.add({name: name, description: description, subraces: subraces});
        
        raceList.push({name: name, description: description, subraces: subraces});
        
        $rootScope.getRaces();
        $rootScope.char.race = name;
        $rootScope.updateSubrace(name);
        $mdDialog.hide();
      };
      
      // Add a custom subrace
      $scope.addCustomSubrace = function(name, race) {
        console.log('new subrace:' + name + ' for: ' + race);
        db.race.where("name").equalsIgnoreCase(race).each(function(theRace) {
          theRace.subraces += ','+name;
          console.log('subraces: '+ theRace.subraces);
          db.race.update(theRace.id, {subraces: theRace.subraces}).then(function () {
            for (var index in raceList){
              //console.log('the ' + index );
              if(raceList[index].name == race){
                console.log('update ' + raceList[index].name);
                raceList[index].subraces = theRace.subraces;
              }
            }
            $rootScope.updateSubrace(race);
            $rootScope.char.subrace = name;
            $mdDialog.hide();
          });
        });
      };
      
      // Add a custom gender
      $scope.addCustomGenger = function(name) {
        db.gender.add({name: name});
        $rootScope.getGenders();
        $rootScope.char.gender = name;
        $mdDialog.hide();
      };
    }
    
    db.close(); 
  });

    /* jshint ignore:end */