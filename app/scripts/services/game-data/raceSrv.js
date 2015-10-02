angular.module('dCraftApp').service( 'RaceSrv', function(){  
  //Data
  this.races = [{
      name: 'Dwarf',
      abilityScoreIncease: 'Your Constitution score increases by 2',
      speed: '30',
      languages: 'Common,Dwarvish',
      traits: [{
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
      }],
      //Subraces
      subraces: [{
        name: 'Hill Dwarf',
        abilityScoreIncease: 'Your Wisdom score increases by 1.',
        traits: [{
          title: 'Dwarven Toughness',
          description: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.'
          }]
        },{
        name: 'Mountain Dwarf',
        abilityScoreIncease: 'Your Strength score increases by 2.',
        traits: [{
          title: 'Dwarven Toughness',
          description: 'You have proficiency with light and medium armor.'
          }]
        }]
      },{
      name: 'Elf',
      abilityScoreIncease: 'Your Dexterity score increases by 2.',
      speed: '30',
      languages: 'Common,Elvish',
      traits: [{
        title: 'Darkvision',
        description: 'Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.'
      },{
        title: 'Keen Senses',
        description: 'You have proficiency in the Perception skill. '
      },{
        title: 'Fey Ancestry',
        description: 'You have advantage on saving throws against being charmed, and magic can’t put you to sleep.'
      },{
        title: 'Trance',
        description: 'Elves don’t need to sleep. Instead, they meditate deeply, remaining sem iconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have becom e reflexive through years of practice. After resting in this way, you gain the sam e benefit that a human does from 8 hours of sleep.'
      }],
      //Subraces
      subraces: [{
        name: 'High Elf',
        abilityScoreIncease: 'Your Intelligence score increases by 1.',
        traits: [{
          title: 'Elf Weapon Training',
          description: 'You have proficiency with the longsword, shortsword, shortbow, and longbow.'
          },{
          title: 'Cantrip',
          description: 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.'
          },{
          title: 'Extra Language',
          description: 'You can speak, read, and write one extra language of your choice.'
          }]
        },{
        name: 'Wood Elf',
        abilityScoreIncease: 'Your Wisdom score increases by 1.',
        traits: [{
          title: 'Elf Weapon Training',
          description: ' You have proficiency with the longsword, shortsword, shortbow, and longbow.'
          },{
          title: 'Fleet of Foot',
          description: 'Your base walking speed increases to 35 feet.'
          },{
          title: 'Mask of the Wild',
          description: 'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.'
          }]
        },{
        name: 'Dark Elf (Drow)',
        abilityScoreIncease: 'Your Charisma score increases by 1.',
        traits: [{
          title: 'Superior Darkvision',
          description: 'Your darkvision has a radius of 120 feet. '
        },{
          title: 'Sunlight Sensitivity',
          description: 'You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.'
        },{
          title: 'Drow Magic',
          description: 'You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once per day. When you reach 5th level, you can also cast the darkness spell once per day. Charisma is your spellcasting ability for these spells.'
        },{
          title: 'Drow Weapon Training',
          description: 'You have proficiency with rapiers, shortswords, and hand crossbows.'
        }]
      }]
    },{
      name: 'Halfling',
      abilityScoreIncease: 'Your Dexterity score increases by 2.',
      speed: '25',
      languages: 'Common,Halfling',
      traits: [{
        title: 'Lucky',
        description: 'When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.'
      },{
        title: 'Brave',
        description: 'You have advantage on saving throws against being frightened.'
      },{
        title: 'Halfling Nimbleness',
        description: 'You can move through the space of any creature that is of a size larger than yours''
      }],
      //Subraces
      subraces: [{
        name: 'Lightfoot',
        abilityScoreIncease: 'Your Charisma score increases by 1.',
        traits: [{
          title: 'Naturally Stealthy',
          description: 'You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.'
          }]
        },{
        name: 'Stout',
        abilityScoreIncease: 'Your Constitution score increases by 1.',
        traits: [{
          title: 'Stout Resilience',
          description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.'
          }]
      }]
    },{
      name: 'Human',
      abilityScoreIncease: '',
      speed: '',
      languages: '',
      traits: [{
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
      },{
        title: '',
        description: ''
      }],
      //Subraces
      subraces: [{
        name: '',
        abilityScoreIncease: '',
        traits: [{
          title: '',
          description: '.'
          }]
        },{
        name: '',
        abilityScoreIncease: '',
        traits: [{
          title: '',
          description: ''
        }]
      }]
    },{
      name: 'Dragonborn',
      abilityScoreIncease: '',
      speed: '',
      languages: '',
      traits: [{
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
      },{
        title: '',
        description: ''
      }],
      //Subraces
      subraces: [{
        name: '',
        abilityScoreIncease: '',
        traits: [{
          title: '',
          description: '.'
          }]
        },{
        name: '',
        abilityScoreIncease: '',
        traits: [{
          title: '',
          description: ''
        }]
      }]
    },{
      name: 'Gnome',
      abilityScoreIncease: '',
      speed: '',
      languages: '',
      traits: [{
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
      },{
        title: '',
        description: ''
      }],
      //Subraces
      subraces: [{
        name: '',
        abilityScoreIncease: '',
        traits: [{
          title: '',
          description: '.'
          }]
        },{
        name: '',
        abilityScoreIncease: '',
        traits: [{
          title: '',
          description: ''
        }]
      }]
    },{
      name: 'Half-Elf',
      abilityScoreIncease: '',
      speed: '',
      languages: '',
      traits: [{
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
      },{
        title: '',
        description: ''
      }],
      //Subraces
      subraces: [{
        name: '',
        abilityScoreIncease: '',
        traits: [{
          title: '',
          description: '.'
          }]
        },{
        name: '',
        abilityScoreIncease: '',
        traits: [{
          title: '',
          description: ''
        }]
      }]
    },{
      name: 'Half-Orc',
      abilityScoreIncease: '',
      speed: '',
      languages: '',
      traits: [{
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
      },{
        title: '',
        description: ''
      }],
      //Subraces
      subraces: [{
        name: '',
        abilityScoreIncease: '',
        traits: [{
          title: '',
          description: '.'
          }]
        },{
        name: '',
        abilityScoreIncease: '',
        traits: [{
          title: '',
          description: ''
        }]
      }]
    },{
      name: 'Tiefling',
      abilityScoreIncease: '',
      speed: '',
      languages: '',
      traits: [{
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
      },{
        title: '',
        description: ''
      }],
      //Subraces
      subraces: [{
        name: '',
        abilityScoreIncease: '',
        traits: [{
          title: '',
          description: '.'
          }]
        },{
        name: '',
        abilityScoreIncease: '',
        traits: [{
          title: '',
          description: ''
        }]
      }]
    }];
});
  