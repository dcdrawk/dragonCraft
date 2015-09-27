angular.module('dCraftApp')
.config(['$routeProvider', 'RouteAnimationManagerProvider', function($routeProvider, RouteAnimationManagerProvider) {
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
        controllerAs: 'character',
        data: {
          animationConf: {
            appearance: 'slide-right',
            basicinfo: 'slide-right',
            fallback: 'fade'
          }
        }
      })
      .when('/character/profile/basic-info', {
        templateUrl: 'views/character/profile/basic.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character',
        data: {
          animationConf: {
            appearance: 'slide-right',
            fallback: 'slide-left'
          }
        }
      })
      .when('/character/profile/appearance', {
        templateUrl: 'views/character/profile/appearance.html',
        controller: 'AppearanceCtrl',
        controllerAs: 'appearance',
        data: {
          animationConf: {
            profile: 'slide-left',
            fallback: 'fade'
          }
        }
      })
      .when('/character/profile/history', {
        templateUrl: 'views/character/profile/history.html',
        controller: 'HistoryCtrl',
        controllerAs: 'history'
      })
      .when('/character/profile/proficiency', {
        templateUrl: 'views/character/profile/proficiency.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      .when('/character/profile/traits', {
        templateUrl: 'views/character/profile/traits.html',
        controller: 'TraitsCtrl',
        controllerAs: 'traits'
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
      
      RouteAnimationManagerProvider.setDefaultAnimation('fade');
  }])