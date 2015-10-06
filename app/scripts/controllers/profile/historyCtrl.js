'use strict';
angular.module('dCraftApp').controller('historyCtrl', function($scope, characterSrv){
  $scope.selectedCharacter = characterSrv.getSelectedCharacter();
});