'use strict';
angular.module('dCraftApp')  
  .controller('featsCtrl', function($scope, characterSrv, saveCharacterSrv, databaseSrv, $timeout, $filter, featInfoSrv, $mdDialog){
  
  //$scope.searchText = 'ac';
  $scope.character = characterSrv.getSelectedCharacter();
  
  $scope.featsSearchResults = [];
  $scope.query = '';
  $scope.allFeats = '';
  
  if($scope.character.feats !== undefined){
    $scope.characterFeats = $scope.character.feats;
  } else {
    $scope.characterFeats = [];//$scope.character.feats;
  }
  $scope.loading = true;
  
  databaseSrv.getFeats().then(function(feats){
    $timeout(function(){
      $scope.allFeats = feats;
      $scope.feats = feats;
      $scope.updateFeats();
      $scope.loading = false;
      //Array.isArray($scope.feats)
      console.log('here be feats');
      console.log(Array.isArray($scope.feats));
      //$scope.feats = $filter('filter')($scope.feats, {name: $scope.query});
    }, 700);
  });
  
  //Update selected
  $scope.updateFeats = function(){
    for(var i in $scope.feats){
      $scope.feats[i].isSelected = false;
    }
    
    for(var i in $scope.characterFeats){
      for(var j in $scope.feats){
        if($scope.characterFeats[i].name === $scope.feats[j].name){
          $scope.feats[j].isSelected = true;
          $scope.characterFeats[i].isSelected = true;
        }
      }
    }
  };
  
  //Update Character
  $scope.updateCharacter = function(id, field, value){
    saveCharacterSrv.updateCharacter(id, field, value);
  };
  
  //Select Feat
  $scope.selectFeat = function(event, feat){
    console.log(feat);
    if(feat.isSelected === false){
      $scope.addFeat(feat);
    } else {
      $scope.removeFeat(feat);
    }    
//    event.stopPropagation();
  };
  
  //Add a Feat
  $scope.addFeat = function(feat){
   // console.log(event);
//    event.preventDefault();
    //feat.isSelected = true;
//    $scope.feats[index].isSelected = true;

    //console.log(feat);
    //console.log($scope.feats);
    $scope.characterFeats.push(feat);
    $scope.updateCharacter($scope.character.id, 'feats', $scope.characterFeats);
    
    $timeout(function(){      
      $scope.updateFeats();
    }, 100);
  };
  
  
  
  //Remove a Feat
  $scope.removeFeat = function(feat){
    console.log('removing this item...');
    for(var i in $scope.characterFeats){
      if($scope.characterFeats[i].name == feat.name){
        console.log('deleting an item...');
        $scope.characterFeats.splice(i, 1);
      }
    }
    $scope.updateCharacter($scope.character.id, 'feats', $scope.characterFeats);
    //$scope.updateFeats();
    $timeout(function(){      
      $scope.updateFeats();
    }, 100);
  };
  
  $scope.featsSearch = function(query){
    console.log('search...');
    $scope.feats = $scope.allFeats;
    $scope.feats = $filter('filter')($scope.feats, {name: query});
//    $scope.featsSearchResults = [];
//    console.log("----NEW QUERY---");
//    for(var i in $scope.feats){
//      var result = $scope.feats[i].name.search(new RegExp(query, "i"));
//      if(result > -1){
//        $scope.featsSearchResults.push($scope.feats[i]);
//      }
//    }
  };
  
  $scope.firstTab = function(){
//    event.preventDefault();
    $scope.selectedTab = 0;
  };
  
   
});