'use strict';
angular.module('dCraftApp').controller('characterListCtrl', function($scope, characterSrv){
  $scope.characterList = characterSrv.getCharacterList();
  
  $scope.selectCharacter = function(id){
    characterSrv.selectCharacter(id);
  };
  
});