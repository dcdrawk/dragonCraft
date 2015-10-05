'use strict';

angular.module('dCraftApp').controller('navCtrl', function($scope, characterSrv){
  $scope.selectedCharacter = characterSrv.getSelectedCharacter();
});