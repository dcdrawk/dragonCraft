'use strict';

/**
 * @ngdoc function
 * @name dCraftApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dCraftApp
 */
 /* jshint ignore:start */
angular.module('dCraftApp')
  .controller('AdminCtrl', function ($scope, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    console.log('test');
    
    var db = new Dexie("test-database");
    db.version(1).stores({
      charClasses: 'name,description',
      //characters: 'name,race,subrace,class,background,level'
      characters: 'name,class'
      //    classes: 'name'
      // ...add more stores (tables) here...
    });

    //open the db
    
    
    
//   $scope.dbDelete = function(){
//      db.open();
//      db.delete();
//      console.log('database deleted!');
//      $rootScope.populate();
//      db.close();
//   }
  });
/* jshint ignore:end */