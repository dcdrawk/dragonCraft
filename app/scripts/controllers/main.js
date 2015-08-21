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
  .controller('MainCtrl', function ($scope, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    if(!$rootScope.characterList){
      $rootScope.characterList = [];
    }
    //$rootScope.characterArray = [];
    //
    // Define your database
    //
    // Code here will be linted with ignored by JSHint.
    var db = new Dexie("test-database");
    db.version(1).stores({
        characters: 'name,class'
    });
    
    //
    // Open it
    //
    db.open();
    $scope.showCharacters = false;
    
    $scope.getCharacters = function(){
      console.log('charList:');
      console.log($rootScope.characterList.length);
      if($rootScope.characterList == undefined || $rootScope.characterList.length == 0){
        console.log('EMPTY!!!');
        $scope.gettingCharacters = true;
        $rootScope.characterList = [];
      
        db.characters.each(function(char) {
          console.log('runnisng!');
          console.log("class: " + JSON.stringify(char.class));
          $rootScope.characterList.push({id:char["id"], name:char["name"], race:char["race"], class:char["class"]});  
          console.log($rootScope.characterList);
        }).then(function(){
          $scope.showCharacters = true;
          $scope.gettingCharacters = false;
          $rootScope.$digest();
        });
      } else {
        $scope.showCharacters = true;
        $scope.gettingCharacters = false;
      }
    }
    $scope.getCharacters();
  });
/* jshint ignore:end */