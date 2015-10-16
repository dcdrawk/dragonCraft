'use strict';

angular.module('dCraftApp')
.controller('AppCtrl', function($scope, $rootScope, $location, $timeout, $mdSidenav, $mdUtil, $log, $mdDialog, $anchorScroll) {
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
     $rootScope.selectedID = '';
     $rootScope.loading = true;
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug('toggle ' + navID + ' is done');
              });
          },200);
      return debounceFn;
    }
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.toggleLeft = function() {
      $mdSidenav('left').toggle()
      .then(function(){
        $log.debug('toggle left is done');
      });
    };
    
    //Go function
    $rootScope.go = function ( path ) {
      $location.path( path );
      //$rootScope.scrollTo('top');
    };
    
    //back function
    $rootScope.goBack = function () {
      window.history.back();
      //$rootScope.scrollTo('top');
    };

    //Scrolls to a hash element
    $rootScope.scrollTo = function ( hash ) {
      //$anchorScroll(hash);
    };  
    
    //Toolbar menu code:
    var originatorEv;
    this.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
    
    this.announceClick = function(index) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('You clicked!')
          .content('You clicked the menu item at index ' + index)
          .ok('Nice')
          .targetEvent(originatorEv)
      );
      originatorEv = null;
    };
    
    //Top-right Menu Items
    $scope.menu = [{
      text:'Characters',
      icon:'people',
      href:'/'
    },
    {
      text:'Settings',
      icon:'settings',
      href:'/settings'
    }];
    
//    $scope.$on('$locationChangeStart', function(event, next, current) {
//      console.log('Location change start!');
//      var curPath = current.slice( current.lastIndexOf('/')+1, current.length );
//      var nextPath = next.slice( next.lastIndexOf('/')+1, next.length );
//      transitionSrv.setTransition(curPath, nextPath);
//    });

//    $scope.$on('$routeChangeSuccess', function(next, current) { 
//      $scope.overflow = 'hide-overflow';
//      $timeout(function(){
//        $scope.overflow = 'show-overflow';
//      }, 700);
//    });
       
  })  

  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug('close LEFT is done');
        });
    };
  });