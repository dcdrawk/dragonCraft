'use strict';
angular.module('dCraftApp').controller('databaseAdminCtrl', function($scope, $indexedDB, $ocLazyLoad, $injector){
  
  //$ocLazyLoad.load('/dragonCraft/dist/scripts/services/databaseAdminSrv.js').then(function(e){//For gh-pages build
  $ocLazyLoad.load('/scripts/services/databaseAdminSrv.js').then(function(e){//for dev build

    var databaseAdminSrv = $injector.get('databaseAdminSrv');
    databaseAdminSrv.checkMetadata();
    
    $scope.deleteDatabase = function(){
      databaseAdminSrv.deleteDatabase();
    };
    
    $scope.repopulateDatabase = function(){
      databaseAdminSrv.checkMetadata();
    };
    
    $scope.clearDatabase = function(){
      databaseAdminSrv.clearData();
    };
  });
});