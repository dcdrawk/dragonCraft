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
          description: '1d 12 per barbarian level'
        },{
          title: 'Hit Dice at 1st Level',
          description: '12 + your Constitution modifier'
        },{
          title: 'Hit Points at Higher Levels',
          description: '1d12 (or 7) + your Constitution modifier per barbarian level after 1st'
        }],
      proficiencies:[{
          title: 'Armor',
          description: ' Light armor, medium armor, shields'
        },{
          title: 'Weapons',
          description: 'Simple weapons, martial weapons'
        },{
          title: 'Tools',
          description: ''
        },{
          title: 'Saving Throws',
          description: 'Strength, Constitution'
        },{
          title: 'Skills',
          description: 'Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival'
        }],
      abilities: [{
          title: 'Rage',
          level: '0',
          description: '<p>In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.</p><p>While raging, you gain the following benefits if you aren’t wearing heavy armor:</p><ul><li>You have advantage on Strength checks and Strength saving throws.</li><li>When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage colum n of the Barbarian table.</li><li>You have resistance to bludgeoning, piercing, and slashing damage.</li></ul><p>If you are able to cast spells, you can’t cast them or concentrate on them while raging.</p><p>Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.</p><p>Once you have raged the number of times shown for your barbarian level in the Rages colum n of the Barbarian table, you must finish a long rest before you can rage again.</p>'
        },{
          title: 'Unarmored Defence',
          level: '0',
          description: 'While you are not wearing any armor, your Arm or Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.'
        },{
          title: 'Reckless Attack',
          level: '2',
          description: 'Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.'
        },{
          title: 'Danger Sense',
          level: '2',
          description: '<p>At 2nd level, you gain an uncanny sense of when things nearby aren’t as they should be, giving you an edge when you dodge away from danger.</p><p>You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated.</p>'
        },{
          title: 'Primal Path',
          level: '3',
          description: 'At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.'
        },{
          title: 'Ability Score Improvement',
          level: '4',
          description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.'
        },{
          title: 'Extra Attack',
          level: '5',
          description: 'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.'
        },{
          title: 'Fast Movement',
          level: '5',
          description: 'Starting at 5th level, your speed increases by 10 feet while you aren’t wearing heavy armor.'
        },{
          title: 'Feral Instinct',
          level: '7',
          description: '<p>By 7th level, your instincts are so honed that you have advantage on initiative rolls.<p></p>Additionally, if you are surprised at the beginning of combat and aren’t incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.</p>'
        },{
          title: 'Brutal Critical',
          level: '9',
          description: '<p>Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.</p><p>This increases to two additional dice at 13th level and three additional dice at 17th level.</p>'
        },{
          title: 'Relentless Rage',
          level: '11',
          description: '<p>Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you’re raging and don’t die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.</p><p>Each time you use this feature after the first, the DC increases by 5. W hen you finish a short or long rest, the DC resets to 10.</p>'
        },{
          title: 'Persistent Rage',
          level: '15',
          description: 'Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.'
        },{
          title: 'Indomitable Might',
          level: '18',
          description: 'Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.'
        },{
          title: 'Primal Champion',
          level: '20',
          description: 'At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.'
        }],
      specializations:[{
        title: 'Path of the Berserker',
        description: 'For some barbarians, rage is a means to an end-that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker’s rage, you thrill in the chaos of battle, heedless of your own health or well-being.',
        abilities: [{
            title: 'Frenzy',
            level: '3',
            description: 'Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.'
          },{
            title: 'Mindless Rage',
            level: '6',
            description: 'Beginning at 6th level, you can’t be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.'
          },{
            title: 'Intimidating Presence',
            level: '10',
            description: '<p>Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.</p><p>If the creature succeeds on its saving throw, you can\u0027t use this feature on that creature again for 24 hours.</p>'
          },{
            title: 'Retaliation',
            level: '14',
            description: 'Starting at 14th level, when you take damage from a creature that is within 5 feet of you. you can use your reaction to make a melee weapon attack against that creature.'
          }]
        },{
        title: 'Path of the Totem Warrior',
        description: '<p>The Path of the Totem Warrior is a spiritual journey, as the barbarian accepts a spirit animal as guide, protector, and inspiration. In battle, your totem spirit fills you with supernatural might, adding magical fuel to your barbarian rage.<p></p>Most barbarian tribes consider a totem animal to be kin to a particular clan. In such cases, it is unusual for an individual to have more than one totem animal spirit, though exceptions exist.</p>',
        abilities: [{
            title: 'Spirit Seeker',
            level: '3',
            description: 'Yours is a path that seeks attunement with the natural world, giving you a kinship with beasts. At 3rd level when you adopt this path, you gain the ability to cast the beast sense and speak with animals spells, but only as rituals, as described in chapter 10.'
          },{
            title: 'Totem Spirit',
            level: '3',
            description: 'At 3rd level, when you adopt this path, you choose a totem spirit and gain its feature. You must make or acquire a physical totem object- an amulet or similar adornment—that incorporates fur or feathers, claws, teeth, or bones of the totem animal. At your option, you also gain minor physical attributes that are reminiscent of your totem spirit. For example, if you have a bear totem spirit, you might be unusually hairy and thick- skinned, or if your totem is the eagle, your eyes turn bright yellow.'
          },{
            title: 'Aspect of the Beast',
            level: '6',
            description: 'At 6th level, you gain a magical benefit based on the totem animal of your choice. You can choose the same animal you selected at 3rd level or a different one.'
          },{
            title: 'Spirit Walker',
            level: '10',
            description: 'At 10th level, you can cast the commune with nature spell, but only as a ritual. W hen you do so, a spiritual version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek.'
          },{
            title: 'Totemic Attunement',
            level: '14',
            description: 'At 14th level, you gain a magical benefit based on a totem animal of your choice. You can choose the same animal you selected previously or a different one.'
          }]
        }]    
    },{
      name: 'Bard',
      hitPoints: [{
          title: 'Hit Dice',
          description: '1d8 per bard level'
        },{
          title: 'Hit Dice at 1st Level',
          description: '8 + your Constitution modifier'
        },{
          title: 'Hit Points at Higher Levels',
          description: '1d8 (or 5) + your Constitution modifier per bard level after 1st'
        }],
      proficiencies:[{
          title: 'Armor',
          description: 'Light armor'
        },{
          title: 'Weapons',
          description: 'Simple weapons, hand crossbows, longswords, rapiers, shortswords'
        },{
          title: 'Three musical instruments of your choice',
          description: 'Dexterity, Charisma '
        },{
          title: 'Skills',
          description: 'Choose any three'
        }],
      abilities: [{
          title: 'Bardic Inspiration',
          level: '0',
          description: '<p>You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.<p></p>Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.</p><p>You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. Your Bardic Inspiration die changes when you reach certain levels in this class. The die becom es a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.</p>'
        },{
          title: 'Jack of All Trades',
          level: '2',
          description: 'Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn’t already include your proficiency bonus.'
        },{
          title: 'Song of Rest',
          level: '2',
          description: '<p>Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your perform ance regain hit points at the end of the short rest, each of those creatures regains an extra 1d6 hit points.</p><p>The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d 10 at 13th level, and to 1d12 at 17th level.</p>'
        },{
          title: 'Bard College',
          level: '3',
          description: 'At 3rd level, you delve into the advanced techniques of a bard college of your choice: the College of Lore or the College of Valor, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th and 14th level.'
        },{
          title: 'Expertise',
          level: '3',
          description: '<p>At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.</p><p>At 10th level, you can choose another two skill proficiencies to gain this benefit.</p>'
        },{
          title: 'Ability Score Improvement',
          level: '4',
          description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.'
        },{
          title: 'Font of Inspiration',
          level: '5',
          description: 'Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.'
        },{
          title: 'Countercharm',
          level: '6',
          description: 'At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a perform ance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The perform ance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).'
        },{
          title: 'Magical Secrets',
          level: '10',
          description: '<p>By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.</p><p>The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.</p><p>You learn two additional spells from any class at 14th level and again at 18th level.</p>'
        },{
          title: 'Superior Inspration',
          level: '20',
          description: 'At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.'
        }],
      specializations:[{
        title: 'College of Lore',
        description: '<p>Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. W hether singing folk ballads in taverns or elaborate com positions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king</p><p>The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic. </p><p>The college’s members gather in libraries and som etim es in actual colleges, complete with classroom s and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self- important figures of authority.</p>',
        abilities: [{
            title: 'Bonus Proficiencies',
            level: '0',
            description: 'When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice.'
          },{
            title: 'Cutting Words',
            level: '3',
            description: 'Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature’s roll. You can choose to use this feature after the creature makes its roll, but before the DM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can’t hear you or if it’s immune to being charmed.'
          },{
            title: 'Additional Magical Secrets',
            level: '6',
            description: 'At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don’t count against the number of bard spells you know.'
          },{
            title: 'Peerless Skill',
            level: '14',
            description: 'Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roil the die for the ability check, but before the DM tells you whether you succeed or fail.'
          }]
        },{
        title: 'College of Valor',
        description: 'Bards of the College of Valor are daring skalds whose tales keep alive the memory of the great heroes of the past, and thereby inspire a new generation of heroes. These bards gather in mead halls or around great bonfires to sing the deeds of the mighty, both past and present. They travel the land to witness great events firsthand and to ensure that the memory of those events doesn’t pass from the world. With their songs, they inspire others to reach the same heights of accomplishment as the heroes of old.',
        abilities: [{
            title: 'Bonus Proficiencies',
            level: '0',
            description: 'When you join the College of Valor at 3rd level, you gain proficiency with medium armor, shields, and martial weapons.'
          },{
            title: 'Combat Inspiration',
            level: '3',
            description: 'Also at 3rd level, you learn to inspire others in battle. A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, after seeing the roll but before knowing whether it hits or m isses.'
          },{
            title: 'Extra Attack',
            level: '6',
            description: 'Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.'
          },{
            title: 'Battle Magic',
            level: '14',
            description: 'At 14th level, you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. W hen you use your action to cast a bard spell, you can make one weapon attack as a bonus action.'
          }]
        }]
    },{
      name: 'Cleric',hitPoints: [{
          title: 'Hit Dice',
          description: '1d8 per cleric level '
        },{
          title: 'Hit Dice at 1st Level',
          description: '8 + your Constitution modifier '
        },{
          title: 'Hit Points at Higher Levels',
          description: '1d8 (or 5) + your Constitution modifier per cleric level after 1st'
        }],
      proficiencies:[{
          title: 'Armor',
          description: 'light armor, medium armor, shields '
        },{
          title: 'Weapons',
          description: 'simple weapons'
        },{
          title: 'Tools',
          description: ''
        },{
          title: 'Saving Throws',
          description: 'Wisdom, Charisma '
        },{
          title: 'Skills',
          description: 'Choose two from History, Insight, Medicine, Persuasion, and Religion'
        }],
      abilities: [{
          title: 'Divine Domain',
          level: '0',
          description: '<p>Choose one domain related to your deity: Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Each domain is detailed at the end of the class description, and each one provides examples of gods associated with it. Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.</p><p>Each domain has a list of spells—its domain spells— that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.</p><p>If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you.</p>'
        },{
          title: 'Channel Divinity',
          level: '2',
          description: 'At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description. When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again. Som e Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC. Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.'
        },{
          title: 'Channel Divinity: Turn Undead',
          level: '4',
          description: '<p>As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a W isdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.</p><p>A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action.</p>'
        },{
          title: 'Ability Score Improvement',
          level: '4',
          description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.'
        },{
          title: 'Destroy Undead',
          level: '5',
          description: 'Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold, as shown in the Destroy Undead table.'
        },{
          title: 'Divine Intervention',
          level: '10',
          description: '<p>Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.</p><p>Imploring your deity’s aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate.</p><p>If your deity intervenes, you can’t use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.</p><p>At 20th level, your call for intervention succeeds automatically, no roll required.</p>'
        }],
      specializations:[{
        title: 'Knowledge Domain',
        description: 'The gods of knowledge—including Oghma, Boccob, Gilean, Aureon, and Thoth—value learning and understanding above all. Som e teach that knowledge is to be gathered and shared in libraries and universities, or promote the practical knowledge of craft and invention. Som e deities hoard knowledge and keep its secrets to themselves. And som e promise their followers that they will gain tremendous power if they unlock the secrets of the multiverse. Followers of these gods study esoteric lore, collect old tomes, delve into the secret places of the earth, and learn all they can. Som e gods of knowledge promote the practical knowledge of craft and invention, including smith deities like Gond, Reorx, Onatar, Moradin, Hephaestus, and Goibhniu.',
        abilities: [{
            title: 'Blessings of Knowledge',
            level: '1',
            description: '<p>At 1st level, you learn two languages of your choice. You also becom e proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion.</p><p>Your proficiency bonus is doubled for any ability check you make that uses either of those skills.</p>'
          },{
            title: 'Channel Divinity: Knowledge of the Ages',
            level: '2',
            description: 'Starting at 2nd level, you can use your Channel Divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool.'
          },{
            title: 'Channel Divinity: Read Thoughts',
            level: '6',
            description: '<p>At 6th level, you can use your Channel Divinity to read a creature’s thoughts. You can then use your access to the creature’s mind to command it.</p><p>As an action, choose one creature that you can see within 60 feet of you. That creature must make a W isdom saving throw. If the creature succeeds on the saving throw, you can’t use this feature on it again until you finish a long rest.</p><p>If the creature fails its save, you can read its surface thoughts (those foremost in its mind, reflecting its current emotions and what it is actively thinking about) when it is within 60 feet of you. This effect lasts for 1 minute.</p><p>During that time, you can use your action to end this effect and cast the suggestion spell on the creature without expending a spell slot. The target automatically fails its saving throw against the spell.</p>'
          },{
            title: 'Potent Spellcasting',
            level: '8',
            description: 'Starting at 8th level, you add your W isdom modifier to the damage you deal with any cleric cantrip.'
          },{
            title: 'Visions of the Past',
            level: '8',
            description: '<p>Starting at 17th level, you can call up visions of the past that relate to an object you hold or your immediate surroundings. You spend at least 1 minute in meditation and prayer, then receive dreamlike, shadowy glimpses of recent events. You can meditate in this way for a number of minutes equal to your Wisdom score and must maintain concentration during that time, as if you were casting a spell.</p><p>Once you use this feature, you can’t use it again until you finish a short or long rest.<p>'
          }]
        },{
        title: 'Life Domain',
        description: 'The Life domain focuses on the vibrant positive energy—one of the fundamental forces of the universe— that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities (such as Chauntea, Arawai, and Demeter), sun gods (such as Lathander, Pelor, and Re-Horakhty), gods of healing or endurance (such as Ilmater, Mishakal, Apollo, and Diancecht), and gods of home and community (such as Hestia, Hathor, and Boldrei).',
        abilities: [{
            title: 'Bonus Proficiency',
            level: '0',
            description: 'When you choose this domain at 1st level, you gain proficiency with heavy armor.'
          },{
            title: 'Disciples of Life',
            level: '1',
            description: 'Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell’s level.'
          },{
            title: 'Channel Divinity: Preserve Life',
            level: '2',
            description: '<p>Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.</p><p>As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can’t use this feature on an undead or a construct.</p>'
          },{
            title: 'Blessed Healer',
            level: '6',
            description: 'Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell’s level.'
          },{
            title: 'Divine Strike',
            level: '8',
            description: 'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. W hen you reach 14th level, the extra damage increases to 2d8.'
          },{
            title: 'Supreme Healing',
            level: '17',
            description: 'Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12.'
          }]
        },{
        title: 'Light Domain',
        description: 'Gods of light—including Helm, Lathander, Pholtus, Branchala, the Silver Flame, Belenus, Apollo, and Re-Horakhty—promote the ideals of rebirth and renewal, truth, vigilance, and beauty, often using the symbol of the sun. Som e of these gods are portrayed as the sun itself or as a charioteer who guides the sunacross the sky. Others are tireless sentinels whose eyes pierce every shadow and see through every deception. Som e are deities of beauty and artistry, who teach that art is a vehicle for the soul\u0027s improvement. Clerics of a god of light are enlightened souls infused with radiance and the power of their gods’ discerning vision, charged with chasing away lies and burning away darkness.',
        abilities: [{
            title: 'Bonus Cantrip',
            level: '1',
            description: 'At 1st level, you gain the light cantrip if you don’t already know it.'
          },{
            title: 'Warding Flare',
            level: '1',
            description: '<p>Also at 1st level, you can interpose divine light between yourself and an attacking enemy. W hen you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can’t be blinded is immune to this feature.<p></p>You can use this feature a number of times equal to your W isdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.</p>'
          },{
            title: 'Channel Divinity: Radiance of the Dawn',
            level: '2',
            description: '<p>Starting at 2nd level, you can use your Channel Divinity to harness sunlight, banishing darkness and dealing radiant damage to your foes.</p><p>As an action, you present your holy symbol, and any magical darkness within 30 feet of you is dispelled. Additionally, each hostile creature within 30 feet of you must make a Constitution saving throw. A creature takes radiant damage equal to 2d10 + your cleric level on a failed saving throw, and half as much damage on a successful one. A creature that has total cover from you is not affected.</p>'
          },{
            title: 'Improved Flare',
            level: '6',
            description: 'Starting at 6th level, you can also use your Warding Flare feature when a creature that you can see within 30 feet of you attacks a creature other than you.'
          },{
            title: 'Potent Spellcasting',
            level: '8',
            description: 'Starting at 8th level, you add your W isdom modifier to the damage you deal with any cleric cantrip.'
          },{
            title: 'Corona of Light',
            level: '17',
            description: 'Starting at 17th level, you can use your action to activate an aura of sunlight that lasts for 1 minute or until you dismiss it using another action. You emit bright light in a 60-foot radius and dim light 30 feet beyond that. Your enemies in the bright light have disadvantage on saving throws against any spell that deals fire or radiant damage.'
          }]
        },{
        title: 'Nature Domain',
        description: 'Gods of nature are as varied as the natural world itself, from inscrutable gods of the deep forests (such as Silvanus, Obad-Hai, Chislev, Balinor, and Pan) to friendly deities associated with particular springs and groves (such as Eldath). Druids revere nature as a whole and might serve one of these deities, practicing mysterious rites and reciting all-but-forgotten prayers in their own secret tongue. But many of these gods have clerics as well, champions who take a more active role in advancing the interests of a particular nature god. These clerics might hunt the evil monstrosities that despoil the woodlands, bless the harvest of the faithful, or wither the crops of those who anger their gods.',
        abilities: [{
            title: 'Acolyte of Nature',
            level: '1',
            description: 'At 1st level, you learn one druid cantrip of your choice. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival.'
          },{
            title: 'Bonus Proficiency',
            level: '1',
            description: 'At 1st level, you gain proficiency with heavy armor'
          },{
            title: 'Chanel Divinity',
            level: '2',
            description: '<p>Starting at 2nd level, you can use your Channel Divinity to charm animals and plants.</p><p>As an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a W isdom saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage. W hile it is charmed by you, it is friendly to you and other creatures you designate.</p>'
          },{
            title: 'Dampen Elements',
            level: '6',
            description: 'Starting at 6th level, when you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage.'
          },{
            title: 'Divine Strike',
            level: '8',
            description: 'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 cold, fire, or lightning damage (your choice) to the target. W hen you reach 14th level, the extra damage increases to 2d8.'
          },{
            title: 'Master of Nature',
            level: '17',
            description: 'At 17th level, you gain the ability to command animals and plant creatures. W hile creatures are charmed by your Charm Anim als and Plants feature, you can take a bonus action on your turn to verbally command what each of those creatures will do on its next turn.'
          }]
        },{
        title: 'Tempest Domain',
        description: 'Gods whose portfolios include the Tempest domain - including Talos, Umberlee, Kord, Zeboim , the Devourer, Zeus, and Thor - govern storms, sea, and sky. They include gods of lightning and thunder, gods of earthquakes, some fire gods, and certain gods of violence, physical strength, and courage. In some pantheons, a god of this domain rules over other deities and is known for swift justice delivered by thunderbolts. In the pantheons of seafaring people, gods of this domain are ocean deities and the patrons of sailors. Tempest gods send their clerics to inspire fear in the common folk, either to keep those folk on the path of righteousness or to encourage them to offer sacrifices of propitiation to ward off divine wrath.',
        abilities: [{
            title: 'Bonus Proficiencies',
            level: '1',
            description: 'At 1st level, you gain proficiency with martial weapons and heavy armor.'
          },{
            title: 'Wrath of the Storm',
            level: '1',
            description: '<p>Also at 1st level, you can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one.</p><p>You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.</p>'
          },{
            title: 'Channele Divinity: Destructive Wrath',
            level: '2',
            description: '<p>Starting at 2nd level, you can use your Channel Divinity to wield the power of the storm with unchecked ferocity.</p><p>When you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage, instead of rolling.</p>'
          },{
            title: 'Thunderbold Strike',
            level: '6',
            description: 'At 6th level, when you deal lightning damage to a Large or smaller creature, you can also push it up to 10 feet away from you.'
          },{
            title: 'Divine Strike',
            level: '8',
            description: 'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 thunder damage to the target. When you reach 14th level, the extra damage increases to 2d8.'
          },{
            title: 'Stormborn',
            level: '17',
            description: 'At 17th level, you have a flying speed equal to your current walking speed whenever you are not underground or indoors.'
          }]
        },{
        title: 'Trickery Domain',
        description: 'Gods of trickery - such as Tymora, Beshaba, Olidammara, the Traveler, Garl Glittergold, and Loki - are mischief-makers and instigators who stand as a constant challenge to the accepted order among both gods and mortals. They’re patrons of thieves, scoundrels, gamblers, rebels, and liberators. Their clerics are a disruptive force in the world, puncturing pride, mocking tyrants, stealing from the rich, freeing captives, and flouting hollow traditions. They prefer subterfuge, pranks, deception, and theft rather than direct confrontation.',
        abilities: [{
            title: 'Blessing of the Tricksters',
            level: '1',
            description: 'Starting when you choose this domain at 1st level, you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again.'
          },{
            title: 'Channel Divinity: Invoke Duplicity',
            level: '2',
            description: '<p>Starting at 2nd level, you can use your Channel Divinity to create an illusory duplicate of yourself.</p><p>As an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose your concentration (as if you were concentrating on a spell). The illusion appears in an unoccupied space that you can see within 30 feet of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you.</p><p>For the duration, you can cast spells as though you were in the illusion’s space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how distracting the illusion is to the target.</p>'
          },{
            title: 'Channel Divinity: Cloak of Shadows',
            level: '6',
            description: '<p>Starting at 6th level, you can use your Channel Divinity to vanish.</p><p>As an action, you becom e invisible until the end of your next turn. You become visible if you attack or cast a spell.</p>'
          },{
            title: 'Divine Strike',
            level: '8',
            description: 'At 8th level, you gain the ability to infuse your weapon strikes with poison—a gift from your deity. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 poison damage to the target. W hen you reach 14th level, the extra damage increases to 2d8.'
          },{
            title: 'Improved Duplicity',
            level: '17',
            description: 'At 17th level, you can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity. As a bonus action on your turn, you can move any number of them up to 30 feet, to a maximum range of 120 feet.'
          }]
        },{
        title: 'War Domain',
        description: 'War has many manifestations. It can make heroes of ordinary people. It can be desperate and horrific, with acts of cruelty and cowardice eclipsing instances of excellence and courage. In either case, the gods of war watch over warriors and reward them for their great deeds. The clerics of such gods excel in battle, inspiring others to fight the good fight or offering acts of violence as prayers. Gods of war include champions of honor and chivalry (such as Torm, Heironeous, and Kiri- Jolith) as well as gods of destruction and pillage (such as Erythnul, the Fury, Gruumsh, and Ares) and gods of conquest and domination (such as Bane, Hextor, and Maglubiyet). Other war gods (such as Tempus, Nike, and Nuada) take a more neutral stance, promoting war in all its manifestations and supporting warriors in any circumstance.',
        abilities: [{
            title: 'Bonus Proficiencies',
            level: '1',
            description: 'At 1st level, you gain proficiency with martial weapons and heavy armor.'
          },{
            title: 'War Priest',
            level: '1',
            description: '<p>From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. W hen you use the Attack action, you can make one weapon attack as a bonus action.</p><p>You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.</p>'
          },{
            title: 'Channel Divinity: Guided Strike',
            level: '2',
            description: 'Starting at 2nd level, you can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.'
          },{
            title: 'Channel Divinity: War God\u0027s Blessing',
            level: '6',
            description: 'At 6th level, when a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.'
          },{
            title: 'Divine Strike',
            level: '8',
            description: 'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon to the target. W hen you reach 14th level, the extra damage increases to 2d8.'
          },{
            title: 'Avatar of Battle',
            level: '17',
            description: 'At 17th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.'
          }]
        }] 
    },{
      name: 'Druid',
      hitPoints: [{
          title: 'Hit Dice',
          description: '1d8 per druid level '
        },{
          title: 'Hit Dice at 1st Level',
          description: '8 + your Constitution modifier'
        },{
          title: 'Hit Points at Higher Levels',
          description: '1d8 (or 5) + your Constitution modifier per druid level after 1st'
        }],
      proficiencies:[{
          title: 'Armor',
          description: 'Light armor, medium armor, shields (druids will not wear armor or use shields made of metal) '
        },{
          title: 'Weapons',
          description: 'Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears'
        },{
          title: 'Tools',
          description: 'Herbalism Kit'
        },{
          title: 'Saving Throws',
          description: 'Intelligence, Wisdom'
        },{
          title: 'Skills',
          description: 'Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival'
        }],
      abilities: [{
          title: 'Druidic',
          level: '1',
          description: 'You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the m essage’s presence with a successful DC 15 Wisdom (Perception) check but can’t decipher it without magic'
        },{
          title: 'Wild Shape',
          level: '',
          description: '<p>Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.</p><p>Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn’t have a flying or swim ming speed.</p>You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.<p></p>'
        },{
          title: 'Druid Circle',
          level: '2',
          description: 'At 2nd level, you choose to identify with a circle of druids: the Circle of the Land or the Circle of the Moon, both detailed at the end of the class description. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.'
        },{
          title: 'Ability Score Improvement',
          level: '4',
          description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature'
        },{
          title: 'Timeless Body',
          level: '18',
          description: 'Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.'
        },{
          title: 'Beast Spells',
          level: '18',
          description: 'Beginning at 18th level, you can cast many of your druid spells in any shape you assume using W ild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren’t able to provide material components.'
        },{
          title: 'Archdruid',
          level: '20',
          description: 'At 20th level, you can use your W ild Shape an unlimited number of times.'
        }],
      specializations:[{
        title: 'Circle of the Land',
        description: 'The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites.',
        abilities: [{
            title: 'Bonus Cantrip',
            level: '2',
            description: 'When you choose this circle at 2nd level, you learn one additional druid cantrip of your choice.'
          },{
            title: 'Natural Recovery',
            level: '2',
            description: '<p>Starting at 2nd level, you can regain som e of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can’t use this feature again until you finish a long rest.</p><p>For example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots.</p>'
          },{
            title: 'Circle Spells',
            level: '3',
            description: '<p>Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you becam e a druid. Choose that land-arctic, coast, desert, forest, grassland, mountain, swamp, or Underdark-and consult the associated list of spells (Player\u0027s Handbook, p68).</p><p>Once you gain access to a circle spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day. If you gain access to a spell that doesn’t appear on the druid spell list, the spell is nonetheless a druid spell for you.</p>'
          },{
            title: 'Lander\u0027s Stride',
            level: '6',
            description: '<p>Starting at 6th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.</p><p>In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell.</p>'
          },{
            title: 'Nature\u0027s Ward',
            level: '10',
            description: 'When you reach 10th level, you can’t be charmed or frightened by elementals or fey, and you are immune to poison and disease.'
          },{
            title: 'Nature\u0027s Sanctuary',
            level: '14',
            description: '<p>W hen you reach 14th level, creatures of the natural world sense your connection to nature and becom e hesitant to attack you. W hen a beast or plant creature attacks you, that creature must make a W isdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours.</p><p>The creature is aware of this effect before it makes its attack against you.</p>'
          }]
        },{
        title: 'Circle of the Moon',
        description: '<p></p><p></p>',
        abilities: [{
            title: 'Combat Wild Shape',
            level: '2',
            description: '<p>W hen you choose this circle at 2nd level, you gain the ability to use Wild Shape on your turn as a bonus action, rather than as an action.</p><p>Additionally, while you are transformed by Wild Shape, you can use a bonus action to expend one spell slot to regain 1d8 hit points per level of the spell slot expended.</p>'
          },{
            title: 'Circle Forms',
            level: '2',
            description: '<p>The rites of your circle grant you the ability to transform into more dangerous animal forms. Starting at 2nd level, you can use your Wild Shape to transform into a beast with a challenge rating as high as 1 (you ignore the Max. CR column of the Beast Shapes table, but must abide by the other limitations there).</p><p>Starting at 6th level, you can transform into a beast with a challenge rating as high as your druid level divided by 3, rounded down.</p>'
          },{
            title: 'Primal Shape',
            level: '6',
            description: 'Starting at 6th level, your attacks in beast form count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.'
          },{
            title: 'Elemental Wild Shape',
            level: '10',
            description: 'At 10th level, you can expend two uses of Wild Shape at the same time to transform into an air elemental, an earth elemental, a fire elemental, or a water elemental.'
          },{
            title: 'Thousand Forms',
            level: '14',
            description: 'By 14th level, you have learned to use magic to alter your physical form in more subtle ways. You can cast the alter self spell at will.'
          }]
        }],
    },{      
      name: 'Fighter',
      hitPoints: [{
          title: 'Hit Dice',
          description: '1d10 per fighter level '
        },{
          title: 'Hit Dice at 1st Level',
          description: '10 + your Constitution modifier'
        },{
          title: 'Hit Points at Higher Levels',
          description: '1d10 (or 6) + your Constitution modifier per fighter level after 1st'
        }],
      proficiencies:[{
          title: 'Armor',
          description: 'all armor, shields'
        },{
          title: 'Weapons',
          description: 'simple weapons, martial weapons '
        },{
          title: 'Tools',
          description: ''
        },{
          title: 'Saving Throws',
          description: 'Strength, Constitution'
        },{
          title: 'Skills',
          description: 'Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival'
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
          }]
        },{
        title: '',
        description: '',
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
          title: 'Tools',
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
          }]
        },{
        title: '',
        description: '',
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
          title: 'Tools',
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
          title: 'Tools',
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
          }]
        },{
        title: '',
        description: '',
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
          title: 'Tools',
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
          title: 'Tools',
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
          }]
        },{
        title: '',
        description: '',
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
          title: 'Tools',
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
          }]
        },{
        title: '',
        description: '',
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
          title: 'Tools',
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
          }]
        },{
        title: '',
        description: '',
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
          }]
        }]
    }];
});
  
