angular.module('dCraftApp').service('raceSrv', function(){  
  //Data
  this.races = [{
      name: 'Dwarf',
      abilityScoreIncrease: 'Your Constitution score increases by 2',
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
        abilityScoreIncrease: 'Your Wisdom score increases by 1.',
        traits: [{
          title: 'Dwarven Toughness',
          description: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.'
          }]
        },{
        name: 'Mountain Dwarf',
        abilityScoreIncrease: 'Your Strength score increases by 2.',
        traits: [{
          title: 'Dwarven Toughness',
          description: 'You have proficiency with light and medium armor.'
          }]
        }]
      },{
      name: 'Elf',
      abilityScoreIncrease: 'Your Dexterity score increases by 2.',
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
        abilityScoreIncrease: 'Your Intelligence score increases by 1.',
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
        abilityScoreIncrease: 'Your Wisdom score increases by 1.',
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
        abilityScoreIncrease: 'Your Charisma score increases by 1.',
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
      abilityScoreIncrease: 'Your Dexterity score increases by 2.',
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
        description: 'You can move through the space of any creature that is of a size larger than yours'
      }],
      //Subraces
      subraces: [{
        name: 'Lightfoot',
        abilityScoreIncrease: 'Your Charisma score increases by 1.',
        traits: [{
          title: 'Naturally Stealthy',
          description: 'You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.'
          }]
        },{
        name: 'Stout',
        abilityScoreIncrease: 'Your Constitution score increases by 1.',
        traits: [{
          title: 'Stout Resilience',
          description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.'
          }]
      }]
    },{
      name: 'Human',
      abilityScoreIncrease: 'Your ability scores each increase by 1.',
      speed: '30',
      languages: 'Common',
      //traits: [],
      //Subraces
      subraces: [{
        name: 'Calishite'
      },{
        name: 'Chondathan',
      },{
        name: 'Damaran',
      },{
        name: 'Illuskan',
      },{
        name: 'Mulan',
      },{
        name: 'Rashemi',
      },{
        name: 'Shou',
      },{
        name: 'Tethyrian',
      },{
        name: 'Turami',
      }]
    },{
      name: 'Dragonborn',
      abilityScoreIncrease: 'Your Strength score increases by 2, and your Charisma score increases by 1.',
      speed: '30',
      languages: 'Common,Draconic',
      traits: [{
        title: 'Draconic Ancestry',
        description: ' You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.'
      },{
        title: 'Breath Weapon',
        description: 'You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.'
      }],
      //Subraces
      subraces: [{
        name: 'Black',
        traits: [{
          title: 'Damage Type',
          description: 'Acid'
          },{
          title: 'Breath Weapon',
          description: '5 by 30 ft. line (Dex. save) '
          }]
        },{
        name: 'Blue',
        traits: [{
          title: 'Damage Type',
          description: 'Lightning'
          },{
          title: 'Breath Weapon',
          description: '5 by 30 ft. line (Dex. save)'
          }]
        },{
        name: 'Brass',
        traits: [{
          title: 'Damage Type',
          description: 'Fire'
          },{
          title: 'Breath Weapon',
          description: '5 by 30 ft. line (Dex. save)'
          }]
        },{
        name: 'Bronze',
        traits: [{
          title: 'Damage Type',
          description: 'Lightning'
          },{
          title: 'Breath Weapon',
          description: '5 by 30 ft. line (Dex. save)'
          }]
        },{
        name: 'Copper',
        traits: [{
          title: 'Damage Type',
          description: 'Acid'
          },{
          title: 'Breath Weapon',
          description: '5 by 30 ft. line (Dex. save)'
          }]
        },{
        name: 'Gold',
        traits: [{
          title: 'Damage Type',
          description: 'Fire'
          },{
          title: 'Breath Weapon',
          description: '5 by 30 ft. line (Dex. save)'
          }]
        },{
        name: 'Green',
        traits: [{
          title: 'Damage Type',
          description: 'Poison'
          },{
          title: 'Breath Weapon',
          description: '15 ft. cone (Dex. save)'
          }]
        },{
        name: 'Red',
        traits: [{
          title: 'Damage Type',
          description: 'Fire'
          },{
          title: 'Breath Weapon',
          description: '15 ft. cone (Dex. save)'
          }]
        },{
        name: 'Silver',
        traits: [{
          title: 'Damage Type',
          description: 'Cold'
          },{
          title: 'Breath Weapon',
          description: '15 ft. cone (Dex. save)'
          }]
        },{
        name: 'White',
        traits: [{
          title: 'Damage Type',
          description: 'Cold'
          },{
          title: 'Breath Weapon',
          description: '15 ft. cone (Dex. save)'
          }]
        }]
    },{
      name: 'Gnome',
      abilityScoreIncrease: 'Your Intelligence score increases by 2. ',
      speed: '25',
      languages: 'Common, Gnomish',
      traits: [{
        title: 'Darkvision',
        description: 'Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\u0027t discern color in darkness, only shades of gray. '
        },{
        title: 'Gnome Cunning',
        description: 'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.'
      }],    
      //Subraces
      subraces: [{
        name: 'Forest Gnome',
        abilityScoreIncrease: 'Your Dexterity score increases by 1. ',
        traits: [{
          title: 'Natural Illusionist',
          description: 'You know the minor illusion cantrip. Intelligence is your spellcasting ability for it.'
          },{
          title: 'Speak with Small Beasts',
          description: 'Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnom es love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets.'
          }]
        },{
        name: 'Rock Gnome',
        abilityScoreIncrease: 'Your Constitution score increases by 1.',
        traits: [{
          title: 'Artificer’s Lore',
          description: 'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.'
          },{
          title: 'Tinker',
          description: 'You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. (Clockwork Toy, Fire Starter, Music Box)'
         }]
        }]
    },{
      //HALF ELF 3
      name: 'Half-Elf',
      abilityScoreIncrease: 'Your Charisma score increases by 2, and two other ability scores of your choice increase by 1.',
      speed: '30',
      languages: 'Common,Elvish',
      traits: [{
        title: 'Darkvision',
        description: 'Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.'
      },{
        title: 'Fey Ancestry',
        description: 'You have advantage on saving throws against being charmed, and magic can’t put you to sleep.'
      },{
        title: 'Skill Versatility',
        description: 'You gain proficiency in two skills of your choice.'
      }]
    },{
      name: 'Half-Orc',
      abilityScoreIncrease: 'Your Strength score increases by 2, and your Constitution score increases by 1.',
      speed: '30',
      languages: 'Common,Orc',
      traits: [{
        title: 'Darkvision',
        description: 'Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\u0027t discern color in darkness, only shades of gray'
        },{
        title: 'Menacing',
        description: 'You gain proficiency in the Intimidation skill. '
        },{
        title: 'Relentless Endurance',
        description: 'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.'
        },{
        title: 'Savage Attacks',
        description: 'When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.'        
      }]
    },{
      name: 'Tiefling',
      abilityScoreIncrease: 'Your Intelligence score increases by 1, and your Charisma score increases by 2.',
      speed: '62',
      languages: 'Common,Infernal',
      traits: [{
        title: 'Darkvision',
        description: 'Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.'
        },{
        title: 'Hellish Resistance',
        description: 'You have resistance to fire damage.'
        },{
        title: 'Infernal Legacy',
        description: 'You know the thaumaturgy cantrip. Once you reach 3rd level, you can cast the hellish rebuke spell once per day as a 2nd-level spell. Once you reach 5th level, you can also cast the darkness spell once per day. Charisma is your spellcasting ability for these spells.'
      }],
    }];
});
  