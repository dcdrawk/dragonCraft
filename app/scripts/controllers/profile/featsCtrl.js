'use strict';
angular.module('dCraftApp').controller('featsCtrl', function($scope, characterSrv){
  $scope.selectedCharacter = characterSrv.getSelectedCharacter();
});