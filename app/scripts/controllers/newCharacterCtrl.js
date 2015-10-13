'use strict';
angular.module('dCraftApp').controller('newCharacterCtrl', function ($scope, databaseSrv, saveCharacterSrv) {
  
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
  
  $scope.addNewCharacter = function(character){
    saveCharacterSrv.addNewCharacter(character);
  };
});