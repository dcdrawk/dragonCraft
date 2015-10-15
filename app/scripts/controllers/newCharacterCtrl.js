'use strict';
angular.module('dCraftApp').controller('newCharacterCtrl', function ($scope, databaseSrv, saveCharacterSrv, $location) {
  
  databaseSrv.getClassNames().then(function(classNames){
    $scope.classes = classNames;
  });
  
  databaseSrv.getRaceNames().then(function(raceNames){
    $scope.races = raceNames;
  });
  
  

  $scope.subraces = {};
  
  //Update Subraces
  $scope.updateSubraces = function(race){
    console.log(race);
    databaseSrv.getSubraceNames(race).then(function(subraceNames){
      $scope.subraces = subraceNames;
    });
  };
  
  //Add new character and change location back to the index page
  $scope.addNewCharacter = function(character){
    saveCharacterSrv.addNewCharacter(character).then(function(characters){
      $location.path( '/' );
    });
  };
});