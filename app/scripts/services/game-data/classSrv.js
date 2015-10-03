'use strict';
angular.module('dCraftApp').service( 'ClassSrv', function(){  
  //Functions
//  this.getClasses = function (){
//    return Classes;
//  }
  
  //Data
  this.classes = [{
      name: 'Barbarian',
      hitPoints: [{
          title: 'Hit Dice',
          description: ''
        },{
          title: 'Hit Dice at 1st Level',
          description: ''
        },{
          title: 'Hit Points at Higher Levels',
          description: ''
        }],
      proficiencies:[{
          title: 'Armor',
          description: ''
        },{
          title: 'Weapons',
          description: ''
        },{
          title: 'Saving Throws',
          description: ''
        },{
          title: 'Skills',
          description: ''
        }],
      abilities: [{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        }],
      specializations:[{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        },{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        }]    
    },{
      name: 'Bard',
      hitPoints: [{
          title: 'Hit Dice',
          description: ''
        },{
          title: 'Hit Dice at 1st Level',
          description: ''
        },{
          title: 'Hit Points at Higher Levels',
          description: ''
        }],
      proficiencies:[{
          title: 'Armor',
          description: ''
        },{
          title: 'Weapons',
          description: ''
        },{
          title: 'Saving Throws',
          description: ''
        },{
          title: 'Skills',
          description: ''
        }],
      abilities: [{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        }],
      specializations:[{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        },{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        }]
    },{
      name: 'Cleric',hitPoints: [{
          title: 'Hit Dice',
          description: ''
        },{
          title: 'Hit Dice at 1st Level',
          description: ''
        },{
          title: 'Hit Points at Higher Levels',
          description: ''
        }],
      proficiencies:[{
          title: 'Armor',
          description: ''
        },{
          title: 'Weapons',
          description: ''
        },{
          title: 'Saving Throws',
          description: ''
        },{
          title: 'Skills',
          description: ''
        }],
      abilities: [{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        }],
      specializations:[{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        },{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        }] 
    },{
      name: 'Druid',
      hitPoints: [{
          title: 'Hit Dice',
          description: ''
        },{
          title: 'Hit Dice at 1st Level',
          description: ''
        },{
          title: 'Hit Points at Higher Levels',
          description: ''
        }],
      proficiencies:[{
          title: 'Armor',
          description: ''
        },{
          title: 'Weapons',
          description: ''
        },{
          title: 'Saving Throws',
          description: ''
        },{
          title: 'Skills',
          description: ''
        }],
      abilities: [{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        }],
      specializations:[{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        },{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        }],
      hitPoints: [{
          title: 'Hit Dice',
          description: ''
        },{
          title: 'Hit Dice at 1st Level',
          description: ''
        },{
          title: 'Hit Points at Higher Levels',
          description: ''
        }],
      proficiencies:[{
          title: 'Armor',
          description: ''
        },{
          title: 'Weapons',
          description: ''
        },{
          title: 'Saving Throws',
          description: ''
        },{
          title: 'Skills',
          description: ''
        }],
      abilities: [{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        }],
      specializations:[{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        },{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        }],
      hitPoints: [{
          title: 'Hit Dice',
          description: ''
        },{
          title: 'Hit Dice at 1st Level',
          description: ''
        },{
          title: 'Hit Points at Higher Levels',
          description: ''
        }],
      proficiencies:[{
          title: 'Armor',
          description: ''
        },{
          title: 'Weapons',
          description: ''
        },{
          title: 'Saving Throws',
          description: ''
        },{
          title: 'Skills',
          description: ''
        }],
      abilities: [{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        }],
      specializations:[{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        },{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        }]
    },{
      name: 'Fighter',
      hitPoints: [{
          title: 'Hit Dice',
          description: ''
        },{
          title: 'Hit Dice at 1st Level',
          description: ''
        },{
          title: 'Hit Points at Higher Levels',
          description: ''
        }],
      proficiencies:[{
          title: 'Armor',
          description: ''
        },{
          title: 'Weapons',
          description: ''
        },{
          title: 'Saving Throws',
          description: ''
        },{
          title: 'Skills',
          description: ''
        }],
      abilities: [{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        }],
      specializations:[{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        },{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        }] 
    },{
      name: 'Monk',
      hitPoints: [{
          title: 'Hit Dice',
          description: ''
        },{
          title: 'Hit Dice at 1st Level',
          description: ''
        },{
          title: 'Hit Points at Higher Levels',
          description: ''
        }],
      proficiencies:[{
          title: 'Armor',
          description: ''
        },{
          title: 'Weapons',
          description: ''
        },{
          title: 'Saving Throws',
          description: ''
        },{
          title: 'Skills',
          description: ''
        }],
      abilities: [{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        }],
      specializations:[{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        },{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        }]
    },{
      name: 'Paladin',
      hitPoints: [{
          title: 'Hit Dice',
          description: ''
        },{
          title: 'Hit Dice at 1st Level',
          description: ''
        },{
          title: 'Hit Points at Higher Levels',
          description: ''
        }],
      proficiencies:[{
          title: 'Armor',
          description: ''
        },{
          title: 'Weapons',
          description: ''
        },{
          title: 'Saving Throws',
          description: ''
        },{
          title: 'Skills',
          description: ''
        }],
      abilities: [{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        }],
      specializations:[{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        },{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        }]
    },{
      name: 'Ranger',
      hitPoints: [{
          title: 'Hit Dice',
          description: ''
        },{
          title: 'Hit Dice at 1st Level',
          description: ''
        },{
          title: 'Hit Points at Higher Levels',
          description: ''
        }],
      proficiencies:[{
          title: 'Armor',
          description: ''
        },{
          title: 'Weapons',
          description: ''
        },{
          title: 'Saving Throws',
          description: ''
        },{
          title: 'Skills',
          description: ''
        }],
      abilities: [{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        }],
      specializations:[{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        },{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        }] 
    },{
      name: 'Rogue',
      hitPoints: [{
          title: 'Hit Dice',
          description: ''
        },{
          title: 'Hit Dice at 1st Level',
          description: ''
        },{
          title: 'Hit Points at Higher Levels',
          description: ''
        }],
      proficiencies:[{
          title: 'Armor',
          description: ''
        },{
          title: 'Weapons',
          description: ''
        },{
          title: 'Saving Throws',
          description: ''
        },{
          title: 'Skills',
          description: ''
        }],
      abilities: [{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        }],
      specializations:[{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        },{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        }]
    },{
      name: 'Sorcerer',
      hitPoints: [{
          title: 'Hit Dice',
          description: ''
        },{
          title: 'Hit Dice at 1st Level',
          description: ''
        },{
          title: 'Hit Points at Higher Levels',
          description: ''
        }],
      proficiencies:[{
          title: 'Armor',
          description: ''
        },{
          title: 'Weapons',
          description: ''
        },{
          title: 'Saving Throws',
          description: ''
        },{
          title: 'Skills',
          description: ''
        }],
      abilities: [{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        }],
      specializations:[{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        },{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        }] 
    },{
      name: 'Warlock',
      hitPoints: [{
          title: 'Hit Dice',
          description: ''
        },{
          title: 'Hit Dice at 1st Level',
          description: ''
        },{
          title: 'Hit Points at Higher Levels',
          description: ''
        }],
      proficiencies:[{
          title: 'Armor',
          description: ''
        },{
          title: 'Weapons',
          description: ''
        },{
          title: 'Saving Throws',
          description: ''
        },{
          title: 'Skills',
          description: ''
        }],
      abilities: [{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        }],
      specializations:[{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        },{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        }]
    },{
      name: 'Wizard',
      hitPoints: [{
          title: 'Hit Dice',
          description: ''
        },{
          title: 'Hit Dice at 1st Level',
          description: ''
        },{
          title: 'Hit Points at Higher Levels',
          description: ''
        }],
      proficiencies:[{
          title: 'Armor',
          description: ''
        },{
          title: 'Weapons',
          description: ''
        },{
          title: 'Saving Throws',
          description: ''
        },{
          title: 'Skills',
          description: ''
        }],
      abilities: [{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        },{
          title: '',
          level: '',
          description: ''
        }],
      specializations:[{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        },{
        title: '',
        description: '',
        abilities: [{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          },{
            title: '',
            description: ''
          }]
        }]
    }];
});
  
