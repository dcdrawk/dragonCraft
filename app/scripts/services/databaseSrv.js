'use strict';

angular.module('dCraftApp').service('databaseSrv', function($indexedDB, $q){
  var self = this;
  
  //Classes
  this.getClassNames = function(){
    console.log($indexedDB);
    var deferred = $q.defer();
    $indexedDB.openStore('classes', function(classesStore){
      classesStore.getAllKeys().then(function(e){
        self.classNames = e;
        deferred.resolve(self.classNames);
      });
    });
    //$indexedDB.closeDatabase();
    return deferred.promise;    
  };
  
  
  //Races
  this.getRaceNames = function(){
    var deferred = $q.defer();
    $indexedDB.openStore('races', function(racesStore){
      racesStore.getAllKeys().then(function(e){
        self.raceNames = e;
        deferred.resolve(self.raceNames);
      });
    });
    //$indexedDB.closeDatabase();
    return deferred.promise;    
  };
  
  //Subraces
  this.getSubraceNames = function(race){
    var deferred = $q.defer();
    $indexedDB.openStore('subraces', function(subracesStore){
      
      var find = subracesStore.query();
      find = find.$eq(race);
      find = find.$index('race_idx');    
      
      subracesStore.eachWhere(find).then(function(e){
        console.log(e);
        self.subraceNames = e;
        deferred.resolve(self.subraceNames);
      });
    });
    //$indexedDB.closeDatabase();
    return deferred.promise;    
  };
  
});