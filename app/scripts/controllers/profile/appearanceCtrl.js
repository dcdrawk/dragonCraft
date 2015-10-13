'use strict';
angular.module('dCraftApp').controller('appearanceCtrl', function($scope, characterSrv, saveCharacterSrv){
  $scope.character = characterSrv.getSelectedCharacter();
  
  //Update Character
  $scope.updateCharacter = function(id, field, value){
    saveCharacterSrv.updateCharacter(id, field, value);
  }
});