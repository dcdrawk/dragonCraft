'use strict';
angular.module('dCraftApp').controller('characterListCtrl', function($scope, characterSrv, $ocLazyLoad, $injector){
  
  $scope.characterList = characterSrv.getCharacterList();    
//  console.log('character list:');
//  console.log($scope.characterList);
  $scope.selectCharacter = function(id){
    characterSrv.selectCharacter(id);
  };
  
  //$ocLazyLoad.load('/dragonCraft/dist/scripts/services/databaseAdminSrv.js').then(function(e){//For gh-pages build
  $ocLazyLoad.load('/scripts/services/databaseAdminSrv.js').then(function(e){//for dev build
    var databaseSrv = $injector.get('databaseAdminSrv');
    databaseSrv.checkMetadata();
  });
  
});