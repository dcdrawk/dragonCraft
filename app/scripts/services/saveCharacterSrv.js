'use strict';

angular.module('dCraftApp').service('saveCharacterSrv', function(){
  
  var storage = localStorage;
  var newArray = [];
  var lastID = '0';
  
  
  //Check to see if save data exists
  if(!storage.getObj('characters')){
    console.log('No save data exists, setting up...');
    storage.setObj('characters', []);
  }
  
  //Add New Character
  this.addNewCharacter = function(character){
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
  };
  
  //Delete All Characters
  this.deleteAllCharacters = function(){
    storage.setObj('characters', []);
  };
  
  //Update Character
  this.updateCharacter = function(id, field, value){
    var characters = storage.getObj('characters');
    for(var i in characters){
      if(id === characters[i].id){
        characters[i][field] = value;
        characters = storage.setObj('characters', characters);
      }
    }
  }
  
});