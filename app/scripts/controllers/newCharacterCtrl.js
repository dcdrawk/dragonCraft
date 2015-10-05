'use strict';
angular.module('dCraftApp').controller('newCharacterCtrl', function ($scope, raceSrv, classSrv, saveCharacterSrv) {
  $scope.races = raceSrv.races;
  $scope.classes = classSrv.classes;
  $scope.subraces = {};
  
  $scope.updateSubraces = function(race){
    for(var key of $scope.races){
      if(race === key.name){
        $scope.subraces = key.subraces;        
        console.log($scope.subraces);
      }
    }
  };
  
  $scope.addNewCharacter = function(character){
    saveCharacterSrv.addNewCharacter(character);
  };
});