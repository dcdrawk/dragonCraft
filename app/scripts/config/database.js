'use strict';
angular.module('dCraftApp')
.config(function ($indexedDBProvider) {
  $indexedDBProvider
    .connection('dragonCraftDB')
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
      backgroundStore.createIndex('equipment_idx', 'equipment', {unique: false});
      
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
      featsStore.createIndex('description_idx', 'description', {unique: false});
      
      //--Races--
      var raceStore = db.createObjectStore('races', {keyPath: 'name'});
      raceStore.createIndex('description_idx', 'description', {unique: false});
      raceStore.createIndex('abilityScoreIncrease_idx', 'abilityScoreIncrease', {unique: false});
      raceStore.createIndex('speed_idx', 'speed', {unique: false});
      raceStore.createIndex('languages_idx', 'languages', {unique: false});
      raceStore.createIndex('traits_idx', 'traits', {unique: false});
    
      //--Subraces--
      var subraceStore = db.createObjectStore('subraces', {keyPath: 'name'});
      subraceStore.createIndex('race_idx', 'race', {unique: false});
      subraceStore.createIndex('description_idx', 'description', {unique: false});
      subraceStore.createIndex('abilityScoreIncrease_idx', 'abilityScoreIncrease', {unique: false});
      subraceStore.createIndex('traits_idx', 'traits', {unique: false});
    });
});