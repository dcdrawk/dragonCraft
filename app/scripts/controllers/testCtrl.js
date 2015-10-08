'use strict';
angular.module('dCraftApp').controller('testCtrl', function($scope, $indexedDB) {
  console.log('test');
  //$scope.races = RaceSrv.races;
  //$scope.classes = ClassSrv.classes;
  
  $scope.objects = [{
    title:'Lawful Good',
    description:'Can be counted on to do the right thing as expected by society.'
  },{
    title:'Neutral Good',
    description:'Do the best they can to help others according to their needs.'
  },{
    title:'Chaotic Good',
    description:'Act as their conscience directs, with little regard for what others expect.'
  },{
    title:'Lawful Neutral',
    description:'Act in accordance with law, tradition, or personal codes.'
  },{
    title:'Neutral',
    description:'The alignment of those who prefer to steer clear of moral questions and don’t take sides, doing what seems best at the time.'
  },{
    title:'Chaotic Neutral',
    description:'Creatures follow their whims, holding their personal freedom above all else. Many barbarians and rogues, and some bards, are chaotic neutral. '
  },{
    title:'Lawful Evil',
    description:'Methodically take what they want, within the limits of a code of tradition, loyalty, or order. Devils, blue dragons, and hobgoblins are lawful evil.'
  },{
    title:'Neutral Evil',
    description:'The alignment of those who do whatever they can get away with, without compassion or qualms.'
  },{
    title:'Chaotic Evil',
    description:'Act with arbitrary violence, spurred by their greed, hatred, or bloodlust.'
  }]

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
//      store.upsert({"ssn": "444-555-333-111","name": "Jane asddsaffdsafdd", "age": 58}).then(function(e){
//        console.log('updaten!');
//        console.log(e);
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
      
//      store.upsert({"balls": "jim", "shape": "squares", "color": "orange", "size": "small"}).then(function(e){
//        console.log('ballsballsballs');
//        console.log(e);
//      })
                           
       store.upsert({"balls": "jim", "shape": "squares", "color": $scope.objects, "size": "small"}).then(function(e){
        console.log('ballsballsballs');
        console.log(e);
      })

  );
  
//  .filter('html', function() {
//     return function(input) {
//       
//       return out;
//     }
//  });
//  
  
});
