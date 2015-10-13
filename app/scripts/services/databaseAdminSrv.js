'use strict';

angular.module('dCraftApp').service('databaseAdminSrv', function(raceSrv, classSrv, backgroundSrv, featsSrv, $indexedDB){
//  this.races = raceSrv.races;
//  this.classes = classSrv.classes;
//  this.alignments = backgroundSrv.alignments;
//  this.standardLanguages = backgroundSrv.standardLanguages;
//  this.exoticLanguages = backgroundSrv.exoticLanguages;
  var self = this;
  var alignments = [];
  var backgrounds = [];
  var languages = [];
  var classes = [];
  var classAbilities = [];
  var classSpecializations = [];
  var races = [];
  var subraces = [];
  var feats = [];
  
  this.checkMetadata = function(){
    //console.log($indexedDB);
    $indexedDB.openStore('metadata', function(metadataStore){
      var find = metadataStore.query();
      find = find.$eq('initialized');
      console.log('checking db metadata...');
      metadataStore.eachWhere(find).then(function(e){
        if(e.length === 0){
          self.initializeDatabase();
          console.log('no metadata found... adding metadata now...');        
          metadataStore.insert({"data":"initialized", "info":"database initialized!"}).then(function(e){
            console.log('metadata added!');
          });
        } else {
          console.log('metadata already exists!');
        }
      });
    });
    $indexedDB.closeDatabase();
  };
  
  
  this.initializeDatabase = function(){
    //--Alignments--
    for(var i in backgroundSrv.alignments){
      alignments.push({"name":backgroundSrv.alignments[i].title, "description":backgroundSrv.alignments[i].description})
    }    
    $indexedDB.openStore('alignments', function(alignmentsStore){
      alignmentsStore.upsert(alignments).then(function(e){
        console.log('upserting alignments');
        //console.log(e);
      });
    });
    
    //--Backgrounds--
    for(var i in backgroundSrv.backgrounds){
      //console.log(backgroundSrv.backgrounds[i].special);
      
      backgrounds.push({"name":backgroundSrv.backgrounds[i].name,
                       "description":backgroundSrv.backgrounds[i].description,
                       "skills":backgroundSrv.backgrounds[i].skillProficiencies,
                       "tools":backgroundSrv.backgrounds[i].toolProficiencies,
                       "languages":backgroundSrv.backgrounds[i].languages,
                       "feature":backgroundSrv.backgrounds[i].feature,
                       "special":backgroundSrv.backgrounds[i].special,
                       "equipment":backgroundSrv.backgrounds[i].equipment                   
                      });      
    }
    $indexedDB.openStore('backgrounds', function(backgroundStore){
      backgroundStore.upsert(backgrounds).then(function(e){
        console.log('upserting backgrounds');
        //console.log(e);
      });
    });
    
    //--Languages--
    for(var i in backgroundSrv.exoticLanguages){
      languages.push({"name":backgroundSrv.exoticLanguages[i], "type":"Exotic"});
    }
    for(var i in backgroundSrv.standardLanguages){
      languages.push({"name":backgroundSrv.standardLanguages[i], "type":"Standard"});
    }
    //console.log(languages);
    $indexedDB.openStore('languages', function(languagesStore){
      languagesStore.upsert(languages).then(function(e){
        console.log('upserting languages');
        //console.log(e);
      });
    });
    
    //--Classes--
    for(var i in classSrv.classes){
      classes.push({"name":classSrv.classes[i].name,
                    //"description":classSrv.classes[i].description,
                    "hitpoints":classSrv.classes[i].hitPoints,
                    "proficiency":classSrv.classes[i].proficiencies                
                   });
      for(var j in classSrv.classes[i].specializations){
        classSpecializations.push({"name":classSrv.classes[i].specializations[j].title,
                                   "description":classSrv.classes[i].specializations[j].description,
                                   "class":classSrv.classes[i].name             
                                  });
        for(var k in classSrv.classes[i].specializations[j].abilities){
          classAbilities.push({"name":classSrv.classes[i].specializations[j].abilities[k].title,
                               "description":classSrv.classes[i].specializations[j].abilities[k].description,
                               "classes":classSrv.classes[i].name,
                               "specs":classSrv.classes[i].specializations[j].title,
                               "level":classSrv.classes[i].specializations[j].abilities[k].level,
                               "prerequisite":classSrv.classes[i].specializations[j].abilities[k].prerequisite
                              });
        }
      }
      for(var p in classSrv.classes[i].specializations[j]){
        classSpecializations.push({"name":classSrv.classes[i].specializations[j].title,
                                   "description":classSrv.classes[i].specializations[j].description,
                                   "class":classSrv.classes[i].name             
                                  });
      }
      for(var n in classSrv.classes[i].abilities){
        classAbilities.push({"name":classSrv.classes[i].abilities[n].title,
                             "description":classSrv.classes[i].abilities[n].description,
                             "classes":classSrv.classes[i].name,
                             "level":classSrv.classes[i].abilities[n].level,
                             "prerequisite":classSrv.classes[i].abilities[n].prerequisite
                            });
      }
    }
    $indexedDB.openStore('classes', function(classesStore){
      classesStore.upsert(classes).then(function(e){
        console.log('upserting classes');
      });
    });
    
//    console.log(classSpecializations);
    $indexedDB.openStore('specs', function(specsStore){
      specsStore.upsert(classSpecializations).then(function(e){
        console.log('upserting specs');
      });
    });
    
    $indexedDB.openStore('classAbilities', function(classAbilitiesStore){
      classAbilitiesStore.upsert(classAbilities).then(function(e){
        console.log('upserting class abilities');
      });
    });
    
    //--Races--
    for(i in raceSrv.races){      
      races.push({"name":raceSrv.races[i].name,
                  "description":raceSrv.races[i].description,
                  "abilityScoreIncrease":raceSrv.races[i].abilityScoreIncrease,
                  "speed":raceSrv.races[i].speed,
                  "languages":raceSrv.races[i].languages,
                  "traits":raceSrv.races[i].traits                  
                 });
        for(var j in raceSrv.races[i].subraces){
          subraces.push({"name":raceSrv.races[i].subraces[j].name,
                         "race":raceSrv.races[i].name,
                         "description":raceSrv.races[i].subraces[j].description,
                         "abilityScoreIncrease":raceSrv.races[i].subraces[j].abilityScoreIncrease,
                         "traits":raceSrv.races[i].subraces[j].traits                  
                        });
        }
    }
    $indexedDB.openStore('races', function(racesStore){
      racesStore.upsert(races).then(function(e){
        console.log('upserting races');
        //console.log(e);
      });
    });
    
    $indexedDB.openStore('subraces', function(subracesStore){
      subracesStore.upsert(subraces).then(function(e){
        console.log('upserting subraces');
        //console.log(e);
      });
    });
    
    //Feats
    for(i in featsSrv.feats){
      feats.push({"name":featsSrv.feats[i].name,
                  "description":featsSrv.feats[i].description
                 });
    }
    $indexedDB.openStore('feats', function(subracesStore){
      subracesStore.upsert(feats).then(function(e){
        console.log('upserting feats');
      });
    });
    
    $indexedDB.closeDatabase();
    
    
  };
  
  this.clearData = function(){   
    $indexedDB.openStore('alignments', function(alignmentStore){
      alignmentStore.clear().then(function(){});
    });
    
    $indexedDB.openStore('backgrounds', function(backgroundStore){
      backgroundStore.clear().then(function(){});
    });
    
    $indexedDB.openStore('classes', function(classesStore){
      classesStore.clear().then(function(){});
    });
    
    $indexedDB.openStore('specs', function(specsStore){
      specsStore.clear().then(function(){});
    });
    
    $indexedDB.openStore('feats', function(featsStore){
      featsStore.clear().then(function(){});
    });
    
    $indexedDB.openStore('classAbilities', function(classAbilitiesStore){
      classAbilitiesStore.clear().then(function(){});
    });
    
    $indexedDB.openStore('races', function(raceStore){
      raceStore.clear().then(function(){});
    });
    
    $indexedDB.openStore('subraces', function(subraceStore){
      subraceStore.clear().then(function(){});
    });
    
    $indexedDB.openStore('metadata', function(metadataStore){
      metadataStore.clear().then(function(){});
    });
    $indexedDB.closeDatabase();
  };
  
  this.deleteDatabase = function(){
    console.log('deleting the database!');
    
    var req = indexedDB.deleteDatabase('dragonCraftDB');
    req.onsuccess = function () {
      console.log("Deleted database successfully");
    };
    req.onerror = function () {
      console.log("Couldn't delete database");
    };
    req.onblocked = function () {
      console.log("Couldn't delete database due to the operation being blocked");
    };
  };
  
});