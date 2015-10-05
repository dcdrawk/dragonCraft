'use strict';

angular.module('dCraftApp').service('characterSrv', function(){  
  var storage = localStorage;
  
  //Get Character List
  this.getCharacterList = function(){
    return storage.getObj('characters');
  }
  
  //Select Character
  this.selectCharacter = function(id){
    var characters = storage.getObj('characters');
    for(var i in characters){
      if(characters[i].id === id){
        storage.setObj('selectedCharacter', characters[i]);
      }
    }
  }
  
  //Get Selected Character
  this.getSelectedCharacter = function(){
    return storage.getObj('selectedCharacter');
  }
});