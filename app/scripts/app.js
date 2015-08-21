'use strict';

/**
 * @ngdoc overview
 * @name dCraft
 * @description
 * # dCraftApp
 *
 * Main module of the application.
 */
angular
  .module('dCraftApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngMessages'
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue', {
      'default': '800', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '300', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '500', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
      })
      // If you specify less than all of the keys, it will inherit from the
      // default shades
      .accentPalette('grey', {
        'default': '600' // use shade 200 for default, and keep all other shades the same
      });
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/new-character', {
        templateUrl: 'views/new-character.html',
        controller: 'NewCharCtrl',
        controllerAs: 'newChar'
      })
      
      //Character Navigation
      .when('/character', {
        templateUrl: 'views/character/home.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      
      //Profile
      .when('/character/profile', {
        templateUrl: 'views/character/profile/index.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      .when('/character/profile/basic-info', {
        templateUrl: 'views/character/profile/basic.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      .when('/character/profile/appearance', {
        templateUrl: 'views/character/profile/appearance.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      .when('/character/profile/history', {
        templateUrl: 'views/character/profile/history.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      .when('/character/profile/proficiency', {
        templateUrl: 'views/character/profile/proficiency.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      .when('/character/profile/traits', {
        templateUrl: 'views/character/profile/traits.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      .when('/character/profile/feats', {
        templateUrl: 'views/character/profile/feats.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      
      //Stats
      .when('/character/stats', {
        templateUrl: 'views/character/stats/index.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      .when('/character/stats/base', {
        templateUrl: 'views/character/stats/base.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      .when('/character/stats/saving-throws', {
        templateUrl: 'views/character/stats/saving-throws.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      .when('/character/stats/skills', {
        templateUrl: 'views/character/stats/skills.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      .when('/character/stats/combat', {
        templateUrl: 'views/character/stats/combat.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      
      //Stats
      .when('/character/spells', {
        templateUrl: 'views/character/spells/index.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      .when('/character/spells/my-spells', {
        templateUrl: 'views/character/spells/my-spells.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      .when('/character/spells/class-spells', {
        templateUrl: 'views/character/spells/class-spells.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      .when('/character/spells/all-spells', {
        templateUrl: 'views/character/spells/all-spells.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      
      //Equipment
      .when('/character/equipment', {
        templateUrl: 'views/character/equipment/index.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      .when('/character/equipment/weapons', {
        templateUrl: 'views/character/equipment/weapons.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      .when('/character/equipment/armor', {
        templateUrl: 'views/character/equipment/armor.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      .when('/character/equipment/inventory', {
        templateUrl: 'views/character/equipment/inventory.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      
      .when('/character/equipment/currency', {
        templateUrl: 'views/character/equipment/currency.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      
      //Settings
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'AdminCtrl',
        controllerAs: 'settings'
      })
      .otherwise({
        redirectTo: '/'
      });
    
  })
    /* jshint ignore:start */
  .run(function($rootScope, $location){
    console.log('running!');
    
    //set up the local storage for the selected Character
    var myStorage = localStorage;
    
    //local storage stringify solution for objects in localstorage
    Storage.prototype.setObject = function(key, value) {
      this.setItem(key, JSON.stringify(value));
    }

    Storage.prototype.getObject = function(key) {
      var value = this.getItem(key);
      return value;
    }
    
    //test the local storage
    //localStorage.setItem('myCat', 'Tom');
    
    //console.log()
    //alert( "username = " + localStorage.getItem("myCat"));
    $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl, oldState) {
      console.log('Location change start!');
      console.log('path: ' + $location.path());
    });
    
    $rootScope.$on('$locationChangeSuccess', function(event, newUrl, oldUrl, oldState) {
      console.log('Location change success!');
      //console.log('path: ' + $location.path());
      console.log('old URL: ' + oldUrl);
      console.log('new URL: ' + newUrl);
      //console.log('Old State: ' + newUrl);
      $rootScope.scrollTo('top');
      $rootScope.lastPage = oldUrl;
    });        


    //
    // Define your database
    //
    
    var db = new Dexie("test-database");
    db.version(1).stores({
        charClasses: 'name',
        characters: 'id++,name,race,subrace,class,level,gender',
        race:'id++,name,subraces',
        gender:'name'
    });

    //
    // Open it
    //
    
    db.open();
    
    //
    // Put some data into it
    //
    
    $rootScope.populate = function(){    
      db.on("populate", function() {
      
        // Classes        
        db.charClasses.add({name: "Barbarian"});
        db.charClasses.add({name: "Bard"});
        db.charClasses.add({name: "Cleric"});
        db.charClasses.add({name: "Druid"});
        db.charClasses.add({name: "Fighter"});
        db.charClasses.add({name: "Monk"});
        db.charClasses.add({name: "Paladin"});
        db.charClasses.add({name: "Ranger"});
        db.charClasses.add({name: "Rogue"});
        db.charClasses.add({name: "Sorcerer"});
        db.charClasses.add({name: "Warlock"});
        db.charClasses.add({name: "Wizard"});
        
        //Races
        db.race.add({name: "Dwarf", subraces: "Hill Dwarf,Mountain Dwarf"});
        db.race.add({name: "Elf", subraces: "High Elf,Wood Elf,Dark Elf"});
        db.race.add({name: "Halfling", subraces: "Lightfoot,Stout"});
        db.race.add({name: "Human", subraces: "Calishite,Chondathan,Damaran,Mulan,Rashemi,Shou,Tethyrian,Turami"});
        db.race.add({name: "Dragonborn", subraces: "Black,Blue,Brass,Bronze,Copper,Gold,Green,Red,Silver,White"});
        db.race.add({name: "Gnome", subraces: "Forest Gnome,Rock Gnome"});
        db.race.add({name: "Half-Elf", subraces: "None"});
        db.race.add({name: "Half-Orc", subraces: "None"});
        db.race.add({name: "Tiefling", subraces: "None"});
        
        // Genders        
        db.gender.add({name: "Male"});
        db.gender.add({name: "Female"});
        db.gender.add({name: "None"});
      });
    }
    
    $rootScope.populate();
    
    // Delete the DB
    $rootScope.deleteDB = function(){
      console.log('Deleting the DB');
      db.delete();
      db.close();
      db.open();
      //db.upgrade();
    }
    
    // Select Character
    $rootScope.selectCharacter = function ( id ) {
      db.open();
      
      //find the character that matches the selected id
      db.characters.where('id').equals(id).each(function (character) {
        console.log('selected character: ' + character.name);
        $rootScope.selectedCharacter = character;
        $rootScope.$digest();
      }).then(function(){
        localStorage.setObject('character', $rootScope.selectedCharacter);
        console.log(localStorage.getObject('character'));      
      }).catch(function (error) {
        console.error(error);
      });
      
      db.close();
      $rootScope.go('/character');
    };
    
    db.close(); 
  })
    /* jshint ignore:end */
  .controller('AppCtrl', function($scope, $rootScope, $location, $timeout, $mdSidenav, $mdUtil, $log, $mdDialog, $anchorScroll) {
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
     $rootScope.selectedID = '';
     
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug("toggle " + navID + " is done");
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
      $anchorScroll(hash);
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
  })  

  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
  });
