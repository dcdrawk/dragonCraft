'use strict';
angular.module('dCraftApp').controller('historyCtrl', function($scope, characterSrv, saveCharacterSrv, backgroundSrv){
  $scope.alignments = backgroundSrv.alignments;
  $scope.backgrounds = backgroundSrv.backgrounds;
  $scope.character = characterSrv.getSelectedCharacter();
  
  //Update Character
  $scope.updateCharacter = function(id, field, value){
    saveCharacterSrv.updateCharacter(id, field, value);
  }
  
  //Get Alignment Description
  $scope.getAlignmentDescription = function(alignment){
    for(var i in $scope.alignments){
      if($scope.alignments[i].title === alignment){
        $scope.alignmentDescription = $scope.alignments[i].description;
      }
    }
  };
  
  //Get Background Info
  $scope.getBackgroundInfo = function(background){
    for(var i in $scope.backgrounds){
      if($scope.backgrounds[i].name === background){
        $scope.backgroundInfo = $scope.backgrounds[i];
      }
    }
  };
  
});