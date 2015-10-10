'use strict';
angular.module('dCraftApp')
.config(function ($indexedDBProvider) {
  $indexedDBProvider
    .connection('myIndexedDB')
//    .upgradeDatabase(1, function(event, db, tx){
//      console.log(event);
//      console.log(db);
//      console.log(tx);
//      var objStore = db.createObjectStore('people', {keyPath: 'ssn'});
//      objStore.createIndex('name_idx', 'name', {unique: false});
//      objStore.createIndex('age_idx', 'age', {unique: false});
//
//    })
    .upgradeDatabase(2, function(event, db, tx){
    
      //--Metadata--
      var metadataStore = db.createObjectStore('metadata', {keyPath: 'data'});
      metadataStore.createIndex('info_idx', 'info', {unique: false});    
    
      //--Alignments--
      var alignmentStore = db.createObjectStore('alignments', {keyPath: 'name'});
      alignmentStore.createIndex('description_idx', 'description', {unique: false});
    
      //--Backgrounds--
      var backgroundStore = db.createObjectStore('backgrounds', {keyPath: 'name'});
      backgroundStore.createIndex('description_idx', 'description', {unique: false});
      backgroundStore.createIndex('skills_idx', 'skills', {unique: false});
      backgroundStore.createIndex('tools_idx', 'tools', {unique: false});
      backgroundStore.createIndex('languages_idx', 'languages', {unique: false});
      backgroundStore.createIndex('specials_idx', 'special', {unique: false});
      backgroundStore.createIndex('features_idx', 'feature', {unique: false});
      backgroundStore.createIndex('equipment_idx', 'description', {unique: false});
      
      //--Languages--
      var languagesStore = db.createObjectStore('languages', {keyPath: 'name'});
      languagesStore.createIndex('type_idx', 'type', {unique: false});
    
      //--Classes--
      var classesStore = db.createObjectStore('classes', {keyPath: 'name'});
      classesStore.createIndex('description_idx', 'description', {unique: false});
      classesStore.createIndex('hitpoints_idx', 'hitpoints', {unique: false});
      classesStore.createIndex('proficiency_idx', 'proficiency', {unique: false});
    
      //--Class Specializations--
      var specsStore = db.createObjectStore('specs', {keyPath: 'name'});
      specsStore.createIndex('description_idx', 'description', {unique: false});
      specsStore.createIndex('class_idx', 'class', {unique: false});
    
      //--Class Abilities--
      var classAbilitiesStore = db.createObjectStore('classAbilities', {keyPath: 'name'});
      classAbilitiesStore.createIndex('description_idx', 'description', {unique: false});
      classAbilitiesStore.createIndex('classes_idx', 'classes', {unique: false});
      classAbilitiesStore.createIndex('specs_idx', 'specs', {unique: false});
      classAbilitiesStore.createIndex('level_idx', 'level', {unique: false});
      classAbilitiesStore.createIndex('prerequisite_idx', 'prerequisite', {unique: false});      
    
      //--Features--
      var featsStore = db.createObjectStore('feats', {keyPath: 'name'});
      featuresStore.createIndex('description_idx', 'description', {unique: false});
      
      //--Races--
      var raceStore = db.createObjectStore('races', {keyPath: 'name'});
      raceStore.createIndex('description_idx', 'description', {unique: false});
      raceStore.createIndex('abilityScoreIncrease_idx', 'abilityScoreIncrease', {unique: false});
      raceStore.createIndex('speed_idx', 'speed', {unique: false});
      raceStore.createIndex('languages_idx', 'description', {unique: false});
      raceStore.createIndex('traits_idx', 'description', {unique: false});
    
      //--Subraces--
      var subraceStore = db.createObjectStore('subraces', {keyPath: 'name'});
      subraceStore.createIndex('description_idx', 'description', {unique: false});
      subraceStore.createIndex('abilityScoreIncrease_idx', 'abilityScoreIncrease', {unique: false});
      subraceStore.createIndex('speed_idx', 'speed', {unique: false});
      subraceStore.createIndex('languages_idx', 'description', {unique: false});
      subraceStore.createIndex('traits_idx', 'description', {unique: false});
    
    
    
    });
//    .upgradeDatabase(8, function(event, db, tx){
//      db.createObjectStore('peoplePhones', {keyPath: 'person_ssn'});      
//    });

//  var req = indexedDB.deleteDatabase('');
//  req.onsuccess = function () {
//      console.log("Deleted database successfully");
//  };
//  req.onerror = function () {
//      console.log("Couldn't delete database");
//  };
//  req.onblocked = function () {
//      console.log("Couldn't delete database due to the operation being blocked");
//  };


//  var request = indexedDB.open("myIndexedDB", 5);
//  
//  request.onsuccess = function (evt) {
//      var db = request.result;                                                            
//  };
//
//  request.onerror = function (evt) {
//      console.log("IndexedDB error: " + evt.target.errorCode);
//  };
//
//  request.onupgradeneeded = function (evt) {
//    console.log('upgrade needed mang');
//
//    //console.log(evt.currentTarget.transaction.objectStore('test'));
//
//    //var objectStore = evt.currentTarget.transaction.objectStore('test');
//    //objectStore.createIndex('shape_idx', 'shape', {unique: false});
//
//  };
});