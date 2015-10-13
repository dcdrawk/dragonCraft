'use strict';
angular.module('dCraftApp').controller('traitsCtrl', function($scope, characterSrv, databaseSrv){
  $scope.character = characterSrv.getSelectedCharacter();
  
  databaseSrv.getRaceTraits($scope.character.race).then(function(raceInfo){
    $scope.raceInfo = raceInfo[0];
    console.log($scope.raceInfo);
  });
  
  databaseSrv.getSubraceTraits($scope.character.subrace).then(function(subraceInfo){
    $scope.subraceInfo = subraceInfo[0];
    console.log($scope.subraceInfo);
  });
  
});