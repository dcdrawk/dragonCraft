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
    var db = new Dexie("test-database");
    db.version(1).stores({
        charClasses: 'name,description',
        characters: 'name,race,subrace,class,level,gender',
        race:'id++,name,subraces',
        gender:'name',
        // ...add more stores (tables) here...
    });

    //
    // Open it
    //
    db.open();
    
    // Get Races
    $rootScope.getRaces = function(){
      $rootScope.raceArray = [];
      
      //for each race in the table
      db.race.each(function(race) {
        //push each into an array
        $rootScope.raceArray.push({name:race["name"], subraces:race["subraces"]});
      }).then(function (result) {
        //after the loop, update the race
        raceList = $rootScope.raceArray;
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
      db.characters.add({name: name, race: race, subrace: subrace, class: charClass, level: level, gender: gender});
      $rootScope.characterList = [];
    }
    
    //update subrace select
    $rootScope.updateSubrace = function(selectedRace){      
      //for each race in the raceList
      for (var race in raceList) {
        //if the race name = the selected race
        if(race.name == selectedRace && race.subraces){
          $rootScope.subraceArray = race.subraces.split(',');
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
              console.log('the ' + index );
              if(index.name == race){
                console.log('update ' + index );
                index.subraces = theRace.subraces;
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