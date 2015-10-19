'use strict';

angular.module('dCraftApp')
.controller('AppCtrl', function($scope, $rootScope, $location, $timeout, $mdSidenav, $mdUtil, $log, $mdDialog) {
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
    $scope.go = function ( path ) {
      $location.path( path );
      //$rootScope.scrollTo('top');
    };
    
    //back function
    $scope.goBack = function () {
      window.history.back();
      //$rootScope.scrollTo('top');
    };

    //Scrolls to a hash element
//    $rootScope.scrollTo = function ( hash ) {
//      //$anchorScroll(hash);
//    };  
    
    //Toolbar menu code:
    var originatorEv;
    this.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
    
//    this.announceClick = function(index) {
//      $mdDialog.show(
//        $mdDialog.alert()
//          .title('You clicked!')
//          .content('You clicked the menu item at index ' + index)
//          .ok('Nice')
//          .targetEvent(originatorEv)
//      );
//      originatorEv = null;
//    };
    
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
  
//    $scope.$on('$locationChangeStart', function(event) {
//      console.log('change start');
//      console.log($scope.modalOpen);
//      if($scope.modalOpen === true){
//        event.preventDefault();
//        $scope.modalOpen = false;
//        $mdDialog.cancel();
//      }
//      //event.preventDefault();
//    });
  
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
  
  //Show Feat Info
  //Dialog
  $scope.showFeatInfo = function(ev, feat) {
    $scope.modalOpen = true;
    console.log(feat);
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/templates/dialog/feat-info.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      locals: {
        feat: feat
      }
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };
  
  //Dialog
  $scope.showAdvanced = function(ev) {
    $scope.modalOpen = true;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/templates/dialog/custom-race.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
      $scope.modalOpen = false;
      console.log('answer!');
    }, function() {
      console.log('cancel!');
      $scope.status = 'You cancelled the dialog.';
      $scope.modalOpen = false;
    });
  };
     //Dialog Controller
    function DialogController($scope, $mdDialog, feat) {
      $scope.modalOpen = true;
      $scope.feat = feat;
      $scope.hide = function() {
        $mdDialog.hide();
        $scope.modalOpen = false;
      };
      $scope.cancel = function(selection) {
        console.log('cancel!');
        $mdDialog.cancel();
        $scope.modalOpen = false;
      };
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
        $scope.modalOpen = false;
      };
      
      $scope.$on('$locationChangeStart', function(event) {
        console.log('change start');
        console.log($scope.modalOpen);
        if($scope.modalOpen === true){
          event.preventDefault();
          $scope.modalOpen = false;
          $mdDialog.cancel();
        }
        //event.preventDefault();
      });
    }
      
      
  })  

  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug('close LEFT is done');
        });
    };
    
  });