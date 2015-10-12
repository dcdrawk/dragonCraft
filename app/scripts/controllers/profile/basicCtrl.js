'use strict';
angular.module('dCraftApp').controller('basicCtrl', function($scope, characterSrv, saveCharacterSrv, databaseSrv){
  $scope.character = characterSrv.getSelectedCharacter();
  
    databaseSrv.getClassNames().then(function(classNames){
      $scope.classes = classNames;
    });

    databaseSrv.getRaceNames().then(function(raceNames){
      $scope.races = raceNames;
      $scope.updateSubraces($scope.character.race);
    });
  
    databaseSrv.getSubraceNames($scope.character.race).then(function(subraceNames){
      $scope.subraces = subraceNames;
    });
  
  console.log($scope.character);
  //Update Subraces
  $scope.updateSubraces = function(race){
    databaseSrv.getSubraceNames(race).then(function(subraceNames){
      $scope.subraces = subraceNames;
    });
  };
  
  //Update Character
  $scope.updateCharacter = function(id, field, value){
    saveCharacterSrv.updateCharacter(id, field, value);
  }
  
});