'use strict';
angular.module('dCraftApp').controller('basicCtrl', function($scope, characterSrv, saveCharacterSrv, raceSrv, classSrv){
  $scope.races = raceSrv.races;
  $scope.classes = classSrv.classes;
  
  $scope.character = characterSrv.getSelectedCharacter();
  
  console.log($scope.character);
  //Update Subraces
  $scope.updateSubraces = function(race){
    for(var key of $scope.races){
      if(race === key.name){
        $scope.subraces = key.subraces;        
        console.log($scope.subraces);
      }
    }
  };
  
  //Update Character
  $scope.updateCharacter = function(id, field, value){
    saveCharacterSrv.updateCharacter(id, field, value);
  }
  
});