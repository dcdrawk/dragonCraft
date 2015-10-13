'use strict';
angular.module('dCraftApp').controller('databaseAdminCtrl', function($scope, $indexedDB, $ocLazyLoad, $injector){
  
  $ocLazyLoad.load('dist/scripts/services/databaseAdminSrv.js').then(function(e){
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