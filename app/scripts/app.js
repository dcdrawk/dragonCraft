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
    'ngMessages',
    'angularScreenfull'
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue', {
      'default': '700', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '300', // use shade 300 for the <code>md-hue-1</code> class
      'hue-2': '500', // use shade 500 for the <code>md-hue-2</code> class
      'hue-3': '600' // use shade 600 for the <code>md-hue-3</code> class
      })
      // If you specify less than all of the keys, it will inherit from the
      // default shades
      .accentPalette('cyan', {
        'default': '500' // use shade 200 for default, and keep all other shades the same
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
        controller: 'AppearanceCtrl',
        controllerAs: 'appearance'
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
    
  })
    /* jshint ignore:start */
  .run(function($rootScope, $location, transitionSrv){
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
    
    $rootScope.$on('$locationChangeStart', function(event, next, current) {
      console.log('Location change start!');
      var curPath = current.slice( current.lastIndexOf('/')+1, current.length );
      var nextPath = next.slice( next.lastIndexOf('/')+1, next.length );
      transitionSrv.setTransition(curPath, nextPath);
//      console.log(event);
//      console.log(curPath);
//      console.log(nextPath);
//      if(curPath == 'profile'){
//        console.log('basic info!!!');
//        console.log(nextPath);
//        switch(nextPath){
//          case 'basic-info':
//          case 'appearance':
//          case 'history':
//          case 'traits':
//          case 'proficiency':
//          case 'feats':
//            console.log('slide Left!!!');
//            $rootScope.transition = 'slide-left';
//            break;
//          case 'character':
//            console.log('slide Left!!!');
//            $rootScope.transition = 'slide-right';
//            break;
//        }
//      }

    });
    
    $rootScope.$on('$locationChangeSuccess', function(event, current, next) {
      console.log('success!!!');
      if($location.path() == '/'){
        $rootScope.home = true;
      } else {
        $rootScope.home = false;
      }
      
//      var curPath = current.slice( current.lastIndexOf('/')+1, current.length );
//      var nextPath = next.slice( next.lastIndexOf('/')+1, next.length );
//      transitionSrv.setTransition(curPath, nextPath);
    });


    //
    // Define your database
    //
    
    var db = new Dexie('test-db-2');
    db.version(1).stores({
        charClasses: 'name',
        characters: 'id++,name,race,subrace,class,level,gender,height,weight,description,background,personality,ideals,bonds,flaws,traits',
        //charHistory: 'id++,background,personality,ideals,bonds,flaws',
        race:'id++,name,traits,subraces',
        gender:'name',
        alignments: 'name',
        backgrounds: 'name,skills,tools,feat,featInfo'
    });

    //
    // Open it
    //
    
    db.open();
    
    //
    // Put some data into it
    //
    
    $rootScope.populate = function(){    
      db.on('populate', function() {
        //console.log('populating the database');
        // Classes        
        db.charClasses.add({name: 'Barbarian'});
        db.charClasses.add({name: 'Bard'});
        db.charClasses.add({name: 'Cleric'});
        db.charClasses.add({name: 'Druid'});
        db.charClasses.add({name: 'Fighter'});
        db.charClasses.add({name: 'Monk'});
        db.charClasses.add({name: 'Paladin'});
        db.charClasses.add({name: 'Ranger'});
        db.charClasses.add({name: 'Rogue'});
        db.charClasses.add({name: 'Sorcerer'});
        db.charClasses.add({name: 'Warlock'});
        db.charClasses.add({name: 'Wizard'});
        
        //Races
        
        // Dwarf
        db.race.add({name: 'Dwarf',
                     //'Hill Dwarf,Mountain Dwarf',
                     
                     // Dwarf Traits
                     traits: [{
                       title: 'Ability Score Increase',
                       description: 'Your Constitution score increases by 2.'
                     },{
                       title: 'Speed',
                       description: '30'
                     },{
                       title: 'Dark Vision',
                       description: 'Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\u0027t discern color in darkness, only shades of gray.'
                     },{
                       title: 'Dwarven Resilience',
                       description: 'You have advantage on saving throws against poison, and you have resistance against poison damage'
                     },{
                      title: 'Dwarven Combat Training',
                       description: 'You have proficiency with the battleaxe, handaxe, throwing hammer, and warhammer.'
                     },{
                       title: 'Tool Proficiency',
                       description: 'You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.'
                     },{
                      title: 'Stonecunning',
                       description: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.'
                     },{
                      title: 'Languages',
                      description: 'Common,Dwarvish'
                     }],
                     
                     //Dwarf Subraces
                     subraces: [{
                      name: 'Hill Dwarf',
                      traits: [{
                        title: 'Ability Score Increase',
                        description: 'Your Wisdom score increases by 1.'
                      },{
                        title: 'Dwarven Toughness',
                        description: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.'
                      }],
                     },{
                      name: 'Mountain Dwarf',
                      traits: [{
                        title: 'Ability Score Increase',
                        description: 'Your Strength score increases by 2.'
                      },{
                        title: 'Dwarven Toughness',
                        description: 'You have proficiency with light and medium armor.'
                      }],
                     }]          
                    });
        // Elf            
//        db.race.add({name: 'Elf', subraces: 'High Elf,Wood Elf,Dark Elf'});
//        db.race.add({name: 'Halfling', subraces: 'Lightfoot,Stout'});
//        db.race.add({name: 'Human', subraces: 'Calishite,Chondathan,Damaran,Mulan,Rashemi,Shou,Tethyrian,Turami'});
//        db.race.add({name: 'Dragonborn', subraces: 'Black,Blue,Brass,Bronze,Copper,Gold,Green,Red,Silver,White'});
//        db.race.add({name: 'Gnome', subraces: 'Forest Gnome,Rock Gnome'});
//        db.race.add({name: 'Half-Elf', subraces: 'None'});
        db.race.add({name: 'Half-Orc',
                     subraces: 'None',
                     traits: [{
                       title: 'Ability Score Increase',
                       description: 'Your Strength score increases by 2, and your Constitution score increases by 1.'
                     },{
                       title: 'Speed',
                       description: '30'
                     },{
                       title: 'Darkvision',
                       description: 'Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can&#39t discern color in darkness, only shades of gray.'
                     },{
                       title: 'Menacing',
                       description: 'You gain proficiency in the Intimidation skill.'
                     },{
                      title: 'Relentless Endurance',
                       description: 'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.'
                     },{
                       title: 'Savage Attacks',
                       description: 'When you score a critical hit with a melee weapon attack, you can roll one of the weapon&#39s damage dice one additional time and add it to the extra damage of the critical hit.'
                     },{
                       title: 'Languages',
                       description: 'Common,Orc'
                     }]
                    });
        //db.race.add({name: 'Tiefling', subraces: 'None'});
        
        // Genders        
        db.gender.add({name: 'Male'});
        db.gender.add({name: 'Female'});
        db.gender.add({name: 'None'});
        
        // Alignments        
        db.alignments.add({name: 'Lawful Good'});
        db.alignments.add({name: 'Lawful Neutral'});
        db.alignments.add({name: 'Lawful Evil'});
        db.alignments.add({name: 'Neutral Good'});
        db.alignments.add({name: 'True Neutral'});
        db.alignments.add({name: 'Neutral Evil'});
        db.alignments.add({name: 'Chaotic Good'});
        db.alignments.add({name: 'Chaotic Neutral'});
        db.alignments.add({name: 'Chaotic Evil'});
        
        // Backgrounds
        db.backgrounds.add({name: 'Acolyte',
                            skills: 'Insight, Religion',
                            tools: 'none',
                            feat: 'Shelter of the Faithful',
                            featInfo: 'As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those w ho share your religion will support you (but only you) at a modest lifestyle.\nYou might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.'
          });
                            
        db.backgrounds.add({name: 'Charlatan',
                            skills: 'Deception, Slight of Hand',
                            tools: 'Disguise kit, forgery kit',
                            feat: 'False Identity',
                            featInfo: 'You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy.'});
                           
        db.backgrounds.add({name: 'Criminal',
                            skills: 'Deception, Stealth',
                            tools: 'Gaming set, Thieves&#39 Tools',
                            feat: 'Criminal Contact',
                            featInfo: 'You have a reliable and trustworthy contact w ho acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver m essages for you.'});
                            
        db.backgrounds.add({name: 'Entertainer',
                            skills: 'Acrobatics, Performance',
                            tools: 'Disguise Kit, One Musical Instrument',
                            feat: 'By Popular Demand',
                            featInfo: 'You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble’s court. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.'});
                            
        db.backgrounds.add({name: 'Folk Hero',
                            skills: 'Animal Handling, Survival',
                            tools: 'One Type of Artisan&#39s Tools, Vehicles (land)',
                            feat: 'Rustic Hospitality',
                            featInfo: 'Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they w ill not risk their lives for you.'});
                          
        db.backgrounds.add({name: 'Guild Artisan',
                            skills: 'Insight, Persuasion',
                            tools: 'One Type of Artisan&#39s Tools',
                            feat: 'Guild Membership',
                            featInfo: 'As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings.\nGuilds often wield tremendous political power. If you are accused of a crime, your guild w ill support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or m agic items to the guild’s coffers.\nYou must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild’s good graces.'});
                                
        db.backgrounds.add({name: 'Hermit',
                            skills: 'Medicine, Religion',
                            tools: 'Herbalism kit',
                            feat: 'Discovery',
                            featInfo: 'The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed some relic of the past that could rewrite history. It might be information that would be damaging to the people who or consigned you to exile, and hence the reason for your return to society.\nWork with your DM to determine the details of your discovery and its impact on the campaign.'});
                          
        db.backgrounds.add({name: 'Noble',
                            skills: 'History, Persuasion',
                            tools: 'One type of gaming set',
                            feat: 'Position of Priviledge',
                            featInfo: 'Thanks to your noble birth, people are inclined to think the best o f you. You are w elcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people o f high birth treat you as a member o f the same social sphere. You can secure an audience with a local noble if you need to.'});
                          
        db.backgrounds.add({name: 'Outlander',
                            skills: 'Athletics, Survival',
                            tools: 'One type of musical instrument',
                            feat: 'Wanderer',
                            featInfo: 'You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.'});
                          
        db.backgrounds.add({name: 'Sage',
                            skills: 'Arcana, History',
                            tools: 'none',
                            feat: 'Researcher',
                            featInfo: 'When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from w hom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets o f the multiverse can require an adventure or even a whole campaign.'});
                          
        db.backgrounds.add({name: 'Sailor',
                            skills: 'Athletics, Perception',
                            tools: 'Navigator’s tools, vehicles (water)',
                            feat: 'Ship&#39s Passage',
                            featInfo: 'When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by a former crewmate). Because you’re calling in a favor, you can’t be certain o f a schedule or route that w ill meet your every need. Your Dungeon Master w ill determine how long it takes to get where you need to go. In return for your free passage, you and your companions are expected to assist the crew during the voyage.'});
                          
        db.backgrounds.add({name: 'Soldier',
                            skills: 'Athletics, Intimidation',
                            tools: 'One type o f gaming set, vehicles (land)',
                            feat: 'Military Rank',
                            featInfo: 'You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are o f a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.'});
                          
        db.backgrounds.add({name: 'Urchin',
                            skills: 'Sleight o f Hand, Stealth',
                            tools: 'Disguise kit, Thieves&#39 tools',
                            feat: 'City Secrets',
                            featInfo: 'You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow.'});  
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
      db.characters.where('id').equals(id).each(function (character, id) {
      
//        db.charHistory.where('id').equals(id).each(function (history) {
//          character.history = history;
//        });
        console.log('selected character: ' + character.name);
        //console.log('character history: ' + character.history.name);
        $rootScope.selectedCharacter = character;
        $rootScope.$digest();
      }).then(function(){
        localStorage.setObject('character', $rootScope.selectedCharacter);
        //console.log(localStorage.getObject('character'));      
      }).catch(function (error) {
        //console.error(error);
      });
      
      db.close();
      $rootScope.go('/character');
    };
    
    $rootScope.updateChar = function(id, field, value){
      switch (field) {
        case 'name':
          db.characters.update(id, {name: value});
          $rootScope.updateList = true;
          $rootScope.updateStorage(id);
          break;
        case 'race':
          db.characters.update(id, {race: value});
          $rootScope.updateList = true;
          $rootScope.updateStorage(id);
          break;
        case 'subrace':
          db.characters.update(id, {subrace: value});
          $rootScope.updateStorage(id);
          break;
        case 'class':
          db.characters.update(id, {class: value});
          $rootScope.updateStorage(id);
          break;
        case 'height':
          db.characters.update(id, {height: value});
          $rootScope.updateStorage(id);
          break;
        case 'weight':
          db.characters.update(id, {weight: value});
          $rootScope.updateStorage(id);
          break;
        case 'description':
          db.characters.update(id, {description: value});
          $rootScope.updateStorage(id);
          break;
        case 'background':
          db.characters.update(id, {background: value});
          $rootScope.updateStorage(id);
          break;
        case 'personality':
          db.characters.update(id, {personality: value});
          $rootScope.updateStorage(id);
          break;
        case 'ideals':
          db.characters.update(id, {ideals: value});
          $rootScope.updateStorage(id);
          break;
        case 'bonds':
          db.characters.update(id, {bonds: value});
          $rootScope.updateStorage(id);
          break;
        case 'flaws':
          db.characters.update(id, {flaws: value});
          $rootScope.updateStorage(id);
          break;
      }
    }
    
    $rootScope.updateStorage = function(id){
      //console.log('update storage');
      db.open();

      //find the character that matches the selected id
      db.characters.where('id').equals(id).each(function (character) {
        //console.log('CHARACTER:');
        $rootScope.selectedCharacter = character;
      }).then(function(){
        localStorage.setObject('character', $rootScope.selectedCharacter);
        //console.log('CHARACTER:');
        //console.log(localStorage.getObject('character'));
        $rootScope.$digest();
      });
      
      db.close();
    }
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
          $log.debug('close LEFT is done');
        });
    };
  });
