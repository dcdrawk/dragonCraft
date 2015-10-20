'use strict';

angular.module('dCraftApp').service('characterSrv', function(){
  var storage = localStorage;
  var characters = storage.getObj('characters');
  console.log('characters');
  console.log(characters);
  
  
  //Get Character List
  this.getCharacterList = function(){
    characters = storage.getObj('characters');
    return characters;
  };
  
  //Select Character
  this.selectCharacter = function(id){
    var characters = storage.getObj('characters');
    for(var i in characters){
      if(characters[i].id === id){
        storage.setObj('selectedCharacter', characters[i]);
      }
    }
  };
  
  //Get Selected Character
  this.getSelectedCharacter = function(){
    return storage.getObj('selectedCharacter');
  };
  
  //Update Selected Character
  this.updateSelectedCharacter = function(){
    
    return storage.getObj('selectedCharacter');
  };
});