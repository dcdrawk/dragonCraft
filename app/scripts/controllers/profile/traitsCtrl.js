'use strict';
angular.module('dCraftApp').controller('traitsCtrl', function($scope, characterSrv, raceSrv){
  $scope.character = characterSrv.getSelectedCharacter();
  $scope.races = raceSrv.races;
  
  $scope.getRaceInfo = function(race, subrace){
    for(var i in $scope.races){
      if($scope.races[i].name === race){
        $scope.selectedRace = $scope.races[i];
      }
    }
    if(subrace && $scope.selectedRace.subraces[0].abilityScoreIncease){
      for(var i in $scope.selectedRace.subraces){
        if($scope.selectedRace.subraces[i].name === subrace){
          $scope.selectedSubrace = $scope.selectedRace.subraces[i];
        }
      }
    }    
  }
  
  $scope.getSubraceInfo = function(race, subrace){
    for(var i in $scope.races){
      if($scope.races[i].name === race){
        $scope.selectedRace = $scope.races[i];
      }
    }
  }
  
});