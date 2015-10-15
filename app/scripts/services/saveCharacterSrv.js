'use strict';

angular.module('dCraftApp').service('saveCharacterSrv', function($q, $location){
  
  var storage = localStorage;
  var newArray = [];
  var lastID = '0';
  
  
  //Check to see if save data exists
  if(!storage.getObj('characters')){
    storage.setObj('characters', []);
  }
  
  //Add New Character
  this.addNewCharacter = function(character){
    var deferred = $q.defer();
    var characters = storage.getObj('characters');
    //Add a unique id to the character...
    if(characters.length === 0){
      character.id = 0;
    } else {
      for(var i in characters){
        if(characters[i].id > lastID){
          lastID = characters[i].id;          
        }
      }
      character.id = parseInt(lastID) + 1;
    }
    characters.push(character);
    storage.setObj('characters', characters);
    deferred.resolve(characters);
    return deferred.promise;  
  };
  
  //Delete All Characters
  this.deleteAllCharacters = function(){
    storage.setObj('characters', []);
  };
  
  //Update Character
  this.updateCharacter = function(id, field, value){    
    var characters = storage.getObj('characters');
    for(var i in characters){
      if(id === parseInt(characters[i].id)){
        characters[i][field] = value;
        storage.setObj('selectedCharacter', characters[i]);
        characters = storage.setObj('characters', characters);
        return;
      }
    }
  };
  
});