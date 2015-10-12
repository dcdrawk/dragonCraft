'use strict';

angular.module('dCraftApp').service('databaseSrv', function($indexedDB, $q){
  var self = this;
  
  //Alignments
  this.getAlignments = function(){
    var deferred = $q.defer();
    $indexedDB.openStore('alignments', function(alignmentsStore){
      alignmentsStore.getAll().then(function(e){
        self.alignments = e;
        deferred.resolve(self.alignments);
      });
    });
    return deferred.promise;    
  };
  
  //Backgrounds
  this.getBackgrounds = function(){
    var deferred = $q.defer();
    $indexedDB.openStore('backgrounds', function(store){
      store.getAll().then(function(e){
        self.backgrounds = e;
        deferred.resolve(self.backgrounds);
      });
    });
    return deferred.promise;    
  };
  
  
  
  //Class Names
  this.getClassNames = function(){
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
  
  //Class Info (hit points, proficiency);
  this.getClassInfo = function(className){
    var deferred = $q.defer();
    
    $indexedDB.openStore('classes', function(classesStore){
      var find = classesStore.query();
      find = find.$eq(className);
      classesStore.eachWhere(find).then(function(e){
        self.classNames = e;
        deferred.resolve(self.classNames);
      });
    });
    //$indexedDB.closeDatabase();
    return deferred.promise;    
  };
  
  //Race Names
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
  
  //Race Traits
  this.getRaceTraits = function(race){    
    var deferred = $q.defer();
    $indexedDB.openStore('races', function(racesStore){      
      var find = racesStore.query();
      find = find.$eq(race);
      racesStore.eachWhere(find).then(function(e){
        self.raceInfo = e;
        deferred.resolve(self.raceInfo);
      });
    });
    return deferred.promise;    
  };
  
  //Subrace Names
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
  
  //Subrace Traits
  this.getSubraceTraits = function(subrace){    
    var deferred = $q.defer();
    $indexedDB.openStore('subraces', function(store){      
      var find = store.query();
      find = find.$eq(subrace);
      store.eachWhere(find).then(function(e){
        self.subraceInfo = e;
        deferred.resolve(self.subraceInfo);
      });
    });
    return deferred.promise;    
  };
  
});