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
      characters: 'name,race,subrace,class,level,gender',
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
        $rootScope.$digest();
      });
       db.close();
    }

    //let's see if there's a local character set
    var localCharacter = JSON.parse(localStorage.getObject('character'));

    //if there is no local character, let's try to set it to the selectedCharacter
    if(localCharacter == 'undefined'){
      console.log('adding character to localstorage')
      localStorage.setObject('character', $rootScope.selectedCharacter);

    //else, if the selected character is undefined (e.g. reload)
    } else if($rootScope.selectedCharacter == undefined){
      console.log('character is undefined');
      console.log(localCharacter);
      $rootScope.selectedCharacter = localCharacter;
    }

    $scope.char = $rootScope.selectedCharacter;

    //Call functions
    $rootScope.getRaces();

  });
  
/* jshint ignore:end */