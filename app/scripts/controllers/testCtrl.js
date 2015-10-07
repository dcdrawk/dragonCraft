'use strict';
angular.module('dCraftApp').controller('testCtrl', function($scope, $indexedDB) {
  console.log('test');
  //$scope.races = RaceSrv.races;
  //$scope.classes = ClassSrv.classes;
  
  $scope.objects = [];

    $indexedDB.openStore('people', (store) =>

//      store.insert({"ssn": "444-555-333-111","name": "Jane Doe", "age": 57}).then(function(e){
//        console.log('loool');
//        store.getAll().then(function(people) {  
//        // Update scope
//          $scope.objects = people;
//          console.log('HERE DA PEEPOLE');
//          console.log($scope.objects);
//        });
//      
//      }).then(function(){
      
      
      store.upsert({"ssn": "444-555-333-111","name": "Jane dsada", "age": 57}).then(function(e){
        console.log('updaten!');
      }));

//  );
  
//  .filter('html', function() {
//     return function(input) {
//       
//       return out;
//     }
//  });
//  
  
});
