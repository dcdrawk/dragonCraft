'use strict';
angular.module('dCraftApp').controller('TestCtrl', function($scope, RaceSrv, ClassSrv) {
  console.log(RaceSrv.races);
  $scope.races = RaceSrv.races;
  $scope.classes = ClassSrv.classes;
  
//  .filter('html', function() {
//     return function(input) {
//       
//       return out;
//     }
//  });
//  
  
});
