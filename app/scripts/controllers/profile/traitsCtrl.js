'use strict';
angular.module('dCraftApp').controller('traitsCtrl', function($scope, characterSrv){
  $scope.selectedCharacter = characterSrv.getSelectedCharacter();
});