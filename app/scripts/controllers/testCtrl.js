'use strict';
angular.module('dCraftApp').controller('testCtrl', function($scope, $indexedDB) {
  console.log('test');
  //$scope.races = RaceSrv.races;
  //$scope.classes = ClassSrv.classes;
  
  $scope.objects = [];

//    $indexedDB.openStore('people', (store) =>
//
////      store.insert({"ssn": "444-555-333-111","name": "Jane Doe", "age": 57}).then(function(e){
////        console.log('loool');
////        store.getAll().then(function(people) {  
////        // Update scope
////          $scope.objects = people;
////          console.log('HERE DA PEEPOLE');
////          console.log($scope.objects);
////        });
////      
////      }).then(function(){
//      
//      
//      store.upsert({"ssn": "444-555-333-111","name": "Jane asdffdsafdd", "age": 58}).then(function(e){
//        console.log('updaten!');
//      console.log(e);
//      }));
  
  
      $indexedDB.openStore('test', (store) =>

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
      
      store.insert({"balls": "Joeyjoejoe's","size": "Huge", "color": "purple"}).then(function(e){
        console.log('ballsballsballs');
        console.log(e);
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
