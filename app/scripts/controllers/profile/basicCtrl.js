'use strict';
angular.module('dCraftApp').controller('basicCtrl', function($scope, characterSrv, saveCharacterSrv, databaseSrv){
  
    databaseSrv.getClassNames().then(function(classNames){
      $scope.classes = classNames;
    });

    databaseSrv.getRaceNames().then(function(raceNames){
      $scope.races = raceNames;
    });
  
  $scope.character = characterSrv.getSelectedCharacter();
  
  console.log($scope.character);
  //Update Subraces
  $scope.updateSubraces = function(race){
    for(var i in $scope.races){
      if(race === $scope.races[i].name){
        $scope.subraces = $scope.races[i].subraces;        
        //console.log($scope.subraces);
      }
    }
  };
  
  //Update Character
  $scope.updateCharacter = function(id, field, value){
    saveCharacterSrv.updateCharacter(id, field, value);
  }
  
});