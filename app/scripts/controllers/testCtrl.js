'use strict';
angular.module('dCraftApp').controller('testCtrl', function($scope, $indexedDB, $ocLazyLoad, raceSrv, $injector) {
  console.log('TEST');
//  $ocLazyLoad.load('/scripts/controllers/databaseCtrl.js').then(function(e){
//    console.log(e);
//    databaseCtrl;
//  });
//  
  $ocLazyLoad.load('/scripts/services/databaseSrv.js').then(function(e){
    var databaseSrv = $injector.get('databaseSrv');
    console.log(databaseSrv.testMessage);
    //databaseSrv;
  });
  
  
  
      $indexedDB.openStore('test', function(store){
        store.getAllKeys().then(function(e){
          $scope.primaryKeys = e;
          console.log(e);
        });
        
        
        var find = store.query();
        find = find.$eq("kenny");
        store.eachWhere(find).then(function(e){
          console.log('found items!');
          if(e.length === 0){
            console.log('nothing found...');
            store.insert({"balls": "kenny", "shape": "diamonds", "color": "black"}).then(function (e) {
              console.log('item inserted!');
            });           
            
          }
          console.log(e);
          $scope.photos = e;
        });
        
      });
  
});
