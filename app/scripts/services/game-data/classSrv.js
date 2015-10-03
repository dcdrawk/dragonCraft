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
          title: 'Fighting Style',
          level: '1',
          description: 'You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again.',
          options: [{
            title: 'Archery',
            decription: 'You gain a +2 bonus to attack rolls you make with ranged weapons.'
          },{
            title: 'Defence',
            decription: 'While you are wearing armor, you gain a +1 bonus to AC'
          },{
            title: 'Dueling',
            decription: 'When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.'
          },{
            title: 'Great Weapon Fighting',
            decription: 'When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.'
          },{
            title: 'Protection',
            decription: 'W hen a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to im pose disadvantage on the attack roll. You must be wielding a shield.'
          },{
            title: 'Two-Weapon Fighting',
            decription: 'When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.'
          }]
        },{
          title: 'Second Wind',
          level: '1',
          description: '<p>You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d 10 + your fighter level.</p><p>Once you use this feature, you must finish a short or long rest before you can use it again.</p>'
        },{
          title: 'Action Surge',
          level: '2',
          description: '<p>Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.</p><p>Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.</p>'
        },{
          title: 'Martial Archetype',
          level: '3',
          description: 'At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. Choose Champion, Battle Master, or Eldritch Knight, all detailed at the end of the class description. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.'
        },{
          title: 'Ability Score Improvement',
          level: '4',
          description: 'When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.'
        },{
          title: 'Extra Attack',
          level: '',
          description: '<p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.</p><p>The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.</p>'
        },{
          title: 'Indomitable',
          level: '',
          description: '<p>Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a long rest.</p><p>You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.</p>'
        }],
      specializations:[{
        title: 'Champion',
        description: '',
        abilities: [{
            title: 'Improved Critical',
            level: '3',
            description: 'Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20.'
          },{
            title: 'Remarkable Athlete',
            level: '7',
            description: '<p>Starting at 7th level, you can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn’t already use your proficiency bonus.</p><p>In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier.</p>'
          },{
            title: 'Additional Fighting Style',
            level: '10',
            description: 'At 10th level, you can choose a second option from the Fighting Style class feature.'
          },{
            title: 'Superior Critical',
            level: '15',
            description: 'Starting at 15th level, your weapon attacks score a critical hit on a roll of 18-20.'
          },{
            title: 'Survivor',
            level: '18',
            description: 'At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don’t gain this benefit if you have 0 hit points.'
          }]
        },{
        title: 'Battle Master',
        description: 'Those who emulate the archetypal Battle Master employ martial techniques passed down through generations. To a Battle Master, combat is an academic field, sometim es including subjects beyond battle such as weaponsmithing and calligraphy. Not every fighter absorbs the lessons of history, theory, and artistry that are reflected in the Battle Master archetype, but those who do are well-rounded fighters of great skill and knowledge.',
        abilities: [{
            title: 'Combat Superiority',
            level: '3',
            description: '<p>When you choose this archetype at 3rd level, you learn maneuvers that are fueled by special dice called superiority dice.</p><p><strong>Maneuvers</strong> You learn three maneuvers of your choice, which are detailed under “Maneuvers” below. Many maneuvers enhance an attack in som e way. You can use only one maneuver per attack.</p><p>You learn two additional maneuvers of your choice at 7th, 10th, and 15th level. Each time you learn new maneuvers, you can also replace one maneuver you know with a different one.</p><p><strong>Superiority Dice</strong> You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest</p><p>You gain another superiority die at 7th level and one more at 15th level.</p><p><strong>Saving Throws</strong>Som e of your maneuvers require your target to make a saving throw to resist the maneuver’s effects. (8 + your proficiency bonus + your Strength or Dexterity modifier)</p>'
          },{
            title: 'Student of War',
            level: '3',
            description: 'At 3rd level, you gain proficiency with one type of artisan’s tools of your choice.'
          },{
            title: 'Know Your Enemy',
            level: '7',
            description: 'Starting at 7th level, if you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:<ul><li>Strength score</li><li>Dexterity score</li><li>Constitution score</li><li>Arm or Class</li><li>Current hit points</li><li>Total class levels (if any)</li><li>Fighter class levels (if any)</li></ul>'
          },{
            title: 'Improved Combat Superiority',
            level: '10',
            description: 'At 10th level, your superiority dice turn into d10s. At 18th level, they turn into dl2s.'
          },{
            title: 'Relentless',
            level: '15',
            description: 'Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain 1 superiority die.'
          }]
        },{
        title: 'Eldritch Knight',
        description: 'The archetypal Eldritch Knight com bines the martial mastery com m on to all fighters with a careful study of magic. Eldritch Knights use magical techniques similar to those practiced by wizards. They focus their study on two of the eight schools of magic: abjuration and evocation. Abjuration spells grant an Eldritch Knight additional protection in battle, and evocation spells deal damage to many foes at once, extending the fighter’s reach in combat. These knights learn a comparatively small number of spells, committing them to memory instead of keeping them in a spellbook.',
        abilities: [{
            title: 'Spellcasting',
            level: '3',
            description: '<p>W hen you reach 3rd level, you augment your martial prowess with the ability to cast spells.</p><p></p><p><strong>Cantrips.</strong> You learn two cantrips of your choice from the wizard spell list. You learn an additional wizard cantrip of your choice at 10th level.</p><p><strong>Spell Slots.</strong> To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.</p><p><strong>Spells Known of 1st-Level and Higher.</strong> You know three 1st-level wizard spells of your choice, two of which you must choose from the abjuration and evocation spells on the wizard spell list. </p><p><strong>Spellcasting Ability.</strong> Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.</p>'
          },{
            title: 'Weapon Bond',
            level: '3',
            description: '<p>At 3rd level, you learn a ritual that creates a magical bond between yourself and one weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. The weapon must be within your reach throughout the ritual, at the conclusion of which you touch the weapon and forge the bond.</p><p>Once you have bonded a weapon to yourself, you can’t be disarmed of that weapon unless you are incapacitated. If it is on the same plane of existence, you can summon that weapon as a bonus action on your turn, causing it to teleport instantly to your hand.</p><p>You can have up to two bonded weapons, but can summon only one at a time with your bonus action. If you attempt to bond with a third weapon, you must break the bond with one of the other two.</p>'
          },{
            title: 'War Magic',
            level: '7',
            description: 'Beginning at 7th level, when you use your action to cast a cantrip, you can make one w eapon attack as a bonus action.'
          },{
            title: 'Eldritch Strike',
            level: '10',
            description: 'At 10th level, you learn how to make your weapon strikes undercut a creature’s resistance to your spells. W hen you hit a creature with a weapon attack, that creature has disadvantage on the next saving throw it makes against a spell you cast before the end of your next turn.'
          },{
            title: 'Arcane Charge',
            level: '15',
            description: 'At 15th level, you gain the ability to teleport up to 30 feet to an unoccupied space you can see when you use your Action Surge. You can teleport before or after the additional action.'
          },{
            title: 'Improved War Magic',
            level: '18',
            description: 'Starting at 18th level, when you use your action to cast a spell, you can make one weapon attack as a bonus action.'
          }]
        }] 
    },{
      name: 'Monk',
      hitPoints: [{
          title: 'Hit Dice',
          description: '1d8 per monk level '
        },{
          title: 'Hit Dice at 1st Level',
          description: '8 + your Constitution modifier '
        },{
          title: 'Hit Points at Higher Levels',
          description: '1d8 (or 5) + your Constitution modifier per monk level after 1st'
        }],
      proficiencies:[{
          title: 'Armor',
          description: 'none'
        },{
          title: 'Weapons',
          description: 'simple weapons, shortswords'
        },{
          title: 'Tools',
          description: 'Choose one type of artisan’s tools or one musical instrument'
        },{
          title: 'Saving Throws',
          description: 'Strength, Dexterity'
        },{
          title: 'Skills',
          description: 'Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth'
        }],
      abilities: [{
          title: 'Unarmored Defence',
          level: '1',
          description: 'Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your W isdom modifier.'
        },{
          title: 'Martial Arts',
          level: '1',
          description: '<p>At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two-handed or heavy property.</p><p>You gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield:</p><ul><li>You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.</li><li>You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.</li><li>When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarter-staff, you can also make an unarmed strike as a bonus action, assuming you haven\u0027t already taken a bonus action this turn.</li></ul><p>Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of w ood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon in chapter 5.</p>'
        },{
          title: 'Ki',
          level: '2',
          description: '<p>Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have.</p><p>You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.</p><p>When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.</p><p>Som e of your ki features require your target to make a saving throw to resist the feature’s effects (8 + your proficiency bonus + your Wisdom modifier).</p>'
        },{
          title: 'Flurry of Blows',
          level: '2',
          description: 'Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.'
        },{
          title: 'Patient Defence',
          level: '2',
          description: 'You can spend 1 ki point to take the Dodge action as a bonus action on your turn.'
        },{
          title: 'Step of the Wind',
          level: '2',
          description: 'You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn'
        },{
          title: 'Unarmored Movement',
          level: '2',
          description: '<p>Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels.</p><p>At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.</p>'
        },{
          title: 'Monastic Tradition',
          level: '3',
          description: 'When you reach 3rd level, you commit yourself to a monastic tradition: the Way of the Open Hand, the Way of Shadow, or the Way of the Four Elements, all detailed at the end of the class description. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.'
        },{
          title: 'Deflect Missiles',
          level: '3',
          description: '<p>Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. W hen you do so, the damage you take from the attack is reduced by 1d 10 + your Dexterity modifier + your monk level.</p><p>If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack.</p>'
        },{
          title: 'Ability Score Improvement',
          level: '4',
          description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.'
        },{
          title: 'Slow Fall',
          level: '4',
          description: 'Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.'
        },{
          title: 'Extra Attack',
          level: '5',
          description: 'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.'
        },{
          title: 'Stunning Strike',
          level: '5',
          description: 'Starting at 5th level, you can interfere with the flow of ki in an opponent’s body. W hen you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.'
        },{
          title: 'Ki-Empowered Strikes',
          level: '6',
          description: 'Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.'
        },{
          title: 'Evasion',
          level: '7',
          description: 'At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon’s lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.'
        },{
          title: 'Stillness of Mind',
          level: '7',
          description: 'Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened.'
        },{
          title: 'Purity of Body',
          level: '10',
          description: 'At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison.'
        },{
          title: 'Tongue of the Sun and Moon',
          level: '13',
          description: 'Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.'
        },{
          title: 'Diamond Soul',
          level: '14',
          description: '<p>Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.</p><p>Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.</p>'
        },{
          title: 'Timeless Body',
          level: '15',
          description: 'At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can\u0027t be aged magically. You can still die of old age, however. In addition, you no longer need food or water.'
        },{
          title: 'Empty Body',
          level: '18',
          description: '<p>Beginning at 18th level, you can use your action to spend 4 ki points to becom e invisible for 1 minute. During that time, you also have resistance to all damage but force damage.</p><p>Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can’t take any other creatures with you.</p>'
        },{
          title: 'Perfect Self',
          level: '20',
          description: 'At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points.'
        }],
      specializations:[{
        title: 'Way of the Open Hand',
        description: 'Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm.',
        abilities: [{
            title: 'Open Hand Technique',
            level: '',
            description: '<p></p><ul><li></li><li></li><li></li></ul>'
          },{
            title: 'Wholeness of Body',
            level: '',
            description: ''
          },{
            title: 'Tranquility',
            level: '',
            description: '<p></p><p></p>'
          },{
            title: 'Quivering Palm',
            level: '',
            description: '<p></p><p></p>'
          }]
        },{
        title: 'Way of the Shadow',
        description: 'Monks of the Way of Shadow follow a tradition that values stealth and subterfuge. These monks might be called ninjas or shadowdancers, and they serve as spies and assassins. Som etim es the mem bers of a ninja monastery are family members, forming a clan sworn to secrecy about their arts and missions. Other monasteries are more like thieves’ guilds, hiring out their services to nobles, rich merchants, or anyone else who can pay their fees. Regardless of their methods, the heads of these monasteries expect the unquestioning obedience of their students.',
        abilities: [{
            title: 'Shadow Arts',
            level: '',
            description: ''
          },{
            title: 'Shadow Step',
            level: '',
            description: ''
          },{
            title: 'Cloak of Shadows',
            level: '',
            description: ''
          },{
            title: 'Opportunist',
            level: '',
            description: ''
          }]
        },{
        title: 'Way of the Four Elements',
        description: '<p></p><p></p>',
        abilities: [{
            title: 'Disciple of the Elements',
            level: '3',
            description: '<p>When you choose this tradition at 3rd level, you learn magical disciplines that harness the power of the four elements. A discipline requires you to spend ki points each time you use it.</p><p>You know the Elemental Attunement discipline and one other elemental discipline of your choice. You learn one additional elemental discipline of your choice at 6th, 11th, and 17th level.</p><p>Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline.</p>'
          },{
            title: 'Breath of Winter',
            level: '17',
            description: 'You can spend 6 ki points to cast cone of cold.'
          },{
            title: 'Clench of the North Wind',
            level: '6',
            description: 'You can spend 3 ki points to cast hold person.'
          },{
            title: 'Elemental Attunement',
            level: '3',
            description: '<p>You can use your action to briefly control elemental forces nearby, causing one of the following effects of your choice:</p><ul><li>Create a harmless, instantaneous sensory effect related to air, earth, fire, or water, such as a shower of sparks, a puff of wind, a spray of light mist, or a gentle rumbling of stone.</li><li>Instantaneously light or snuff out a candle, a torch, or a small campfire.</li><li>Chill or warm up to 1 pound of nonliving material for up to 1 hour.</li><li>Cause earth, fire, water, or mist that can fit within a 1-foot cube to shape itself into a crude form you designate for 1 minute.</li></ul>'
          },{
            title: 'Eternal Mountain Defense',
            level: '11',
            description: 'You can spend 5 ki points to cast stoneskin, targeting yourself'
          },{
            title: 'Fangs oft he Fire Snake',
            level: '3',
            description: 'When you use the Attack action on your turn, you can spend 1 ki point to cause tendrils of flame to stretch out from your fists and feet. Your reach with your unarmed strikes increases by 10 feet for that action, as well as the rest of the turn. A hit with such an attack deals fire damage instead of bludgeoning damage, and if you spend 1 ki point when the attack hits, it also deals an extra 1d 10 fire damage.'
          },{
            title: 'Fist ofF our Thunders',
            level: '3',
            description: 'You can spend 2 ki points to cast thunderwave.'
          },{
            title: 'Fist of Unbroken Air',
            level: '3',
            description: 'You can create a blast of com pressed air that strikes like a mighty fist. As an action, you can spend 2 ki points and choose a creature within 30 feet of you. That creature must make a Strength saving throw. On a failed save, the creature takes 3d10 bludgeoning damage, plus an extra 1d10 bludgeoning damage for each additional ki point you spend, and you can push the creature up to 20 feet away from you and knock it prone. On a successful save, the creature takes half as much damage, and you don’t push it or knock it prone.'
          },{
            title: 'Flames oft he Phoenix',
            level: '11',
            description: 'You can spend 4 ki points to cast fireball.'
          },{
            title: 'Gong of the Summi',
            level: '6',
            description: 'You can spend 3 ki points to cast shatter.'
          },{
            title: 'Mist Stance',
            level: '11',
            description: 'You can spend 4 ki points to cast gaseous form, targeting yourself.'
          },{
            title: 'Ride the Wind',
            level: '11',
            description: 'You can spend 4 ki points to cast fly, targeting yourself.'
          },{
            title: 'River ofH ungry Flame',
            level: '17',
            description: 'You can spend 5 ki points to cast wall of fire.'
          },{
            title: 'Rush of the Gale Spirits',
            level: '3',
            description: 'You can spend 2 ki points to cast gust of wind.'
          },{
            title: 'Shape the Flowing River',
            level: '3',
            description: 'As an action, you can spend 1 ki point to choose an area of ice or water no larger than 30 feet on a side within 120 feet of you. You can change water to ice within the area and vice versa, and you can reshape ice in the area in any manner you choose. You can raise or lower the ice’s elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can’t exceed half the area’s largest dimension. For example, if you affect a 30-foot square, you can create a pillar up to 15 feet high, raise or lower the square’s elevation by up to 15 feet, dig a trench up to 15 feet deep, and so on. You can’t shape the ice to trap or injure a creature in the area.'
          },{
            title: 'Sweeping Cinder Strike',
            level: '3',
            description: 'You can spend 2 ki points to cast burning hands. '
          },{
            title: 'Water Whip',
            level: '3',
            description: 'You can spend 2 ki points as a bonus action to create a whip of water that shoves and pulls a creature to unbalance it. A creature that you can see that is within 30 feet of you must make a Dexterity saving throw. On a failed save, the creature takes 3d10 bludgeoning damage, plus an extra 1d10 bludgeoning damage for each additional ki point you spend, and you can either knock it prone or pull it up to 25 feet closer to you. On a successful save, the creature takes half as much damage, and you don’t pull it or knock it prone.'
          },{
            title: 'Wave ofR olling Earth',
            level: '17',
            description: 'You can spend 6 ki points to cast wall of stone.'
          }]
        }]
    },{
      name: 'Paladin',
      hitPoints: [{
          title: 'Hit Dice',
          description: '1d10 per paladin level'
        },{
          title: 'Hit Dice at 1st Level',
          description: '10 + your Constitution modifier'
        },{
          title: 'Hit Points at Higher Levels',
          description: '1d 10 (or 6) + your Constitution modifier per paladin level after 1st'
        }],
      proficiencies:[{
          title: 'Armor',
          description: 'all armor, shields'
        },{
          title: 'Weapons',
          description: 'simple weapons, martial weapons'
        },{
          title: 'Tools',
          description: ''
        },{
          title: 'Saving Throws',
          description: 'Wisdom, Charisma'
        },{
          title: 'Skills',
          description: 'Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion'
        }],
      abilities: [{
          title: 'Divine Sense',
          level: '1',
          description: '<p>The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.</p><p>You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.</p><p>This feature has no effect on undead and constructs</p>'
        },{
          title: 'Lay on Hands',
          level: '1',
          description: '<p>Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.</p><p>As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.</p><p>Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.</p>'
        },{
          title: 'Fighting Style',
          level: '2',
          description: 'At 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again.',
          options: [{
            title: 'Defense',
            description 'While you are wearing armor, you gain a +1 bonus to AC.'
          },{
            title: 'Dueling',
            description 'When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.'
          },{
            title: 'Great Weapon Fighting',
            description 'When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll. The weapon must have the two-handed or versatile property for you to gain this benefit.'
          },{
            title: 'Protection',
            description 'When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to im pose disadvantage on the attack roll. You must be wielding a shield.'
          }]
        },{
          title: 'Divine Smite',
          level: '2',
          description: 'Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one paladin spell slot to deal radiant damage to the target, in addition to the w eapon’s damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend.'
        },{
          title: 'Divine Health',
          level: '3',
          description: 'By 3rd level, the divine magic flowing through you makes you immune to disease.'
        },{
          title: 'Sacred Oath',
          level: '3',
          description: '<p>When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose the Oath of Devotion, the Oath of the Ancients, or the Oath of Vengeance, all detailed at the end of the class description</p><p>Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature.</p>',
        },{
          title: 'Ability Score Improvement',
          level: '4',
          description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.'
        },{
          title: 'Extra Attack',
          level: '5',
          description: 'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.'
        },{
          title: 'Aura of Protection',
          level: '6',
          description: '<p>Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.</p><p>At 18th level, the range of this aura increases to 30 feet.</p>'
        },{
          title: 'Aura of Courage',
          level: '10',
          description: '<p>Starting at 10th level, you and friendly creatures within 10 feet of you can’t be frightened while you are conscious.</p><p>At 18th level, the range of this aura increases to 30 feet.</p>'
        },{
          title: 'Improved Divine Smite',
          level: '11',
          description: 'By 11th level, you are so suffused with righteous might that all your melee w eapon strikes carry divine power with them. W henever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage. If you also use your Divine Smite with an attack, you add this damage to the extra damage of your Divine Smite.'
        },{
          title: 'Cleansing Touch',
          level: '14',
          description: '<p>Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.</p><p>You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest.</p>'
        }],
      specializations:[{
        title: 'Oath of Devotion',
        description: 'The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Som etim es called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods’ tenets as the measure of their devotion. They hold angels—the perfect servants of good—as their ideals, and incorporate images of angelic wings into their helmets or coats of arms.',
        abilities: [{
            title: 'Channel Divinity: Sacred Weapon',
            level: '3',
            description: '<p>As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becom es magical for the duration.</p><p>You can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends.</p>'
          },{
            title: 'Channel Divinity: Turn the Unholy',
            level: '3',
            description: '<p>As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a W isdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.</p><p>A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action.</p>'
          },{
            title: 'Aura of Devotion',
            level: '7',
            description: '<p>Starting at 7th level, you and friendly creatures within 10 feet of you can’t be charmed while you are conscious.</p><p>At 18th level, the range of this aura increases to 30 feet.</p>'
          },{
            title: 'Purity of Spirit',
            level: '15',
            description: 'Beginning at 15th level, you are always under the effects of a protection from evil and good spell.'
          },{
            title: 'Holy Nimbus',
            level: '20',
            description: '<p>At 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that.</p><p>Whenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage.</p><p>In addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead.</p><p>Once you use this feature, you can’t use it again until you finish a long rest.</p>'
          }]
        },{
        title: 'Oath of the Ancients',
        description: 'The Oath of the Ancients is as old as the race of elves and the rituals of the druids. Som etim es called fey knights, green knights, or horned knights, paladins who swear this oath cast their lot with the side of the light in the cosm ic struggle against darkness because they love the beautiful and life-giving things of the world, not necessarily because they believe in principles of honor, courage, and justice. They adorn their armor and clothing with images of growing things—leaves, antlers, or flowers—to reflect their commitment to preserving life and light in the world.',
        abilities: [{
            title: 'Channel Divinity: Nature\u0027s Wrath',
            level: '3',
            description: 'You can use your Channel Divinity to invoke primeval forces to ensnare a foe. As an action, you can cause spectral vines to spring up and reach for a creature within 10 feet of you that you can see. The creature must succeed on a Strength or Dexterity saving throw (its choice) or be restrained. While restrained by the vines, the creature repeats the saving throw at the end of each of its turns. On a success, it frees itself and the vines vanish.'
          },{
            title: 'Channel Divinity: Turn the Faithless',
            level: '3',
            description: '<p>You can use your Channel Divinity to utter ancient w ords that are painful for fey and fiends to hear. As an action, you present your holy symbol, and each fey or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.</p><p>A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action. </p><p>If the creature’s true form is concealed by an illusion, shapeshifting, or other effect, that form is revealed while it is turned.</p>'
          },{
            title: 'Aura of Warding',
            level: '7',
            description: '<p>Beginning at 7th level, ancient magic lies so heavily upon you that it forms an eldritch ward. You and friendly creatures within 10 feet of you have resistance to damage from spells.</p><p>At 18th level, the range of this aura increases to 30 feet.
</p>'
          },{
            title: 'Undying Sentinel',
            level: '15',
            description: '<p>Starting at 15th level, when you are reduced to 0 hit points and are not killed outright, you can choose to drop to 1 hit point instead. Once you use this ability, you can’t use it again until you finish a long rest.</p><p>Additionally, you suffer none of the drawbacks of old age, and you can’t be aged magically.</p>'
          },{
            title: 'Elder Champion',
            level: '20',
            description: '<p>At 20th level, you can assume the form of an ancient force of nature, taking on an appearance you choose. For example, your skin might turn green or take on a bark-like texture, your hair might become leafy or moss-like, or you might sprout antlers or a lion-like mane.</p><p>Using your action, you undergo a transformation. For 1 minute, you gain the following benefits:</p><ul><li>At the start of each of your turns, you regain 10 hit points.</li><li>Whenever you cast a paladin spell that has a casting time of 1 action, you can cast it using a bonus action instead.</li><li>Enemy creatures within 10 feet of you have disadvantage on saving throws against your paladin spells and Channel Divinity options.</li></ul><p>Once you use this feature, you can’t use it again until you finish a long rest.</p>'
          }]
        },{
        title: 'Oath of Vengeance',
        description: 'The Oath of Vengeance is a solemn commitment to punish those who have committed a grievous sin. When evil forces slaughter helpless villagers, when an entire people turns against the will of the gods, when a thieves’ guild grows too violent and powerful, when a dragon rampages through the countryside—at times like these, paladins arise and swear an Oath of Vengeance to set right that which has gone wrong. To these paladins— sometimes called avengers or dark knights—their own purity is not as important as delivering justice.',
        abilities: [{
            title: 'Channel Divinity: Abjur Enemy',
            level: '3',
            description: '<p>As an action, you present your holy symbol and speak a prayer of denunciation, using your Channel Divinity. Choose one creature within 60 feet of you that you can see. That creature must make a W isdom saving throw, unless it is immune to being frightened. Fiends and undead have disadvantage on this saving throw.</p><p>On a failed save, the creature is frightened for 1 minute or until it takes any damage. While frightened, the creature’s speed is 0, and it can’t benefit from any bonus to its speed.</p><p>On a successful save, the creature’s speed is halved for 1 minute or until the creature takes any damage.</p>'
          },{
            title: 'Channel Divinity: Vow of Enmity',
            level: '3',
            description: 'As a bonus action, you can utter a vow of enmity against a creature you can see within 10 feet of you, using your Channel Divinity. You gain advantage on attack rolls against the creature for 1 minute or until it drops to 0 hit points or falls unconscious.'
          },{
            title: 'Relentless Avenger',
            level: '7',
            description: 'By 7th level, your supernatural focus helps you close off a foe’s retreat. W hen you hit a creature with an opportunity attack, you can move up to half your speed immediately after the attack and as part of the same reaction. This movement doesn’t provoke opportunity attacks.'
          },{
            title: 'Soul of Vengeance',
            level: '15',
            description: 'Starting at 15th level, the authority with which you speak your Vow of Enmity gives you greater power over your foe. W hen a creature under the effect of your Vow of Enmity makes an attack, you can use your reaction to make a melee weapon attack against that creature if it is within range.'
          },{
            title: 'Avenging Angel',
            level: '3',
            description: '<p>At 20th level, you can assume the form of an angelic avenger. Using your action, you undergo a transformation. For 1 hour, you gain the following benefits:</p><ul><li>Wings sprout from your back and grant you a flying speed of 60 feet.</li><li>You emanate an aura of menace in a 30-foot radius. The first time any enemy creature enters the aura or starts its turn there during a battle, the creature must succeed on a W isdom saving throw or becom e frightened of you for 1 minute or until it takes any damage. Attack rolls against the frightened creature have advantage.</li></ul><p>Once you use this feature, you can’t use it again until you finish a long rest.</p>'
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
            level: '',
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
  
