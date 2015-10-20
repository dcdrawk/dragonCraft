'use strict';

angular.module('dCraftApp').service( 'transitionSrv', function($rootScope){  
  //Functions
  
  this.setTransition = function(curPath, nextPath){
    console.log('<----- TRANSITION START ----->');
    console.log($rootScope);
    console.log('Current Path:' + curPath);
    console.log('Next Path: ' + nextPath);
    
    if(curPath === 'profile'){
      switch(nextPath){
        case 'basic-info':
        case 'appearance':
        case 'history':
        case 'traits':
        case 'proficiency':
        case 'feats':
          console.log('slide Left!!!');
          $rootScope.transition = 'slide-left';
          break;
        case 'character':
          console.log('slide right!!!');
          $rootScope.transition = 'slide-right';
          break;
      }
      
    } else if(curPath === 'character'){
      switch(nextPath){
        case 'profile':
        case 'stats':
        case 'spells':
        case 'equipment':
          console.log('slide Left!!!');
          $rootScope.transition = 'slide-left';
          break;
        case 'character':
          console.log('slide right!!!');
          $rootScope.transition = 'slide-right';
          break;
      }
    } else {
      console.log('SLIDE IT RIGHT');
      $rootScope.transition = 'slide-right';
    }
    

    console.log('<----- TRANSITION END ----->');
  };
  
});
  
