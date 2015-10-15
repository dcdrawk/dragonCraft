'use strict';
angular.module('dCraftApp').controller('characterListCtrl', function($scope, characterSrv, $ocLazyLoad, $injector){
  $scope.characterList = characterSrv.getCharacterList();
  
  $scope.selectCharacter = function(id){
    characterSrv.selectCharacter(id);
  };
  
  $ocLazyLoad.load('/dragonCraft/dist/scripts/services/databaseAdminSrv.js').then(function(e){
    var databaseSrv = $injector.get('databaseAdminSrv');
    databaseSrv.checkMetadata();
  });
  
});