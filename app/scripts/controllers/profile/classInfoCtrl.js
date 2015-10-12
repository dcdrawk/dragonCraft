'use strict';
angular.module('dCraftApp').controller('classInfoCtrl', function($scope, characterSrv, saveCharacterSrv, databaseSrv){
  
  $scope.character = characterSrv.getSelectedCharacter();
  
  databaseSrv.getClassInfo($scope.character.class).then(function(classInfo){
    $scope.classInfo = classInfo[0];
    console.log(classInfo);
  });
  
});