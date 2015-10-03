'use strict';
angular.module('dCraftApp')
.config(['$routeProvider', 'RouteAnimationManagerProvider', function($routeProvider, RouteAnimationManagerProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        data: {
          animationConf: {
            newcharacter: 'slide-down',
            character: 'slide-right',
          }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/new-character', {
        templateUrl: 'views/new-character.html',
        controller: 'NewCharCtrl',
        controllerAs: 'newChar',
        data: {
          animationConf: {
            root: 'slide-up'
          }
        }
      })
      
      //Character Navigation
      .when('/character', {
        templateUrl: 'views/character/home.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character',
        data: {
          animationConf: {
            root: 'slide-left',
            profile: 'slide-right',
            stats: 'slide-right',
            spells: 'slide-right',
            equipment: 'slide-right',
            fallback: 'fade'
          }
        }
      })
      
      //Profile info
      .when('/character/profile', {
        templateUrl: 'views/character/profile/index.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character',
        data: {
          animationConf: {
            character: 'slide-left',
            basicinfo: 'slide-right',
            appearance: 'slide-right',
            history: 'slide-right',
            racialtraits: 'slide-right',
            classfeatures: 'slide-right',
            feats: 'slide-right',
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
            profile: 'slide-left',
            fallback: 'fade'
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
        controllerAs: 'history',
        data: {
          animationConf: {
            profile: 'slide-left',
            fallback: 'fade'
          }
        }
      })
      .when('/character/profile/class-features', {
        templateUrl: 'views/character/profile/proficiency.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character',
        data: {
          animationConf: {
            profile: 'slide-left',
            fallback: 'fade'
          }
        }
      })
      .when('/character/profile/racial-traits', {
        templateUrl: 'views/character/profile/traits.html',
        controller: 'TraitsCtrl',
        controllerAs: 'traits',
        data: {
          animationConf: {
            profile: 'slide-left',
            fallback: 'fade'
          }
        }
      })
      .when('/character/profile/feats', {
        templateUrl: 'views/character/profile/feats.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character',
        data: {
          animationConf: {
            profile: 'slide-left',
            fallback: 'fade'
          }
        }
      })
      
      //Stats
      .when('/character/stats', {
        templateUrl: 'views/character/stats/index.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character',
        data: {
          animationConf: {
            character: 'slide-left',
            base: 'slide-right',
            savingthrows: 'slide-right',
            skills: 'slide-right',
            combat: 'slide-right'
          }
        }
      })
      .when('/character/stats/base', {
        templateUrl: 'views/character/stats/base.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character',
        data: {
          animationConf: {
            stats: 'slide-left',
            fallback: 'fade'
          }
        }
      })
      .when('/character/stats/saving-throws', {
        templateUrl: 'views/character/stats/saving-throws.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character',
        data: {
          animationConf: {
            stats: 'slide-left',
            fallback: 'fade'
          }
        }
      })
      .when('/character/stats/skills', {
        templateUrl: 'views/character/stats/skills.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character',
        data: {
          animationConf: {
            stats: 'slide-left',
            fallback: 'fade'
          }
        }
      })
      .when('/character/stats/combat', {
        templateUrl: 'views/character/stats/combat.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character',
        data: {
          animationConf: {
            stats: 'slide-left',
            fallback: 'fade'
          }
        }
      })
      
      //Stats
      .when('/character/spells', {
        templateUrl: 'views/character/spells/index.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character',
        data: {
          animationConf: {
            character: 'slide-left',
            myspells: 'slide-right',
            classspells: 'slide-right',
            allspells: 'slide-right'
          }
        }
      })
      .when('/character/spells/my-spells', {
        templateUrl: 'views/character/spells/my-spells.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character',
        data: {
          animationConf: {
            spells: 'slide-left',
            fallback: 'fade'
          }
        }
      })
      .when('/character/spells/class-spells', {
        templateUrl: 'views/character/spells/class-spells.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character',
        data: {
          animationConf: {
            spells: 'slide-left',
            fallback: 'fade'
          }
        }
      })
      .when('/character/spells/all-spells', {
        templateUrl: 'views/character/spells/all-spells.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character',
        data: {
          animationConf: {
            spells: 'slide-left',
            fallback: 'fade'
          }
        }
      })
      
      //Equipment
      .when('/character/equipment', {
        templateUrl: 'views/character/equipment/index.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character',
        data: {
          animationConf: {
            character: 'slide-left',
            weapons: 'slide-right',
            armor: 'slide-right',
            inventory: 'slide-right',
            currency: 'slide-right'
          }
        }
      })
      .when('/character/equipment/weapons', {
        templateUrl: 'views/character/equipment/weapons.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character',
        data: {
          animationConf: {
            equipment: 'slide-left',
            fallback: 'fade'
          }
        }
      })
      .when('/character/equipment/armor', {
        templateUrl: 'views/character/equipment/armor.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character',
        data: {
          animationConf: {
            equipment: 'slide-left',
            fallback: 'fade'
          }
        }
      })
      .when('/character/equipment/inventory', {
        templateUrl: 'views/character/equipment/inventory.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character',
        data: {
          animationConf: {
            equipment: 'slide-left',
            fallback: 'fade'
          }
        }
      })
      
      .when('/character/equipment/currency', {
        templateUrl: 'views/character/equipment/currency.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character',
        data: {
          animationConf: {
            equipment: 'slide-left',
            fallback: 'fade'
          }
        }
      })
      
      //Settings
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'AdminCtrl',
        controllerAs: 'settings',
        data: {
          animationConf: {
            fallback: 'fade'
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
      
      RouteAnimationManagerProvider.setDefaultAnimation('fade');
  }]);