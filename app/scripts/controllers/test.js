'use strict';

/**
 * @ngdoc function
 * @name dunTomeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dunTomeApp
 */
 /* jshint ignore:start */
angular.module('dunTomeApp')
  .controller('TestCtrl', function ($scope, $rootScope) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  
  //let's see if there's a local character set
  var localCharacter = JSON.parse(localStorage.getObject('character'));
  
  //if there is no local character, let's try to set it to the selectedCharacter
  if(localCharacter == 'undefined'){
    console.log('adding character to localstorage')
    localStorage.setObject('character', $rootScope.selectedCharacter);
    
  //else, if the selected character is undefined (e.g. reload)
  } else if($rootScope.selectedCharacter == undefined){
    console.log('character is undefined');
    console.log(localCharacter);
    $rootScope.selectedCharacter = localCharacter;
  }

  });
/* jshint ignore:end */