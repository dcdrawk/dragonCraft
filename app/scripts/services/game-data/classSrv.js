'use strict';
angular.module('dCraftApp').service( 'ClassSrv', function(){  

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
          description: '<p>Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you’re raging and don’t die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.</p><p>Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.</p>'
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
            description: 'At 10th level, you can cast the commune with nature spell, but only as a ritual. When you do so, a spiritual version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek.'
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
        description: '<p>Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate com positions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king</p><p>The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic. </p><p>The college’s members gather in libraries and sometim es in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self- important figures of authority.</p>',
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
            description: 'Also at 3rd level, you learn to inspire others in battle. A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, after seeing the roll but before knowing whether it hits or misses.'
          },{
            title: 'Extra Attack',
            level: '6',
            description: 'Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.'
          },{
            title: 'Battle Magic',
            level: '14',
            description: 'At 14th level, you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. When you use your action to cast a bard spell, you can make one weapon attack as a bonus action.'
          }]
        }]
    },{
      name: 'Cleric',
      hitPoints: [{
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
          description: 'At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description. When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again. Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC. Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.'
        },{
          title: 'Channel Divinity: Turn Undead',
          level: '4',
          description: '<p>As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.</p><p>A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action.</p>'
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
        description: 'The gods of knowledge—including Oghma, Boccob, Gilean, Aureon, and Thoth—value learning and understanding above all. Some teach that knowledge is to be gathered and shared in libraries and universities, or promote the practical knowledge of craft and invention. Some deities hoard knowledge and keep its secrets to themselves. And some promise their followers that they will gain tremendous power if they unlock the secrets of the multiverse. Followers of these gods study esoteric lore, collect old tomes, delve into the secret places of the earth, and learn all they can. Some gods of knowledge promote the practical knowledge of craft and invention, including smith deities like Gond, Reorx, Onatar, Moradin, Hephaestus, and Goibhniu.',
        abilities: [{
            title: 'Blessings of Knowledge',
            level: '1',
            description: '<p>At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion.</p><p>Your proficiency bonus is doubled for any ability check you make that uses either of those skills.</p>'
          },{
            title: 'Channel Divinity: Knowledge of the Ages',
            level: '2',
            description: 'Starting at 2nd level, you can use your Channel Divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool.'
          },{
            title: 'Channel Divinity: Read Thoughts',
            level: '6',
            description: '<p>At 6th level, you can use your Channel Divinity to read a creature’s thoughts. You can then use your access to the creature’s mind to command it.</p><p>As an action, choose one creature that you can see within 60 feet of you. That creature must make a Wisdom saving throw. If the creature succeeds on the saving throw, you can’t use this feature on it again until you finish a long rest.</p><p>If the creature fails its save, you can read its surface thoughts (those foremost in its mind, reflecting its current emotions and what it is actively thinking about) when it is within 60 feet of you. This effect lasts for 1 minute.</p><p>During that time, you can use your action to end this effect and cast the suggestion spell on the creature without expending a spell slot. The target automatically fails its saving throw against the spell.</p>'
          },{
            title: 'Potent Spellcasting',
            level: '8',
            description: 'Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.'
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
            description: 'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.'
          },{
            title: 'Supreme Healing',
            level: '17',
            description: 'Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12.'
          }]
        },{
        title: 'Light Domain',
        description: 'Gods of light—including Helm, Lathander, Pholtus, Branchala, the Silver Flame, Belenus, Apollo, and Re-Horakhty—promote the ideals of rebirth and renewal, truth, vigilance, and beauty, often using the symbol of the sun. Some of these gods are portrayed as the sun itself or as a charioteer who guides the sunacross the sky. Others are tireless sentinels whose eyes pierce every shadow and see through every deception. Some are deities of beauty and artistry, who teach that art is a vehicle for the soul\u0027s improvement. Clerics of a god of light are enlightened souls infused with radiance and the power of their gods’ discerning vision, charged with chasing away lies and burning away darkness.',
        abilities: [{
            title: 'Bonus Cantrip',
            level: '1',
            description: 'At 1st level, you gain the light cantrip if you don’t already know it.'
          },{
            title: 'Warding Flare',
            level: '1',
            description: '<p>Also at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can’t be blinded is immune to this feature.<p></p>You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.</p>'
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
            description: 'Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.'
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
            description: '<p>Starting at 2nd level, you can use your Channel Divinity to charm animals and plants.</p><p>As an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage. While it is charmed by you, it is friendly to you and other creatures you designate.</p>'
          },{
            title: 'Dampen Elements',
            level: '6',
            description: 'Starting at 6th level, when you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage.'
          },{
            title: 'Divine Strike',
            level: '8',
            description: 'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 cold, fire, or lightning damage (your choice) to the target. When you reach 14th level, the extra damage increases to 2d8.'
          },{
            title: 'Master of Nature',
            level: '17',
            description: 'At 17th level, you gain the ability to command animals and plant creatures. While creatures are charmed by your Charm Anim als and Plants feature, you can take a bonus action on your turn to verbally command what each of those creatures will do on its next turn.'
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
            description: '<p>Starting at 6th level, you can use your Channel Divinity to vanish.</p><p>As an action, you become invisible until the end of your next turn. You become visible if you attack or cast a spell.</p>'
          },{
            title: 'Divine Strike',
            level: '8',
            description: 'At 8th level, you gain the ability to infuse your weapon strikes with poison—a gift from your deity. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 poison damage to the target. When you reach 14th level, the extra damage increases to 2d8.'
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
            description: '<p>From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action.</p><p>You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.</p>'
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
            description: 'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to 2d8.'
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
          description: 'You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message’s presence with a successful DC 15 Wisdom (Perception) check but can’t decipher it without magic'
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
          description: 'Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren’t able to provide material components.'
        },{
          title: 'Archdruid',
          level: '20',
          description: 'At 20th level, you can use your Wild Shape an unlimited number of times.'
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
            description: '<p>Starting at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can’t use this feature again until you finish a long rest.</p><p>For example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots.</p>'
          },{
            title: 'Circle Spells',
            level: '3',
            description: '<p>Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid. Choose that land-arctic, coast, desert, forest, grassland, mountain, swamp, or Underdark-and consult the associated list of spells (Player\u0027s Handbook, p68).</p><p>Once you gain access to a circle spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day. If you gain access to a spell that doesn’t appear on the druid spell list, the spell is nonetheless a druid spell for you.</p>'
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
            description: '<p>W hen you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours.</p><p>The creature is aware of this effect before it makes its attack against you.</p>'
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
            description: '<p>When you choose this archetype at 3rd level, you learn maneuvers that are fueled by special dice called superiority dice.</p><p><strong>Maneuvers</strong> You learn three maneuvers of your choice, which are detailed under “Maneuvers” below. Many maneuvers enhance an attack in some way. You can use only one maneuver per attack.</p><p>You learn two additional maneuvers of your choice at 7th, 10th, and 15th level. Each time you learn new maneuvers, you can also replace one maneuver you know with a different one.</p><p><strong>Superiority Dice</strong> You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest</p><p>You gain another superiority die at 7th level and one more at 15th level.</p><p><strong>Saving Throws</strong>Some of your maneuvers require your target to make a saving throw to resist the maneuver’s effects. (8 + your proficiency bonus + your Strength or Dexterity modifier)</p>'
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
        description: 'The archetypal Eldritch Knight com bines the martial mastery common to all fighters with a careful study of magic. Eldritch Knights use magical techniques similar to those practiced by wizards. They focus their study on two of the eight schools of magic: abjuration and evocation. Abjuration spells grant an Eldritch Knight additional protection in battle, and evocation spells deal damage to many foes at once, extending the fighter’s reach in combat. These knights learn a comparatively small number of spells, committing them to memory instead of keeping them in a spellbook.',
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
            description: 'Beginning at 7th level, when you use your action to cast a cantrip, you can make one weapon attack as a bonus action.'
          },{
            title: 'Eldritch Strike',
            level: '10',
            description: 'At 10th level, you learn how to make your weapon strikes undercut a creature’s resistance to your spells. When you hit a creature with a weapon attack, that creature has disadvantage on the next saving throw it makes against a spell you cast before the end of your next turn.'
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
          description: 'Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.'
        },{
          title: 'Martial Arts',
          level: '1',
          description: '<p>At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two-handed or heavy property.</p><p>You gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield:</p><ul><li>You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.</li><li>You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.</li><li>When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarter-staff, you can also make an unarmed strike as a bonus action, assuming you haven\u0027t already taken a bonus action this turn.</li></ul><p>Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon in chapter 5.</p>'
        },{
          title: 'Ki',
          level: '2',
          description: '<p>Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have.</p><p>You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.</p><p>When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.</p><p>Some of your ki features require your target to make a saving throw to resist the feature’s effects (8 + your proficiency bonus + your Wisdom modifier).</p>'
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
          description: '<p>Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d 10 + your Dexterity modifier + your monk level.</p><p>If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack.</p>'
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
          description: 'Starting at 5th level, you can interfere with the flow of ki in an opponent’s body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.'
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
          description: '<p>Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.</p><p>Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can’t take any other creatures with you.</p>'
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
            level: '3',
            description: '<p>Starting when you choose this tradition at 3rd level, you can manipulate your enemy’s ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can im pose one of the following effects on that target:</p><ul><li>It must succeed on a Dexterity saving throw or be knocked prone.</li><li>It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.</li><li>It can’t take reactions until the end of your next turn.</li></ul>'
          },{
            title: 'Wholeness of Body',
            level: '6',
            description: 'At 6th level, you gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again.'
          },{
            title: 'Tranquility',
            level: '11',
            description: 'Beginning at 11th level, you can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus.'
          },{
            title: 'Quivering Palm',
            level: '',
            description: '<p>At 17th level, you gain the ability to set up lethal vibrations in someone’s body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d 10 necrotic damage.</p><p>You can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action.</p>'
          }]
        },{
        title: 'Way of the Shadow',
        description: 'Monks of the Way of Shadow follow a tradition that values stealth and subterfuge. These monks might be called ninjas or shadowdancers, and they serve as spies and assassins. Sometim es the mem bers of a ninja monastery are family members, forming a clan sworn to secrecy about their arts and missions. Other monasteries are more like thieves’ guilds, hiring out their services to nobles, rich merchants, or anyone else who can pay their fees. Regardless of their methods, the heads of these monasteries expect the unquestioning obedience of their students.',
        abilities: [{
            title: 'Shadow Arts',
            level: '3',
            description: 'Starting when you choose this tradition at 3rd level, you can use your ki to duplicate the effects of certain spells. As an action, you can spend 2 ki points to cast darkness, darkvision, pass without trace, or silence, without providing material components. Additionally, you gain the minor illusion cantrip if you don’t already know it.'
          },{
            title: 'Shadow Step',
            level: '6',
            description: 'At 6th level, you gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action you can teleport up to 60 feet to an unoccupied space you can see that is also in dim light or darkness. You then have advantage on the first melee attack you make before the end of the turn.'
          },{
            title: 'Cloak of Shadows',
            level: '11',
            description: 'By 11th level, you have learned to become one with the shadows. When you are in an area of dim light or darkness, you can use your action to become invisible. You remain invisible until you make an attack, cast a spell, or are in an area of bright light.'
          },{
            title: 'Opportunist',
            level: '17',
            description: 'At 17th level, you can exploit a creature\u0027s momentary distraction when it is hit by an attack. Whenever a creature within 5 feet of you is hit by an attack made by a creature other than you, you can use your reaction to make a melee attack against that creature.'
          }]
        },{
        title: 'Way of the Four Elements',
        description: '<p>You follow a monastic tradition that teaches you to harness the elements. When you focus your ki, you can align yourself with the forces of creation and bend the four elements to your will, using them as an extension of your body. Some mem bers of this tradition dedicate themselves to a single element, but others weave the elements together.</p><p>Many monks of this tradition tattoo their bodies with representations of their ki powers, commonly imagined as coiling dragons, but also as phoenixes, fish, plants, mountains, and cresting waves.</p>',
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
            description:'While you are wearing armor, you gain a +1 bonus to AC.'
          },{
            title: 'Dueling',
            description:'When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.'
          },{
            title: 'Great Weapon Fighting',
            description:'When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll. The weapon must have the two-handed or versatile property for you to gain this benefit.'
          },{
            title: 'Protection',
            description:'When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to im pose disadvantage on the attack roll. You must be wielding a shield.'
          }]
        },{
          title: 'Divine Smite',
          level: '2',
          description: 'Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one paladin spell slot to deal radiant damage to the target, in addition to the weapon’s damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend.'
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
          description: 'By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage. If you also use your Divine Smite with an attack, you add this damage to the extra damage of your Divine Smite.'
        },{
          title: 'Cleansing Touch',
          level: '14',
          description: '<p>Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.</p><p>You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest.</p>'
        }],
      specializations:[{
        title: 'Oath of Devotion',
        description: 'The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometim es called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods’ tenets as the measure of their devotion. They hold angels—the perfect servants of good—as their ideals, and incorporate images of angelic wings into their helmets or coats of arms.',
        abilities: [{
            title: 'Channel Divinity: Sacred Weapon',
            level: '3',
            description: '<p>As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becom es magical for the duration.</p><p>You can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends.</p>'
          },{
            title: 'Channel Divinity: Turn the Unholy',
            level: '3',
            description: '<p>As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.</p><p>A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action.</p>'
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
        description: 'The Oath of the Ancients is as old as the race of elves and the rituals of the druids. Sometim es called fey knights, green knights, or horned knights, paladins who swear this oath cast their lot with the side of the light in the cosm ic struggle against darkness because they love the beautiful and life-giving things of the world, not necessarily because they believe in principles of honor, courage, and justice. They adorn their armor and clothing with images of growing things—leaves, antlers, or flowers—to reflect their commitment to preserving life and light in the world.',
        abilities: [{
            title: 'Channel Divinity: Nature\u0027s Wrath',
            level: '3',
            description: 'You can use your Channel Divinity to invoke primeval forces to ensnare a foe. As an action, you can cause spectral vines to spring up and reach for a creature within 10 feet of you that you can see. The creature must succeed on a Strength or Dexterity saving throw (its choice) or be restrained. While restrained by the vines, the creature repeats the saving throw at the end of each of its turns. On a success, it frees itself and the vines vanish.'
          },{
            title: 'Channel Divinity: Turn the Faithless',
            level: '3',
            description: '<p>You can use your Channel Divinity to utter ancient words that are painful for fey and fiends to hear. As an action, you present your holy symbol, and each fey or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.</p><p>A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action. </p><p>If the creature’s true form is concealed by an illusion, shapeshifting, or other effect, that form is revealed while it is turned.</p>'
          },{
            title: 'Aura of Warding',
            level: '7',
            description: '<p>Beginning at 7th level, ancient magic lies so heavily upon you that it forms an eldritch ward. You and friendly creatures within 10 feet of you have resistance to damage from spells.</p><p>At 18th level, the range of this aura increases to 30 feet.</p>'
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
            description: '<p>As an action, you present your holy symbol and speak a prayer of denunciation, using your Channel Divinity. Choose one creature within 60 feet of you that you can see. That creature must make a Wisdom saving throw, unless it is immune to being frightened. Fiends and undead have disadvantage on this saving throw.</p><p>On a failed save, the creature is frightened for 1 minute or until it takes any damage. While frightened, the creature’s speed is 0, and it can’t benefit from any bonus to its speed.</p><p>On a successful save, the creature’s speed is halved for 1 minute or until the creature takes any damage.</p>'
          },{
            title: 'Channel Divinity: Vow of Enmity',
            level: '3',
            description: 'As a bonus action, you can utter a vow of enmity against a creature you can see within 10 feet of you, using your Channel Divinity. You gain advantage on attack rolls against the creature for 1 minute or until it drops to 0 hit points or falls unconscious.'
          },{
            title: 'Relentless Avenger',
            level: '7',
            description: 'By 7th level, your supernatural focus helps you close off a foe’s retreat. When you hit a creature with an opportunity attack, you can move up to half your speed immediately after the attack and as part of the same reaction. This movement doesn’t provoke opportunity attacks.'
          },{
            title: 'Soul of Vengeance',
            level: '15',
            description: 'Starting at 15th level, the authority with which you speak your Vow of Enmity gives you greater power over your foe. When a creature under the effect of your Vow of Enmity makes an attack, you can use your reaction to make a melee weapon attack against that creature if it is within range.'
          },{
            title: 'Avenging Angel',
            level: '20',
            description: '<p>At 20th level, you can assume the form of an angelic avenger. Using your action, you undergo a transformation. For 1 hour, you gain the following benefits:</p><ul><li>Wings sprout from your back and grant you a flying speed of 60 feet.</li><li>You emanate an aura of menace in a 30-foot radius. The first time any enemy creature enters the aura or starts its turn there during a battle, the creature must succeed on a Wisdom saving throw or become frightened of you for 1 minute or until it takes any damage. Attack rolls against the frightened creature have advantage.</li></ul><p>Once you use this feature, you can’t use it again until you finish a long rest.</p>'
          }]
        }]
    },{
      name: 'Ranger',
      hitPoints: [{
          title: 'Hit Dice',
          description: '1d 10 per ranger level'
        },{
          title: 'Hit Dice at 1st Level',
          description: ' 10 + your Constitution modifier '
        },{
          title: 'Hit Points at Higher Levels',
          description: ' 1d 10 (or 6) + your Constitution modifier per ranger level after 1st'
        }],
      proficiencies:[{
          title: 'Armor',
          description: 'light armor, medium armor, shields '
        },{
          title: 'Weapons',
          description: 'Simple weapons, martial weapons '
        },{
          title: 'Tools',
          description: ''
        },{
          title: 'Saving Throws',
          description: 'Strength, Dexterity'
        },{
          title: 'Skills',
          description: 'Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival'
        }],
      abilities: [{
          title: 'Favored Enemy',
          level: '1',
          description: '<p>Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy</p><p>You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.</p><p></p><p>When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.</p><p>You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.</p>',
        options:[{
            title:'Abberations'
          },{
            title:'Beasts'
          },{
            title:'Celestials'
          },{
            title:'Constructs'
          },{
            title:'Dragons'
          },{
            title:'Elementals'
          },{
            title:'Fey'
          },{
            title:'Fiends'
          },{
            title:'Giants'
          },{
            title:'Monstrosities'
          },{
            title:'Oozes'
          },{
            title:'Plants'
          },{
            title:'Undead'
          }]
        },{
          title: 'Natural Explorer',
          level: '',
          description: '<p>You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.</p><p>While traveling for an hour or more in your favored terrain, you gain the following benefits</p><ul><li>Difficult terrain doesn’t slow your group’s travel</li><li>Your group can’t become lost except by magical means.</li><li>Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.</li><li>If you are traveling alone, you can move stealthily at a normal pace.</li><li>When you forage, you find twice as much food as you normally would.</li><li>While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.</li></ul><p>You choose additional favored terrain types at 6th and 10th level.</p>',
          options:[{
            title:'Actic'
          },{
            title:'Coast'
          },{
            title:'Desert'
          },{
            title:'Forest'
          },{
            title:'Grassland'
          },{
            title:'Mountain'
          },{
            title:'Swamp'
          },{
            title:'Underdark'
          }]
        },{
          title: 'Fighting Style',
          level: '2',
          description: 'At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again',
          options:[{
            title:'Arhcery',
            description: 'You gain a +2 bonus to attack rolls you make with ranged weapons.',
          },{
            title:'Defence',
            description: 'While you are wearing armor, you gain a +1 bonus to AC.',
          },{
            title:'Dueling',
            description: 'When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.',
          },{
            title:'Two-Weapon Fighting',
            description: 'When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.',
          }]
        },{
          title: 'Ranger Achetype',
          level: '3',
          description: 'At 3rd level, you choose an archetype that you strive to emulate: Hunter or Beast Master, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level.'
        },{
          title: 'Primal Awareness',
          level: '3',
          description: 'Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn’t reveal the creatures’ location or number.'
        },{
          title: 'Ability Score Increase',
          level: '4',
          description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.'
        },{
          title: 'Extra Attack',
          level: '5',
          description: 'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.'
        },{
          title: 'Land\u0027s Stride',
          level: '8',
          description: '<p>Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.</p><p>In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell.</p>'
        },{
          title: 'Hide in Plain Sight',
          level: '10',
          description: '<p>Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.</p><p>Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.</p>'
        },{
          title: 'Vanish',
          level: '14',
          description: 'Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can’t be tracked by nonmagical means, unless you choose to leave a trail.'
        },{
          title: 'Feral Senses',
          level: '18',
          description: '<p>At 18th level, you gain preternatural senses that help you fight creatures you can’t see. When you attack a creature you can’t see, your inability to see it doesn’t im pose disadvantage on your attack rolls against it.</p><p>You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn’t hidden from you and you aren’t blinded or deafened.</p>'
        },{
          title: 'Foe Slayer',
          level: '20',
          description: 'At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.'
        }],
      specializations:[{
        title: 'Hunter',
        description: 'Emulating the Hunter archetype means accepting your place as a bulwark between civilization and the terrors of the wilderness. As you walk the Hunter’s path, you learn specialized techniques for fighting the threats you face, from rampaging ogres and hordes of orcs to towering giants and terrifying dragons.',
        abilities: [{
            title: 'Hunter\u0027s Prey',
            level: '3',
            description: 'At 3rd level, you gain one of the following features of your choice.',
            options:[{
              title: 'Colossus Slayer',
              description:'Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it’s below its hit point maximum. You can deal this extra damage only once per turn.',
            },{
              title:'Giant Killer',
              description: 'When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature. ',
            },{
              title:'Horde breaker',
              description: 'Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon.',
            }]
          },{
            title: 'Defensive Tactics',
            level: '7',
            description: 'At 7th level, you gain one of the following features of your choice.',
            options:[{
              title:'Escape the Horde',
              description: 'Opportunity attacks against you are made with disadvantage.',
            },{
              title:'Multiattack Defense',
              description: 'When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn.',
            },{
              title:'Steel Will',
              description: 'You have advantage on saving throws against being frightened.',
            }]
          },{
            title: 'Multiattack',
            level: '11',
            description: 'At 11th level, you gain one of the following features of your choice.',
            options:[{
              title:'Volley',
              description: 'You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon’s range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target.',
            },{
              title:'Whirlwind Attack',
              description: 'You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target',
            }]            
          },{
            title: 'Superior Hunter\u0027 Defense',
            level: '15',
            description: 'At 15th level, you gain one of the following features of your choice.',
            options:[{
              title:'Evasion',
              description: 'You can nimbly dodge out of the way of certain area effects, such as a red dragon’s fiery breath or a lightning bolt spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.',
            },{
              title:'Stand Against the Tide',
              description: 'When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice.',
            },{
              title:'Uncanny Dodge',
              description: 'When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you.',
            }]
          }]
        },{
        title: 'Beast Master',
        description: 'The Beast Master archetype em bodies a friendship between the civilized races and the beasts of the world. United in focus, beast and ranger work as one to fight the monstrous foes that threaten civilization and the wilderness alike. Emulating the Beast Master archetype means committing yourself to this ideal, working in partnership with an animal as its companion and friend.',
        abilities: [{
            title: 'Ranger\u0027s Companion',
            level: '',
            description: '<p>At 3rd level, you gain a beast companion that accom panies you on your adventures and is trained to fight alongside you. Add your proficiency bonus to the beast’s AC, attack rolls, and damage rolls, as well as to any saving throws and skills it is proficient in. Its hit point maximum equals its normal maximum or four times your ranger level, whichever is higher.</p><p>The beast obeys your commands as best as it can. It takes its turn on your initiative, though it doesn’t take an action unless you command it to.</p><p>While traveling through your favored terrain with only the beast, you can move stealthily at a normal pace.</p><p>If the beast dies, you can obtain another one by spending 8 hours magically bonding with another beast that isn’t hostile to you, either the same type of beast as before or a different one.</p>'
          },{
            title: 'Exceptional Training',
            level: '7',
            description: 'Beginning at 7th level, on any of your turns when your beast companion doesn’t attack, you can use a bonus action to command the beast to take the Dash, Disengage, Dodge, or Help action on its turn.'
          },{
            title: 'Bestial Fury',
            level: '11',
            description: 'Starting at 11th level, your beast companion can make two attacks when you com mand it to use the Attack action'
          },{
            title: 'Share Spells',
            level: '15',
            description: 'Beginning at 15th level, when you cast a spell targeting yourself, you can also affect your beast companion with the spell if the beast is within 30 feet of you.'
          }]
        }] 
    },{
      name: 'Rogue',
      hitPoints: [{
          title: 'Hit Dice',
          description: '1d8 per rogue level'
        },{
          title: 'Hit Dice at 1st Level',
          description: '8 + your Constitution modifier'
        },{
          title: 'Hit Points at Higher Levels',
          description: '1d8 (or 5) + your Constitution modifier per rogue level after 1st'
        }],
      proficiencies:[{
          title: 'Armor',
          description: 'light armor'
        },{
          title: 'Weapons',
          description: 'simple weapons, hand crossbows, longswords, rapiers, shortswords'
        },{
          title: 'Tools',
          description: 'Thieves\u0027 Tools'
        },{
          title: 'Saving Throws',
          description: 'Dexterity. Intelligence'
        },{
          title: 'Skills',
          description: 'Choose four from Acrobatics, Athletics, Deception. Insight, Intimidation, Investigation, Perception, Performance. Persuasion, Sleight of Hand, and Stealth.'
        }],
      abilities: [{
          title: 'Expertise',
          level: '1',
          description: '<p>At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.</p><p>At 6th level, you can choose two more of your proficiencies (in skills or with thieves’ tools) to gain this benefit.</p>'
        },{
          title: 'Sneak Attack',
          level: '1',
          description: '<p>Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.</p><p>You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.</p><p>The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.</p>'
        },{
          title: 'Thieves\u0027 Cant',
          level: '1',
          description: '<p>During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.</p><p>In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.</p>'
        },{
          title: 'Cunning Action',
          level: '2',
          description: 'Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.'
        },{
          title: 'Roguish Archetype',
          level: '3',
          description: 'At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities: Thief, Assassin, or Arcane Trickster, all detailed at the end of the class description. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level.'
        },{
          title: 'Ability Score Improvement',
          level: '4',
          description: 'When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.'
        },{
          title: 'Uncanny Dodge',
          level: '5',
          description: 'Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you.'
        },{
          title: 'Evasion',
          level: '7',
          description: 'Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon’s fiery breath or an ice storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.'
        },{
          title: 'Reliable Talent',
          level: '11',
          description: 'By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.'
        },{
          title: 'Blindsense',
          level: '14',
          description: 'Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.'
        },{
          title: 'Slippery Mind',
          level: '15',
          description: 'By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws.'
        },{
          title: 'Elusive',
          level: '18',
          description: 'Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren’t incapacitated.'
        },{
          title: 'Stroke of Luck',
          level: '20',
          description: '<p>At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.</p><p>Once you use this feature, you can’t use it again until you finish a short or long rest.</p>'
        }],
      specializations:[{
        title: 'Thief',
        description: 'You hone your skills in the larcenous arts. Burglars, bandits, cutpurses, and other criminals typically follow this archetype, but so do rogues who prefer to think of themselves as professional treasure seekers, explorers, delvers, and investigators. In addition to improving your agility and stealth, you learn skills useful for delving into ancient ruins, reading unfamiliar languages, and using magic items you normally couldn’t employ.',
        abilities: [{
            title: 'Fast Hands',
            level: '3',
            description: 'Starting at 3rd level, you can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves’ tools to disarm a trap or open a lock, or take the Use an Object action.'
          },{
            title: 'Second-Story Work',
            level: '3',
            description: '<p>When you choose this archetype at 3rd level, you gain the ability to climb faster than normal; climbing no longer costs you extra movement.</p><p>In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier.</p>'
          },{
            title: 'Supreme Sneak',
            level: '3',
            description: 'Starting at 9th level, you have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn.'
          },{
            title: 'Use Magic Device',
            level: '13',
            description: 'By 13th level, you have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items.'
          },{
            title: 'Thief\u0027s Reflexes',
            level: '17',
            description: 'When you reach 17th level, you have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your'
          }]
        },{
        title: 'Assassin',
        description: 'You focus your training on the grim art of death. Those who adhere to this archetype are diverse: hired killers, spies, bounty hunters, and even specially anointed priests trained to exterminate the enemies of their deity. Stealth, poison, and disguise help you eliminate your foes with deadly efficiency.',
        abilities: [{
            title: 'Bonus Proficiencies',
            level: '3',
            description: 'When you choose this archetype at 3rd level, you gain proficiency with the disguise kit and the poisoner’s kit.'
          },{
            title: 'Assassinate',
            level: '3',
            description: 'Starting at 3rd level, you are at your deadliest when you get the drop on your enemies. You have advantage on attack rolls against any creature that hasn’t taken a turn in the combat yet. In addition, any hit you score against a creature that is surprised is a critical hit.'
          },{
            title: 'Infiltration Expertise',
            level: '9',
            description: '<p>Starting at 9th level, you can unfailingly create false identities for yourself. You must spend seven days and 25 gp to establish the history, profession, and affiliations for an identity. You can’t establish an identity that belongs to someone else. For example, you might acquire appropriate clothing, letters of introduction, and official- looking certification to establish yourself as a member of a trading house from a remote city so you can insinuate yourself into the company of other wealthy merchants.</p><p>Thereafter, if you adopt the new identity as a disguise, other creatures believe you to be that person until given an obvious reason not to.</p>'
          },{
            title: 'Imposter',
            level: '13',
            description: '<p>At 13th level, you gain the ability to unerringly mimic another person’s speech, writing, and behavior. You must spend at least three hours studying these three components of the person’s behavior, listening to speech, examining handwriting, and observing mannerisms.</p><p>Your ruse is indiscernible to the casual observer. If a wary creature suspects something is amiss, you have advantage on any Charisma (Deception) check you make to avoid detection.</p>'
          },{
            title: 'Death Strike',
            level: '17',
            description: 'Starting at 17th level, you become a master of instant death. When you attack and hit a creature that is surprised, it must make a Constitution saving throw (DC 8 + your Dexterity modifier + your proficiency bonus). On a failed save, double the damage of your attack against the creature.'
          }]
        },{
        title: 'Arcane Trickster',
        description: 'Some rogues enhance their fine-honed skills of stealth and agility with magic, learning tricks of enchantment and illusion. These rogues include pickpockets and burglars, but also pranksters, mischie',
        abilities: [{
            title: 'Mage Hand Legerdemain',
            level: '3',
            description: '<p>Starting at 3rd level, when you cast mage hand, you can make the spectral hand invisible, and you can perform the following additional tasks with it:</p><ul><li>You can stow one object the hand is holding in a container worn or carried by another creature.</li><li>You can retrieve an object in a container worn or carried by another creature.</li><li>You can use thieves’ tools to pick locks and disarm traps at range.</li></ul><p>You can perform one of these tasks without being noticed by a creature if you succeed on a Dexterity (Sleight of Hand) check contested by the creature’s Wisdom (Perception) check.</p><p>In addition, you can use the bonus action granted by your Cunning Action to control the hand.</p>'
          },{
            title: 'Magical Ambush',
            level: '9',
            description: 'Starting at 9th level, if you are hidden from a creature when you cast a spell on it, the creature has disadvantage on any saving throw it makes against the spell this turn.'
          },{
            title: 'Versatile Trickster',
            level: '13',
            description: 'At 13th level, you gain the ability to distract targets with your mage hand. As a bonus action on your turn, you can designate a creature within 5 feet of the spectral hand created by the spell. Doing so gives you advantage on attack rolls against that creature until the end of the turn.'
          },{
            title: 'Spell Thief',
            level: '',
            description: '<p>At 17th level, you gain the ability to magically steal the knowledge of how to cast a spell from another spellcaster.</p><p>Immediately after a creature casts a spell that targets you or includes you in its area of effect, you can use your reaction to force the creature to make a saving throw with its spellcasting ability modifier. The DC equals your spell save DC. On a failed save, you negate the spell’s effect against you, and you steal the knowledge of the spell if it is at least 1st level and of a level you can cast (it doesn’t need to be a wizard spell). For the next 8 hours, you know the spell and can cast it using your spell slots. The creature can’t cast that spell until the 8 hours have passed.</p><p>Once you use this feature, you can’t use it again until you finish a long rest.</p>'
          }]
        }]
    },{
      name: 'Sorcerer',
      hitPoints: [{
          title: 'Hit Dice',
          description: '1d6 per sorcerer level '
        },{
          title: 'Hit Dice at 1st Level',
          description: '6 + your Constitution modifier'
        },{
          title: 'Hit Points at Higher Levels',
          description: '1d6 (or 4) + your Constitution modifier per sorcerer level after 1st'
        }],
      proficiencies:[{
          title: 'Armor',
          description: ''
        },{
          title: 'Weapons',
          description: 'Daggers, darts, slings, quarterstaffs, light crossbows'
        },{
          title: 'Tools',
          description: ''
        },{
          title: 'Saving Throws',
          description: 'Constitution, Charisma'
        },{
          title: 'Skills',
          description: 'Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion'
        }],
      abilities: [{
          title: 'Sorcerous Origin',
          level: '1',
          description: '<p>Choose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline or Wild Magic, both detailed at the end of the class description.</p><p>Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.</p>'
        },{
          title: 'Font of Magic',
          level: '2',
          description: 'At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.'
        },{
          title: 'Metamagic',
          level: '3',
          description: '<p>At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.</p><p>You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.</p>',
          options: [{
            title:'Careful Spell',
            description:'When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell’s full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell.'
          },{
            title:'Distant Spell',
            description:'<p>When you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell.</p><p>When you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet.</p>'
          },{
            title:'Empowered Spell',
            description:'<p>When you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls.</p><p>You can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell.</p>'
          },{
            title:'Extend Spell',
            description:'When you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours.'
          },{
            title:'Heightened Spell',
            description:'When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell.'
          },{
            title:'Quickened Spell',
            description:'When you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting.'
          },{
            title:'Subtle Spell',
            description:'When you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components.'
          },{
            title:'Twinned Spell',
            description:'When you cast a spell that targets only one creature and doesn’t have a range of self, you can spend a number of sorcery points equal to the spell’s level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip).'
          }]
        },{
          title: 'Ability Score Improvement',
          level: '4',
          description: 'W hen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature'
        },{
          title: 'Sorcerous Restoration',
          level: '20',
          description: 'At 20th level, you regain 4 expended sorcery points whenever you finish a short rest.'
        }],
      specializations:[{
        title: 'Draconic Bloodline',
        description: 'Your innate magic com es from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance.',
        abilities: [{
            title: 'Dragon Ancestor',
            level: '',
            description: '<p>At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.</p><p>You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.</p>',
            options: [{
              title:'Black',
              description:'Acid'
            },{
              title:'Blue',
              description:'Lightning'
            },{
              title:'Brass',
              description:'Fire'
            },{
              title:'Bronze',
              description:'Lightning'
            },{
              title:'Copper',
              description:'Acid'
            },{
              title:'Gold',
              description:'Fire'
            },{
              title:'Green',
              description:'Poison'
            },{
              title:'Red',
              description:'Fire'
            },{
              title:'Silver',
              description:'Cold'
            },{
              title:'White',
              description:'Cold'
            }]
          },{
            title: 'Draconic Resilience',
            level: '1',
            description: '<p>As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class.</p><p>Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren’t wearing armor, your AC equals 13 + your Dexterity modifier.</p>'
          },{
            title: 'Elemental Affinity',
            level: '6',
            description: 'Starting at 6th level, when you cast a spell that deals damage of the type associated with your draconic ancestry, add your Charisma modifier to that damage. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour.'
          },{
            title: 'Dragon Wings',
            level: '14',
            description: '<p>At 14th level, you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn.</p><p>You can’t manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them.</p>'
          },{
            title: 'Draconic Presence',
            level: '18',
            description: 'Beginning at 18th level, you can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or frightened. As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feet. For 1 minute or until you lose your concentration (as if you were casting a concentration spell), each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be charmed (if you chose awe) or frightened (if you chose fear) until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours.'
          }]
        },{
        title: 'Wild Magic',
        description: 'Your innate magic com es from the wild forces of chaos that underlie the order of creation. You might have endured exposure to some form of raw magic, perhaps through a planar portal leading to Limbo, the Elemental Planes, or the mysterious Far Realm. Perhaps you were blessed by a powerful fey creature or marked by a demon. Or your magic could be a fluke of your birth, with no apparent cause or reason. However it came to be, this chaotic magic churns within you, waiting for any outlet.',
        abilities: [{
            title: 'Wild Magic Surge',
            level: '1',
            description: 'Starting when you choose this origin at 1st level, your spellcasting can unleash surges of untamed magic. Immediately after you cast a sorcerer spell of 1st level or higher, the DM can have you roll a d20. If you roll a 1, roll on the Wild Magic Surge table (Players Handbook, p104) to create a random magical effect.'
          },{
            title: 'Tides of Chaos',
            level: '1',
            description: '<p>Starting at 1st level, you can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw. Once you do so, you must finish a long rest before you can use this feature again.</p><p>Any time before you regain the use of this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature.</p>'
          },{
            title: 'Bend Luck',
            level: '6',
            description: 'Starting at 6th level, you have the ability to twist fate using your wild magic. When another creature you can see makes an attack roll, an ability check, or a saving throw, you can use your reaction and spend 2 sorcery points to roll 1d4 and apply the number rolled as a bonus or penalty (your choice) to the creature’s roll. You can do so after the creature rolls but before any effects of the roll occur.'
          },{
            title: 'Controlled Chaos',
            level: '14',
            description: 'At 14th level, you gain a modicum of control over the surges of your wild magic. Whenever you roll on the Wild Magic Surge table, you can roll twice and use either number.'
          },{
            title: 'Spell Bombardment',
            level: '18',
            description: 'Beginning at 18th level, the harmful energy of your spells intensifies. When you roll damage for a spell and roll the highest number possible on any of the dice, choose one of those dice, roll it again and add that roll to the damage. You can use the feature only once per turn.'
          }]
        }] 
    },{
      name: 'Warlock',
      hitPoints: [{
          title: 'Hit Dice',
          description: '1d8 per warlock level'
        },{
          title: 'Hit Dice at 1st Level',
          description: '8 + your Constitution modifier'
        },{
          title: 'Hit Points at Higher Levels',
          description: '1d8 (or 5) + y our Constitution modifier per warlock level after 1st'
        }],
      proficiencies:[{
          title: 'Armor',
          description: 'light armor'
        },{
          title: 'Weapons',
          description: 'Simple weapons'
        },{
          title: 'Tools',
          description: ''
        },{
          title: 'Saving Throws',
          description: 'Wisdom, Charisma'
        },{
          title: 'Skills',
          description: 'Choose two skills from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion'
        }],
      abilities: [{
          title: 'Otherworldly Patron',
          level: '1',
          description: 'At 1st level, you have struck a bargain with an otherworldly being of your choice: the Archfey, the Fiend, or the Great Old One, each of which is detailed at the end of the class description. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.'
        },{
          title: 'Eldritch Invocations',
          level: '2',
          description: '<p>In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.</p><p>At 2nd level, you gain two eldritch invocations of your choice. You learn additional invocations at levels 5, 7, 9, 12, 15, and 18.</p><p>Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level.</p>',
          options: [{
            title:'Agonizing Blast',
            level: '2',
            description:'When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit.'
          },{
            title:'Armor of Shadows',
            level: '2',
            description:'You can cast mage armor on yourself at will, without expending a spell slot or material components.'
          },{
            title:'Ascendant Step',
            level: '9',
            description:'You can cast levitate on yourself at will, without expending a spell slot or material components.'
          },{
            title:'Beast Speech',
            level: '2',
            description:'You can cast speak with animals at will, without expending a spell slot.'
          },{
            title:'Beguiling Influence',
            level: '7',
            description:'You gain proficiency in the Deception and Persuasion skills.'
          },{
            title:'Bewitching Whispers',
            level:'7',
            description:'You can cast compulsion once using a warlock spell slot. You can’t do so again until you finish a long rest.'
          },{
            title:'Book of Ancient Secrets',
            level:'',
            description:'<p>You can now inscribe magical rituals in your Book of Shadows. Choose two 1st-level spells that have the ritual tag from any class’s spell list. The spells appear in the book and don’t count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can’t cast the spells except as rituals, unless you’ve learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag.</p><p>On your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell’s level is equal to or less than half your warlock level (rounded up) and if you can spare the time to transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it.</p>'
          },{
            title:'Chains of Carceri',
            level:'15',
            description:'You can cast hold monster at will—targeting a celestial, fiend, or elemental—without expending a spell slot or material components. You must finish a long rest before you can use this invocation on the same creature again.'
          },{
            title:'Devil\u0027s Sight',
            level:'2',
            description:'You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.'
          },{
            title:'Dreadful Words',
            level:'7',
            description:'You can cast confusion once using a warlock spell slot. You can’t do so again until you finish a long rest.'
          },{
            title:'Eldritch Sight',
            level:'2',
            description:'You can cast detect magic at will, without expending a spell slot.'
          },{
            title:'Eldritch Spear',
            level:'2',
            description:'When you cast eldritch blast, its range is 300 feet.'
          },{
            title:'Eyes of the rune Keeper',
            level:'2',
            description:'You can read all writing.'
          },{
            title:'Fiendish Vigor',
            level:'2',
            description:'You can cast false life on yourself at will as a 1st-level spell, without expending a spell slot or material components.'
          },{
            title:'Gaze of Two Minds',
            level:'2',
            description:'You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature’s senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings.'
          },{
            title:'Lifedrinker',
            level:'12',
            description:'When you hit a creature with your pact weapon, the creature takes extra necrotic damage equal to your Charisma modifier (minimum 1).'
          },{
            title:'Mask of Many Faces',
            level:'2',
            description:'You can cast disguise self at will, without expending a spell slot.'
          },{
            title:'Master of Myriad Forms',
            level:'15',
            description:'You can cast alter self at will, without expending a spell slot.'
          },{
            title:'Minions of Chaos',
            level:'9',
            description:'You can cast conjure elemental once using a warlock spell slot. You can’t do so again until you finish a long rest.'
          },{
            title:'Mire the Mind',
            level:'5',
            description:'You can cast slow once using a warlock spell slot. You can’t do so again until you finish a long rest.'
          },{
            title:'Misty Visions',
            level:'2',
            description:'You can cast silent image at will, without expending a spell slot or material components.'
          },{
            title:'One with Shadows',
            level:'5',
            description:'When you are in an area of dim light or darkness, you can use your action to become invisible until you move or take an action or a reaction.'
          },{
            title:'Otherworldly Leap',
            level:'9',
            description:'You can cast jump on yourself at will, without expending a spell slot or material components.'
          },{
            title:'Repelling Blast',
            level:'2',
            description:'When you hit a creature with eldritch blast, you can push the creature up to 10 feet away from you in a straight line.'
          },{
            title:'Sculptor of Flesh',
            level:'7',
            description:'You can cast polymorph once using a warlock spell slot. You can’t do so again until you finish a long rest.'
          },{
            title:'Sign of Ill Omen',
            level:'5',
            description:'You can cast bestow curse once using a warlock spell slot. You can’t do so again until you finish a long rest.'
          },{
            title:'Thief of Five Fates',
            level:'2',
            description:'You can cast bane once using a warlock spell slot. You can’t do so again until you finish a long rest.'
          },{
            title:'Thrilling Blade',
            level:'5',
            description:'You can attack with your pact weapon twice, instead of once, whenever you take the Attack action on your turn.'
          },{
            title:'Visions of Distant Realms',
            level:'15',
            description:'You can cast arcane eye at will, without expending a spell slot.'
          },{
            title:'Voice of the Chain Master',
            level:'2',
            description:'You can communicate telepathically with your familiar and perceive through your familiar’s senses as long as you are on the same plane of existence. Additionally, while perceiving through your familiar’s senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech.'
          },{
            title:'Whispers of the Grave',
            level:'9',
            description:'You can cast speak with dead at will, without expending a spell slot.'
          },{
            title:'Witch Sight',
            level:'15',
            description:'You can see the true form of any shapechanger or creature concealed by illusion or transmutation magic while the creature is within 30 feet of you and within line of sight.'
          }]
        },{
          title: 'Pact Boon',
          level: '3',
          description: 'At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice.',
          options: [{
            title:'Pact of the Chain',
            description:'<p>You learn the find familiar spell and can cast it as a ritual. The spell doesn’t count against your number of spells known.</p><p>When you cast the spell, you can choose one of the normal forms for your familiar or one of the following special forms: imp, pseudodragon, quasit, or sprite. Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack of its own.</p><p>Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack of its own.</p>'
          },{
            title:'Pact of the Blade',
            description:'<p>You can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it (see chapter 5 for weapon options). You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.</p><p>Your pact weapon disappears if it is more than 5 feet away from you for 1 minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die.</p><p>You can transform one magic weapon into your pact weapon by performing a special ritual while you hold the weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can’t affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks.</p>'
          },{
            title:'Pact of the Tome',
            description:'<p>Your patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class’s spell list. While the book is on your person, you can cast those cantrips at will. They don’t count against your number of cantrips known.</p><p>If you lose your Book of Shadows, you can perform a 1-hour ceremony to receive a replacement from your patron. This cerem ony can be performed during a short or long rest, and it destroys the previous book. The book turns to ash when you die.</p>'
          }]
        },{
          title: 'Ability Score Improvement',
          level: '4',
          description: 'W hen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you cant increase an ability score above 20 using this feature.'
        },{
          title: 'Mystic Arcanum',
          level: '11',
          description: '<p>At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum.</p><p>You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.</p><p>At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th-level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest.</p>'
        },{
          title: 'Eldritch Master',
          level: '20',
          description: 'At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again.'
        }],
      specializations:[{
        title: 'The Archfey',
        description: 'Your patron is a lord or lady of the fey, a creature of legend who holds secrets that were forgotten before the mortal races were born. This being’s motivations are often inscrutable, and sometim es whimsical, and might involve a striving for greater magical power or the settling of age-old grudges. Beings of this sort include the Prince of Frost; the Queen of Air and Darkness, ruler of the Gloaming Court; Titania of the Summer Court; her consort Oberon, the Green Lord; Hyrsam, the Prince of Fools; and ancient hags.',
        abilities: [{
            title: 'Expanded Spell List',
            level: '1',
            description: 'The Archfey lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.',
            table: [{
              thead: ['Spell Level', 'Spells'],
              col1: ['1st', '2nd', '3rd', '4th', '5th'],
              col2: ['faerie fire, sleep', 'calm emotions, phantasmal force', 'blink, plant growth', 'dominate beast, greater invisibility', 'dominate person, seeming']
            }]
          },{
            title: 'Fey Presence',
            level: '1',
            description: '<p>Starting at 1st level, your patron bestows upon you the ability to project the beguiling and fearsome presence of the fey. As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all charmed or frightened by you (your choice) until the end of your next turn.</p><p>Once you use this feature, you can’t use it again until you finish a short or long rest.</p>'
          },{
            title: 'Misty Escape',
            level: '6',
            description: '<p>Starting at 6th level, you can vanish in a puff of mist in response to harm. When you take damage, you can use your reaction to turn invisible and teleport up to 60 feet to an unoccupied space you can see. You remain invisible until the start of your next turn or until you attack or cast a spell.</p><p>Once you use this feature, you can\u0027t use it again until you finish a short or long rest.</p>'
          },{
            title: 'Beguilding Defenses',
            level: '10',
            description: 'Beginning at 10th level, your patron teaches you how to turn the mind-affecting magic of your enemies against them. You are immune to being charmed, and when another creature attempts to charm you, you can use your reaction to attempt to turn the charm back on that creature. The creature must succeed on a Wisdom saving throw against your warlock spell save DC or be charmed by you for 1 minute or until the creature takes any damage.'
          },{
            title: 'Dark Delirium',
            level: '14',
            description: '<p>Starting at 14th level, you can plunge a creature into an illusory realm. As an action, choose a creature that you can see within 60 feet of you. It must make a Wisdom saving throw against your warlock spell save DC. On a failed save, it is charmed or frightened by you (your choice) for 1 minute or until your concentration is broken (as if you are concentrating on a spell). This effect ends early if the creature takes any damage.</p><p>Until this illusion ends, the creature thinks it is lost in a misty realm, the appearance of which you choose. The creature can see and hear only itself, you, and the illusion.</p><p>You must finish a short or long rest before you can use this feature again.</p>'
          }]
        },{
        title: 'The Fiend',
        description: 'You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz’Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths.',
        abilities: [{
            title: 'Expanded Spell List',
            level: '1',
            description: 'The Fiend lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.'
          },{
            title: 'Dark One\u0027s Blessing',
            level: '1',
            description: 'Starting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1).'
          },{
            title: 'Dark One\u0027s Own Luck',
            level: '6',
            description: '<p>Starting at 6th level, you can call on your patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add a d 10 to your roll. You can do so after seeing the initial roll but before any of the roll’s effects occur.</p><p>Once you use this feature, you can’t use it again until you finish a short or long rest.</p>'
          },{
            title: 'Fiendish Resilience',
            level: '10',
            description: 'Starting at 10th level, you can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature. Damage from magical weapons or silver weapons ignores this resistance.'
          },{
            title: 'Hurl Through Hell',
            level: '14',
            description: '<p>Starting at 14th level, when you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes. The creature disappears and hurtles through a nightmare landscape.</p><p>At the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes 10d 10 psychic damage as it reels from its horrific experience.</p><p>Once you use this feature, you can’t use it again until you finish a long rest.</p>'
          }]
        },{
        title: 'The Great Old One',
        description: '<p>Your patron is a mysterious entity whose nature is utterly foreign to the fabric of reality. It might come from the Far Realm, the space beyond reality, or it could be one of the elder gods known only in legends. Its motives are incomprehensible to mortals, and its knowledge so immense and ancient that even the greatest libraries pale in comparison to the vast secrets it holds. The Great Old One might be unaware of your existence or entirely indifferent to you, but the secrets you have learned allow you to draw your magic from it.</p><p>Entities of this type include Ghaunadar, called That Which Lurks; Tharizdun, the Chained God; Dendar, the Night Serpent; Zargon, the Returner; Great Cthulhu; and other unfathomable beings.</p>',
        abilities: [{
            title: 'Expanded Spell List',
            level: '1',
            description: 'The Great Old One lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.'
          },{
            title: 'Awakened Mind',
            level: '1',
            description: 'Starting at 1st level, your alien knowledge gives you the ability to touch the minds of other creatures. You can communicate telepathically with any creature you can see within 30 feet of you. You don’t need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language.'
          },{
            title: 'Entropic Ward',
            level: '6',
            description: '<p>At 6th level, you learn to magically ward yourself against attack and to turn an enemy’s failed strike into good luck for yourself. When a creature makes an attack roll against you, you can use your reaction to im pose disadvantage on that roll. If the attack misses you, your next attack roll against the creature has advantage if you make it before the end of your next turn.</p><p>Once you use this feature, you can’t use it again until you finish a short or long rest.</p>'
          },{
            title: 'Thought Shield',
            level: '10',
            description: 'Starting at 10th level, your thoughts can’t be read by telepathy or other means unless you allow it. You also have resistance to psychic damage, and whenever a creature deals psychic damage to you, that creature takes the same amount of damage that you do.'
          },{
            title: 'Create Thrall',
            level: '14',
            description: '<p>At 14th level, you gain the ability to infect a humanoid’s mind with the alien magic of your patron. You can use your action to touch an incapacitated humanoid. That creature is then charm ed by you until a remove curse spell is cast on it, the charmed condition is removed from it, or you use this feature again.</p><p>You can communicate telepathically with the charmed creature as long as the two of you are on the same plane of existence.</p>'
          }]
        }]
    },{
      name: 'Wizard',
      hitPoints: [{
          title: 'Hit Dice',
          description: '1d6 per wizard level'
        },{
          title: 'Hit Dice at 1st Level',
          description: '6 + your Constitution modifier'
        },{
          title: 'Hit Points at Higher Levels',
          description: '1d6 (or 4) + your Constitution modifier per wizard level after 1st'
        }],
      proficiencies:[{
          title: 'Armor',
          description: ''
        },{
          title: 'Weapons',
          description: 'daggers, darts, slings, quarterstaffs, light crossbows'
        },{
          title: 'Tools',
          description: ''
        },{
          title: 'Saving Throws',
          description: 'Intelligence, Wisdom'
        },{
          title: 'Skills',
          description: 'Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion'
        }],
      abilities: [{
          title: 'Arcane Recovery',
          level: '1',
          description: '<p>You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.</p><p>For example, if you’re a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.</p>'
        },{
          title: 'Arcane Tradition',
          level: '2',
          description: '<p>When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, or Transmutation, all detailed at the end of the class description.</p><p>Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.</p>'
        },{
          title: 'Ability Score Improvement',
          level: '4',
          description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.'
        },{
          title: 'Spell Mastery',
          level: '18',
          description: '<p>At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.</p><p>By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels.</p>'
        },{
          title: 'Signature Spells',
          level: '20',
          description: '<p>When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don’t count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can’t do so again until you finish a short or long rest.</p><p>If you want to cast either spell at a higher level, you must expend a spell slot as normal.</p>'
        }],
      specializations:[{
        title: 'School of Abjuration',
        description: '<p>The School of Abjuration emphasizes magic that blocks, banishes, or protects. Detractors of this school say that its tradition is about denial, negation rather than positive assertion. You understand, however, that ending harmful effects, protecting the weak, and banishing evil influences is anything but a philosophical void. It is a proud and respected vocation.</p><p>Called abjurers, members of this school are sought when baleful spirits require exorcism, when important locations must be guarded against magical spying, and when portals to other planes of existence must be closed.</p>',
        abilities: [{
            title: 'Abjuration Savant',
            level: '2',
            description: 'Beginning when you select this school at 2nd level, the gold and time you must spend to copy an abjuration spell into your spellbook is halved.'
          },{
            title: 'Arcane Ward',
            level: '2',
            description: '<p>Starting at 2nd level, you can weave magic around yourself for protection. When you cast an abjuration spell of 1st level or higher, you can simultaneously use a strand of the spell’s magic to create a magical ward on yourself that lasts until you finish a long rest. The ward has hit points equal to twice your wizard level + your Intelligence modifier. Whenever you take damage, the ward takes the damage instead. If this damage reduces the ward to 0 hit points, you take any remaining damage.</p><p>W hile the ward has 0 hit points, it can’t absorb damage, but its magic remains. Whenever you cast an abjuration spell of 1st level or higher, the ward regains a number of hit points equal to twice the level of the spell.</p><p>Once you create the ward, you can\u0027t create it again until you finish a long rest.</p>'
          },{
            title: 'Projected Ward',
            level: '6',
            description: 'Starting at 6th level, when a creature that you can see within 30 feet of you takes damage, you can use your reaction to cause your Arcane Ward to absorb that damage. If this damage reduces the ward to 0 hit points, the warded creature takes any remaining damage.'
          },{
            title: 'Improved Abjuration',
            level: '10',
            description: 'Beginning at 10th level, when you cast an abjuration spell that requires you to make an ability check as a part of casting that spell (as in counterspell and dispel magic), you add your proficiency bonus to that ability check.'
          },{
            title: 'Spell Restistance',
            level: '14',
            description: '<p>Starting at 14th level, you have advantage on saving throws against spells.</p><p>Furthermore, you have resistance against the damage of spells.</p>'
          }]
        },{
        title: 'School of Conjuration',
        description: 'As a conjurer, you favor spells that produce objects and creatures out of thin air. You can conjure billowing clouds of killing fog or summon creatures from elsewhere to fight on your behalf. As your mastery grows, you learn spells of transportation and can teleport yourself across vast distances, even to other planes of existence, in an instant.',
        abilities: [{
            title: 'Conjouration Savant',
            level: '2',
            description: 'Beginning when you select this school at 2nd level, the gold and time you must spend to copy a conjuration spell into your spellbook is halved.'
          },{
            title: 'Minor Conjuration',
            level: '2',
            description: '<p>Starting at 2nd level when you select this school, you can use your action to conjure up an inanimate object in your hand or on the ground in an unoccupied space that you can see within 10 feet of you. This object can be no larger than 3 feet on a side and weigh no more than 10 pounds, and its form must be that of a non-magical object that you have seen. The object is visibly magical, radiating dim light out to 5 feet.</p><p>The object disappears after 1 hour, when you use this feature again, or if it takes any damage.</p>'
          },{
            title: 'Benign Transposition',
            level: '6',
            description: '<p>Starting at 6th level, you can use your action to teleport up to 30 feet to an unoccupied space that you can see. Alternatively, you can choose a space within range that is occupied by a Small or Medium creature. If that creature is willing, you both teleport, swapping places.</p><p>Once you use this feature, you can’t use it again until you finish a long rest or you cast a conjuration spell of 1st level or higher.</p>'
          },{
            title: 'Focused Conjuration',
            level: '10',
            description: 'Beginning at 10th level, while you are concentrating on a conjuration spell, your concentration can’t be broken as a result of taking damage.'
          },{
            title: 'Durable Summons',
            level: '14',
            description: 'Starting at 14th level, any creature that you summon or create with a conjuration spell has 30 temporary hit points.'
          }]
        },{
        title: 'School of Divination',
        description: 'The counsel of a diviner is sought by royalty and commoners alike, for all seek a clearer understanding of the past, present, and future. As a diviner, you strive to part the veils of space, time, and consciousness so that you can see clearly. You work to master spells of discernment, remote viewing, supernatural knowledge, and foresight.',
        abilities: [{
            title: 'Divination Savant',
            level: '2',
            description: 'Beginning when you select this school at 2nd level, the gold and time you must spend to copy a divination spell into your spellbook is halved.'
          },{
            title: 'Portent',
            level: '2',
            description: '<p>Starting at 2nd level when you choose this school, glimpses of the future begin to press in on your awareness. When you finish a long rest, roll two d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn.</p><p>Each foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls.</p>'
          },{
            title: 'Expert Divination',
            level: '6',
            description: 'Beginning at 6th level, casting divination spells com es so easily to you that it expends only a fraction of your spellcasting efforts. When you cast a divination spell of 2nd level or higher using a spell slot, you regain one expended spell slot. The slot you regain must be of a level lower than the spell you cast and can’t be higher than 5th level.'
          },{
            title: 'The Third Eye',
            level: '10',
            description: '<p>Starting at 10th level, you can use your action to increase your powers of perception. When you do so, choose one of the following benefits, which lasts until you are incapacitated or you take a short or long rest. You can’t use the feature again until you finish a rest.</p><p><strong>Darkvision.</strong> You gain darkvision out to a range of 60 feet, as described in chapter 8.</p><p><strong>Ethereal Sight.</strong> You can see into the Ethereal Plane within 60 feet of you.</p><p><strong>Greater Comprehension.</strong> You can read any language.</p><p><strong>See Invisibility</strong> You can see invisible creatures and objects within 10 feet of you that are within line of sight.</p>'
          },{
            title: 'Greater Portent',
            level: '14',
            description: 'Starting at 14th level, the visions in your dreams intensify and paint a more accurate picture in your mind of what is to come. You roll three d20s for your Portent feature, rather than two.'
          }]
        },{
        title: 'School of Enchantment',
        description: 'As a member of the School of Enchantment, you have honed your ability to magically entrance and beguile other people and monsters. Some enchanters are peacemakers who bewitch the violent to lay down their arms and charm the cruel into showing mercy. Others are tyrants who magically bind the unwilling into their service. Most enchanters fall somewhere in between.',
        abilities: [{
            title: 'Enchantment Savant',
            level: '2',
            description: 'Beginning when you select this school at 2nd level, the gold and time you must spend to copy an enchantment spell into your spellbook is halved.'
          },{
            title: 'Hypnotic Gaze',
            level: '2',
            description: '<p>Starting at 2nd level when you choose this school, your soft words and enchanting gaze can magically enthrall another creature. As an action, choose one creature that you can see within 5 feet of you. If the target can see or hear you, it must succeed on a Wisdom saving throw against your wizard spell save DC or be charmed by you until the end of your next turn. The charmed creature’s speed drops to 0, and the creature is incapacitated and visibly dazed.</p><p>On subsequent turns, you can use your action to maintain this effect, extending its duration until the end of your next turn. However, the effect ends if you move more than 5 feet away from the creature, if the creature can neither see nor hear you, or if the creature takes damage.</p><p>Once the effect ends, or if the creature succeeds on its initial saving throw against this effect, you can’t use this feature on that creature again until you finish a long rest.</p>'
          },{
            title: 'Instinctive Charm',
            level: '6',
            description: '<p>Beginning at 6th level, when a creature you can see within 30 feet of you makes an attack roll against you, you can use your reaction to divert the attack, provided that another creature is within the attack’s range. The attacker must make a Wisdom saving throw against your wizard spell save DC. On a failed save, the attacker must target the creature that is closest to it, not including you or itself. If multiple creatures are closest, the attacker chooses which one to target. On a successful save, you can’t use this feature on the attacker again until you finish a long rest.</p><p>You must choose to use this feature before knowing whether the attack hits or misses. Creatures that can’t be charmed are immune to this effect.</p>'
          },{
            title: 'Split Enchantment',
            level: '10',
            description: 'Starting at 10th level, when you cast an enchantment spell of 1st level or higher that targets only one creature, you can have it target a second creature.'
          },{
            title: 'Alter Memories',
            level: '14',
            description: '<p>At 14th level, you gain the ability to make a creature unaware of your magical influence on it. When you cast an enchantment spell to charm one or more creatures, you can alter one creature’s understanding so that it remains unaware of being charmed.</p><p>Additionally, once before the spell expires, you can use your action to try to make the chosen creature forget some of the time it spent charmed. The creature must succeed on an Intelligence saving throw against your wizard spell save DC or lose a number of hours of its mem ories equal to 1 + your Charisma modifier (minimum 1). You can make the creature forget less time, and the amount of time can’t exceed the duration of your enchantment spell.</p>'
          }]
        },{
        title: 'School of Evocation',
        description: 'You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants.',
        abilities: [{
            title: 'Evocation Savant',
            level: '2',
            description: 'Beginning when you select this school at 2nd level, the gold and time you must spend to copy an evocation spell into your spellbook is halved.'
          },{
            title: 'Sculpt Spells',
            level: '2',
            description: 'Beginning at 2nd level, you can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell’s level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save.'
          },{
            title: 'Potent Cantrip',
            level: '6',
            description: 'Starting at 6th level, your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip’s damage (if any) but suffers no additional effect from the cantrip.'
          },{
            title: 'Empowered Evocation',
            level: '10',
            description: 'Beginning at 10th level, you can add your Intelligence modifier to the damage roll of any wizard evocation spell you cast.'
          },{
            title: 'Overchannel',
            level: '14',
            description: '<p>Starting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 5th level or lower that deals damage, you can deal maximum damage with that spell. </p><p>The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity.</p>'
          }]
        },{
        title: 'School of Illusion',
        description: 'You focus your studies on magic that dazzles the senses, befuddles the mind, and tricks even the wisest folk. Your magic is subtle, but the illusions crafted by your keen mind make the impossible seem real. Some illusionists—including many gnome wizards—are benign tricksters who use their spells to entertain. Others are more sinister masters of deception, using their illusions to frighten and fool others for their personal gain.',
        abilities: [{
            title: 'Illusion Savant',
            level: '2',
            description: 'Beginning when you select this school at 2nd level, the gold and time you must spend to copy an illusion spell into your spellbook is halved.'
          },{
            title: 'Improved Minor Illusion',
            level: '2',
            description: '<p>When you choose this school at 2nd level, you learn the minor illusion cantrip. If you already know this cantrip, you learn a different wizard cantrip of your choice. The cantrip doesn’t count against your number of cantrips known. When you cast minor illusion, you can create both a sound and an image with a single casting of the spell.</p><p>When you cast minor illusion, you can create both a sound and an image with a single casting of the spell.</p>'
          },{
            title: 'Malleable Illusions',
            level: '6',
            description: 'Starting at 6th level, when you cast an illusion spell that has a duration of 1 minute or longer, you can use your action to change the nature of that illusion (using the spell’s normal parameters for the illusion), provided that you can see the illusion.'
          },{
            title: 'Illusory Self',
            level: '10',
            description: '<p>Beginning at 10th level, you can create an illusory duplicate of yourself as an instant, almost instinctual reaction to danger. When a creature makes an attack roll against you, you can use your reaction to interpose the illusory duplicate between the attacker and yourself. The attack automatically misses you, then the illusion dissipates.</p><p>Once you use this feature, you can’t use it again until you finish a short or long rest.</p>'
          },{
            title: 'Illusory Reality',
            level: '14',
            description: '<p>By 14th level, you have learned the secret of weaving shadow magic into your illusions to give them a sem i- reality. When you cast an illusion spell of 1st level or higher, you can choose one inanimate, nonmagical object that is part of the illusion and make that object real. You can do this on your turn as a bonus action while the spell is ongoing. The object remains real for 1 minute. For example, you can create an illusion of a bridge over a chasm and then make it real long enough for your allies to cross.</p><p>The object can’t deal damage or otherwise directly harm anyone.</p>'
          }]
        },{
        title: 'School of Necromancy',
        description: '<p>The School of Necromancy explores the cosm ic forces of life, death, and undeath. As you focus your studies in this tradition, you learn to manipulate the energy that animates all living things. As you progress, you learn to sap the life force from a creature as your magic destroys its body, transforming that vital energy into magical power you can manipulate.</p><p>Most people see necromancers as menacing, or even villainous, due to the close association with death. Not all necromancers are evil, but the forces they manipulate are considered taboo by many societies.</p>',
        abilities: [{
            title: 'Necromancy Savant',
            level: '2',
            description: 'Beginning when you select this school at 2nd level, the gold and time you must spend to copy a necromancy spell into your spellbook is halved.'
          },{
            title: 'Grim Harvest',
            level: '2',
            description: 'At 2nd level, you gain the ability to reap life energy from creatures you kill with your spells. Once per turn when you kill one or more creatures with a spell of 1st level or higher, you regain hit points equal to twice the spell’s level, or three times its level if the spell belongs to the School of Necromancy. You don’t gain this benefit for killing constructs or undead.'
          },{
            title: 'Undead Thralls',
            level: '6',
            description: '<p>At 6th level, you add the animate dead spell to your spellbook if it is not there already. When you cast animate dead, you can target one additional corpse or pile of bones, creating another zombie or skeleton, as appropriate. </p><p>Whenever you create an undead using a necromancy spell, it has additional benefits:</p><ul><li>The creature’s hit point maximum is increased by an amount equal to your wizard level.</li><li>The creature adds your proficiency bonus to its weapon damage rolls.</li></ul>'
          },{
            title: 'Inured to Undeath',
            level: '10',
            description: 'Beginning at 10th level, you have resistance to necrotic damage, and your hit point maximum can\u0027t be reduced. You have spent so much time dealing with undead and the forces that animate them that you have become inured to some of their worst effects.'
          },{
            title: 'Command Undead',
            level: '14',
            description: '<p>Starting at 14th level, you can use magic to bring undead under your control, even those created by other wizards. As an action, you can choose one undead that you can see within 60 feet of you. That creature must make a Charisma saving throw against your wizard spell save DC. If it succeeds, you can’t use this feature on it again. If it fails, it becom es friendly to you and obeys your commands until you use this feature again.</p><p>Intelligent undead are harder to control in this way. If the target has an Intelligence of 8 or higher, it has advantage on the saving throw. If it fails the saving throw and has an Intelligence of 12 or higher, it can repeat the saving throw at the end of every hour until it succeeds and breaks free.</p>'
          }]
        },{
        title: 'School of Transmutation',
        description: '<p>You are a student of spells that modify energy and matter. To you, the world is not a fixed thing, but eminently mutable, and you delight in being an agent of change. You wield the raw stuff of creation and learn to alter both physical forms and mental qualities. Your magic gives you the tools to become a smith on reality’s forge.</p><p>Some transmuters are tinkerers and pranksters, turning people into toads and transforming copper into silver for fun and occasional profit. Others pursue their magical studies with deadly seriousness, seeking the power of the gods to make and destroy worlds.</p>',
        abilities: [{
            title: 'Transmutation Savant',
            level: '2',
            description: 'Beginning when you select this school at 2nd level, the gold and time you must spend to copy a transmutation spell into your spellbook is halved.'
          },{
            title: 'Minor Alchemy',
            level: '2',
            description: 'Starting at 2nd level when you select this school, you can temporarily alter the physical properties of one nonmagical object, changing it from one substance into another. You perform a special alchemical procedure on one object com posed entirely of wood, stone (but not a gemstone), iron, copper, or silver, transforming it into a different one of those materials. For each 10 minutes you spend performing the procedure, you can transform up to 1 cubic foot of material. After 1 hour, or until you lose your concentration (as if you were concentrating on a spell), the material reverts to its original substance.'
          },{
            title: 'Transmuter\u0027s Stone',
            level: '6',
            description: '<p>Starting at 6th level, you can spend 8 hours creating a transmuter’s stone that stores transmutation magic. You can benefit from the stone yourself or give it to another creature. A creature gains a benefit of your choice as long as the stone is in the creature’s possession. When you create the stone, choose the benefit from the following options:</p><ul><li>Darkvision out to a range of 60 feet, as described in chapter 8</li><li>An increase to speed of 10 feet while the creature is unencumbered</li><li>roficiency in Constitution saving throws</li><li>Resistance to acid, cold, fire, lightning, or thunder damage (your choice whenever you choose this benefit)</li></ul><p>Each time you cast a transmutation spell of 1st level or higher, you can change the effect of your stone if the stone is on your person.</p><p>If you create a new transmuter’s stone, the previous one ceases to function.</p>'
          },{
            title: 'Shapechanger',
            level: '10',
            description: '<p>At 10th level, you add the polymorph spell to your spellbook, if it is not there already. You can cast polymorph without expending a spell slot. When you do so, you can target only yourself and transform into a beast whose challenge rating is 1 or lower.</p><p>Once you cast polymorph in this way, you can’t do so again until you finish a short or long rest, though you can still cast it normally using an available spell slot.</p>'
          },{
            title: 'Master Transmuter',
            level: '14',
            description: '<p>Starting at 14th level, you can use your action to consume the reserve of transmutation magic stored within your transmuter’s stone in a single burst. When you do so, choose one of the following effects. Your transmuter’s stone is destroyed and can’t be remade until you finish a long rest.</p><p><strong>Major Transformation</strong>  You can transmute one nonmagical object—no larger than a 5-foot cube—into another nonmagical object of similar size and mass and of equal or lesser value. You must spend 10 minutes handling the object to transform it.</p><p><strong>Panacea</strong>  You remove all curses, diseases, and poisons affecting a creature that you touch with the transmuter’s stone. The creature also regains all its hit points.</p><p><strong>Restore Life</strong> You cast the raise dead spell on a creature you touch with the transmuter’s stone, without expending a spell slot or needing to have the spell in your spellbook.</p><p><strong>Restore Youth</strong> You touch the transmuter’s stone to a willing creature, and that creature’s apparent age is reduced by 3d10 years, to a minimum of 13 years. This effect doesn’t extend the creature’s lifespan.</p>'
          }]
        }]
    }];
});
  
