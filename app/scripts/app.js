'use strict';

/**
 * @ngdoc overview
 * @name dCraft
 * @description
 * # dCraftApp
 *
 * Main module of the application.
 */
/* jshint ignore:start */
angular
  .module('dCraftApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngMessages',
    'angularScreenfull',
    'ngRouteAnimationManager',
    'indexedDB',
    'oc.lazyLoad'
  ])  
//  .config(function ($indexedDBProvider) {
//    //console.log(db);
//    $indexedDBProvider
//      .connection('myIndexedDB')
//      .upgradeDatabase(1, function(event, db, tx){
//        var objStore = db.createObjectStore('people', {keyPath: 'ssn'});
//        objStore.createIndex('name_idx', 'name', {unique: false});
//        objStore.createIndex('age_idx', 'age', {unique: false});
//      
//      })
//      .upgradeDatabase(2, function(event, db, tx){
//        db.createObjectStore('peoplePhones', {keyPath: 'person_ssn'});      
//      })
//      .upgradeDatabase(5, function(event, db, tx){
//      console.log(event);
//      console.log(db);
//      console.log(tx);
////        var ballStore = db.createObjectStore('test', {keyPath: 'balls'});      
////        ballStore.createIndex('size_idx', 'size', {unique: false});
////        ballStore.createIndex('color_idx', 'color', {unique: false});
////        db.createIndex('shape_idx', 'shape', {unique: false});
//      });
//  
//    var request = indexedDB.open("myIndexedDB", 5);
//    request.onsuccess = function (evt) {
//        var db = request.result;                                                            
//    };
//
//    request.onerror = function (evt) {
//        console.log("IndexedDB error: " + evt.target.errorCode);
//    };
//  
//    request.onupgradeneeded = function (evt) {
//      console.log('upgrade needed mang');
//      
//      //console.log(evt.currentTarget.transaction.objectStore('test'));
//      
//      var objectStore = evt.currentTarget.transaction.objectStore('test');
//      objectStore.createIndex('shape_idx', 'shape', {unique: false});
//      
//    };
//  })
  .run(function($rootScope, $location){
    
    //set up the local storage for the selected Character
    var myStorage = localStorage;
    
    //local storage stringify solution for objects in localstorage
//    Storage.prototype.setObject = function(key, value) {
//      this.setItem(key, JSON.stringify(value));
//    }
//
//    Storage.prototype.getObject = function(key) {
//      var value = this.getItem(key);
//      return value;
//    }
    
    Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
    }
    Storage.prototype.getObj = function(key) {
        return JSON.parse(this.getItem(key))
    }
    
//    $rootScope.$on('$stateChangeSuccess', function() {
//      console.log('test!');
//       document.body.scrollTop = document.documentElement.scrollTop = 0;
//    });
    
    var mainContent = document.getElementById('main-content');
    //var enter = document.getElementsByClassName('ng-enter');
    
    $rootScope.$on('$locationChangeSuccess', function(event, current, next) {
      //var enter = document.getElementsByClassName('ng-enter');
      //console.log(enter);
      
      mainContent.scrollTop = 0;
      if($location.path() == '/'){
        $rootScope.home = true;
      } else {
        $rootScope.home = false;
      }
    });

    
  });
  /* jshint ignore:end */
