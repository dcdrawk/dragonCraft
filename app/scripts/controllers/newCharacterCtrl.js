'use strict';
angular.module('dCraftApp').controller('newCharacterCtrl', function ($scope, raceSrv, classSrv, saveCharacterSrv) {
  $scope.races = raceSrv.races;
  $scope.classes = classSrv.classes;
  $scope.subraces = {};
  
  //Update Subraces
  $scope.updateSubraces = function(race){
    for(var i in $scope.races){
      if(race === $scope.races[i].name){
        $scope.subraces = $scope.races[i].subraces;        
        //console.log($scope.subraces);
      }
    }
  };
  
  $scope.addNewCharacter = function(character){
    saveCharacterSrv.addNewCharacter(character);
  };
});