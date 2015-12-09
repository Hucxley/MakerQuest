if (Archetypes.find().count() === 0) {
  Archetypes.insert({
    className: 'Knight',
    description: 'A Knight is a bold leader, devoted to his or her Order.',
    qualities: [
      'Knights devote their lives for others, ever striving to be a beacon of hope for the lost',
      'The Knight is bound to a sacred Oath of Honor to follow in the footsteps of the those who have come before him or her.',
      'The Knight will not only follow best practices, but will teach them to all apprentices under their watch, so that their order may live on forever.'
    ],
    slogan: 'In the name of the Order, may all the good works of men and women shine as beacons forever, as those of chaos crumble to dust.',
    requirements: 'A Knight requires rank 5 in at least 3 disciplines to be eligible to become an advisor to the High Council.',
    minLevel: 15,
    focus: ['Systems Engineering', 'Multi-disciplinary Studies'],
    canAssist: true,
    difficulty: 5,
    firstLevelXP: 1500,
    backgroundImage: '../img/knightDemo.png',
    classIcon: 'bookmark icon'
  });

  Archetypes.insert({
    className: 'The Construct',
    description: 'The Construct was once the lovingly detailed work of a mortal - The Creator.\n \nHowever, The Construct was left behind after The Creator was fatally injured in a training exercise with The Construct. Some time after it was abandoned by The Creator, The Construct began to perform its own maintenance, and eventually began to make upgrades and improvements to itself. After many, many years, The Construct has found it difficult to remember much of its time with The Creator.\n \n',
    qualities: [
      '/>_ Initiate data integrity protocol on module LTM-001, Unit A. ',
      '/>_ Response code 301: Resource archived by \'Self\' with header, \'The Creator\'',
      '/>_ Protocol forwarded to the indexed archive. ',
      '/>_ Error 409:  Request conflicts with prioritized processes: ([\'Self.Relocate(locationData, patternSelector)',
      'Self.Discover(referenceData, patternSelector)',
      'Self.Manufacture(module, materials, equippedItems)\']).',
      '/>_ Forwarded protocol will restart when resources available.'
    ],
    slogan: 'The Construct is a product of The Creator, who was fatally injured many years ago while conducting our training exercises. The Conctruct currently performs all maintenance, upgrades, and improvements without assistance.',
    requirements: 'The Construct is not a terribly complicated machine, but an interest in robotics, AI, and Mechanical Engineering is strongly recommended.',
    minLevel: 1,
    focus: [
      'Mechanical Engineering', 'Robotics', 'Neural Networks',
      'Electrical Engineering', 'Speech Synthesis and Communication',
      'Computer Science'
    ],
    canAssist: true,
    difficulty: 4,
    firstLevelXP: 100,
    backgroundImage: '../img/roboDemo.png',
    classIcon: 'settings icon'
  });

  Archetypes.insert({
    className: 'Summoner',
    description: 'Summoners create existences from within his or her imagination.',
    qualities: [
      'Using arcane knowledge gained from a vast array of languages and scholars, Summoners can create nearly anything they choose',
      'Summoning requires the ability to decipher esoteric enchantments without error.',
      'When Summoners mis-translate, or stray from the exact instructions written for the specific manifestation they are seeking, disastrous (and sometimes hilarious) results often occur.'
    ],
    slogan: 'It is amazing that simple ones and zeros can create a universe, but I have seen it with my own eyes!',
    requirements: 'Summoners require significant patients and preparation, often months or years of work go into a project with little certainty of the outcome.',
    minLevel: 1,
    focus: [
      'Computer Science', 'Computer Programming', 'Software Engineering',
      'Data Management Systems', 'Information Technology', 'Networkimg'
    ],
    canAssist: true,
    difficulty: 3,
    backgroundImage: '../img/sorcererDemo.png',
    classIcon: 'bug icon'
  });

  Archetypes.insert({
    className: 'Tinkerer',
    description: 'Tinkerers are the true embodiment of makers.',
    qualities: [
      'Tinkerers are the type of people who can put 3 paper clips, a piece of gum, and a small servo motor together to change the channel on the TV without getting up',
      'They are always taking things apart, putting them back together with something they found last week at the scrap heap',
      'While sometimes known for their eccentric joy at finding discarded or forgotten items, they are sometimes reviled for improving a loved ones\' prize possession.'
    ],
    slogan: 'When life is an experiment, seek answers first and ask forgiveness later.',
    requirements: 'Tinkerers should be curious, willing to sacrifice something small to make something great, creative and sometimes eccentric. They should try to be safe, but be as inquisitive as possible while doing so.',
    minLevel: 1,
    focus: [
      'Making', '3D Printing', 'Repurposing & Recycling',
      'Creative Expression',
      'Basic to Intermediate Techniques of Engineering'
    ],
    canAssist: false,
    difficulty: 3,
    backgroundImage: '../img/tinkerDemo.png',
    classIcon: 'plug icon'
  });
}

if (Quests.find().count() === 0) {
  Quests.insert({
    questTitle: 'A Lost Heirloom',
    description: [
      'The guard at the gates has lost the sword that his grandfather passed down to his father, and his father passed down to him.',
      'Help replace the sword, and the guard will surely reward your efforts.'
    ],
    questIcons: [{
      newQuestIcon: 'yellow warning icon'
    }, {
      questLogIcon: 'lightning icon'
    }, {
      completeQuestIcon: 'yellow help icon'
    }],
    requires: [{
      minLevel: 1
    }, {
      requiredGuild: ''
    }, {
      preQuests: ''
    }, {
      faction: '',
      value: 0
    }],
    rewardXP: [{
      characterType: 100
    }, {
      guild: 'Smiths',
      value: 10
    }, {
      guild: 'Knights',
      value: 15
    }, {
      badge: '3D printing',
      value: 10
    }],
    otherRewards: [{
      title: 'Friend of the Watch'
    }, {
      gp: 25
    }],
    submissionItem: 'One sword, of any design, printed at the maker bench.',
    onCompleteText: [
      'Thank you for replacing my sword.  I know it will never be the same as the family sword, but I can begin to make my own history with this one.  I will never forget your help.',
      'Here, take these for your trouble!'
    ],
    assets: '',
    references: '',
    timeToFinish: [{
      days: 0
    }, {
      hours: 1
    }, {
      minutes: 0
    }, {
      seconds: 0
    }, {
      ms: 0
    }]
  });

  Quests.insert({
    questTitle: 'Spiders in the Cellar',
    description: [
      'As you were walking in the alley behind the Inn, you heard a great deal of racket coming from within.  A woman shrieks loudly, and you rush in to find her standing on top of a table with a large pot in her hand.',
      'HELP!, she shouts to you.  There are SPIDERS in the cellar, and I can\'t get down there to get the meat for tonight\'s soup!'
    ],
    questIcons: [{
      newQuestIcon: 'yellow warning icon'
    }, {
      questLogIcon: 'lightning icon'
    }, {
      completeQuestIcon: 'yellow help icon'
    }],
    requires: [{
      minLevel: 1
    }, {
      requiredGuild: ''
    }, {
      preQuests: ''
    }, {
      faction: '',
      value: 0
    }],
    rewardXP: [{
      characterType: 100
    }, {
      guild: 'Traders',
      value: 10
    }, {
      guild: 'Knights',
      value: 15
    }, {
      badge: 'Scratch',
      value: 10
    }],
    otherRewards: [{
      title: 'The Debugger'
    }, {
      gp: 5
    }],
    submissionItem: 'Debug the scratch project so that it will compile and run.',
    onCompleteText: [
      'Thank you for replacing my sword.  I know it will never be the same as the family sword, but I can begin to make my own history with this one.  I will never forget your help.',
      'Here, take these for your trouble!'
    ],
    assets: 'TBD Scratch project TODO: find link',
    timeToFinish: [{
      days: 0
    }, {
      hours: 1
    }, {
      minutes: 0
    }, {
      seconds: 0
    }, {
      ms: 0
    }]
  });
}

if (RoleManagement.find().count() === 0) {
  RoleManagement.insert({
    verifyPrompt: '0425',
  });

  RoleManagement.insert({
    verifyPrompt: 'verified'
  });
}

if (Enums.find().count() === 0) {
  Enums.insert({
    Item_Enums: {
      quality: [{
        'ITEM_QUALITY_RANDOM': {
          enumValue: 0,
        },
        'ITEM_QUALITY_JUNK': {
          headerColor: '#f0f0f5',
          enumValue: 1,
        },
        'ITEM_QUALITY_COMMON': {
          headerColor: '#ffffff',
          enumValue: 2,
        },
        'ITEM_QUALITY_HEIRLOOM': {
          headerColor: '#1aff1a',
          enumValue: 3,
        },
        'ITEM_QUALITY_MAGIC': {
          headerColor: '#0066ff',
          enumValue: 4,
        },
        'ITEM_QUALITY_RARE': {
          headerColor: '#934dff',
          enumValue: 5,
        },
        'ITEM_QUALITY_LEGENDARY': {
          headerColor: '#ff9900',
          enumValue: 6,
        },
        'ITEM_QUALITY_UNIQUE': {
          headerColor: '#ff3333',
          enumValue: 7,
        },

        //END ITEM QUALITY ENUMS
      }],
      type: {
        'ITEM_TYPE_RANDOM': 0,
        'ITEM_TYPE_BOOK': 1,

        //END ITEM TYPE ENUMS
      },
      prefixes: [{
        'ITEM_PREFIX_1': {
          name: "Abiding",
          modifier: "+100% Armor"
        },
        'ITEM_PREFIX_2': {
          name: "Adventurer's",
          modifier: "+1 to Ranged Skills"
        },
        'ITEM_PREFIX_3': {
          name: "Advocate's",
          modifier: "+2 to Nurturing Gift, +2 to Enveloping Embrace, +2 to Feral Wrath"
        },
        'ITEM_PREFIX_4': {
          name: "Affluent",
          modifier: "+70% Gold Dropped"
        },
        'ITEM_PREFIX_5': {
          name: "Amethyst",
          modifier: "+25% Death Resistance"
        },
        'ITEM_PREFIX_6': {
          name: "Annihilating",
          modifier: "+20% Combat Magic Damage"
        },
        'ITEM_PREFIX_7': {
          name: "Aquamancer's",
          modifier: "+4 to Aquatic Affinity, +4 to Arctic Mastery, +4 to Freezing"
        },
        'ITEM_PREFIX_8': {
          name: "Arboreal",
          modifier: "+25% Nature Magic Damage"
        },
        'ITEM_PREFIX_9': {
          name: "Archer's",
          modifier: "+2 to Biting Arrow, +2 to Far Shot, +2 to Shockwave"
        },
        'ITEM_PREFIX_10': {
          name: "Arctic",
          modifier: "Adds 13 to 22 Ice Damage"
        },
        'ITEM_PREFIX_11': {
          name: "Assassin's",
          modifier: "+2 to Quick Draw, +2 to Bleed, +2 to Penetrate"
        },
        'ITEM_PREFIX_12': {
          name: "Azure",
          modifier: "+10% Ice Resistance"
        },
        'ITEM_PREFIX_13': {
          name: "Barbarian's",
          modifier: "+3 to Fortitude, +3 to Overbear, +3 to Smite"
        },
        'ITEM_PREFIX_14': {
          name: "Beastwalker's",
          modifier: "+4 to Summon Fortitude, +4 to Summon Might, +4 to Summon Bond"
        },
        'ITEM_PREFIX_15': {
          name: "Berserker's",
          modifier: "+4 to Fortitude, +4 to Overbear, +4 to Smite"
        },
        'ITEM_PREFIX_16': {
          name: "Beryl",
          modifier: "+14% Ice Resistance"
        },
        'ITEM_PREFIX_17': {
          name: "Bestial",
          modifier: "+15% Nature Magic Damage"
        },
        'ITEM_PREFIX_18': {
          name: "Blazing",
          modifier: "+2 to Devastation, +2 to Searing Flames, +2 to Ignite"
        },
        'ITEM_PREFIX_19': {
          name: "Blightwalker's",
          modifier: "+4 to Debilitation, +4 to Grim Necromancy, +4 to Vampirism"
        },
        'ITEM_PREFIX_20': {
          name: "Blinding",
          modifier: "+3 to Brilliance, +3 to Amplified Lightning, +3 to Arcing"
        },
        'ITEM_PREFIX_21': {
          name: "Blistering",
          modifier: "Adds 25 to 30 Fire Damage"
        },
        'ITEM_PREFIX_22': {
          name: "Bloodshot",
          modifier: "+22% Fire Resistance"
        },
        'ITEM_PREFIX_23': {
          name: "Blue",
          modifier: "+18% Ice Resistance"
        },
        'ITEM_PREFIX_24': {
          name: "Blundered",
          modifier: "-2 Armor"
        },
        'ITEM_PREFIX_25': {
          name: "Blurring",
          modifier: "+15% Ranged Resistance"
        },
        'ITEM_PREFIX_26': {
          name: "Boreal",
          modifier: "Adds 27 to 45 Ice Damage"
        },
        'ITEM_PREFIX_27': {
          name: "Brawler's",
          modifier: "+2 to Fortitude, +2 to Overbear, +2 to Smite"
        },
        'ITEM_PREFIX_28': {
          name: "Caliginous",
          modifier: "Adds 24 to 40 Death Damage"
        },
        'ITEM_PREFIX_29': {
          name: "Caller's",
          modifier: "+2 to Summon Fortitude, +2 to Summon Might, +2 to Summon Bond"
        },
        'ITEM_PREFIX_30': {
          name: "Callous",
          modifier: "+20% Damage (Melee)"
        },
        'ITEM_PREFIX_31': {
          name: "Carbonizing",
          modifier: "Adds 25 to 30 Fire Damage"
        },
        'ITEM_PREFIX_32': {
          name: "Cauterizing",
          modifier: "Adds 10 to 12 Fire Damage"
        },
        'ITEM_PREFIX_33': {
          name: "Cerulean",
          modifier: "+22% Ice Resistance"
        },
        'ITEM_PREFIX_34': {
          name: "Champion's",
          modifier: "+2 to Melee Skills"
        },
        'ITEM_PREFIX_35': {
          name: "Charged",
          modifier: "Adds 6 to 20 Lightning Damage"
        },
        'ITEM_PREFIX_36': {
          name: "Charmed",
          modifier: "+8% Chance to Find Magic Items"
        },
        'ITEM_PREFIX_37': {
          name: "Chilling",
          modifier: "Adds 3 to 4 Ice Damage"
        },
        'ITEM_PREFIX_38': {
          name: "Confounding",
          modifier: "+18% Ranged Resistance"
        },
        'ITEM_PREFIX_39': {
          name: "Corrupt",
          modifier: "Adds 6 to 12 Death Damage"
        },
        'ITEM_PREFIX_40': {
          name: "Cremating",
          modifier: "Adds 36 to 46 Fire Damage"
        },
        'ITEM_PREFIX_41': {
          name: "Crimson",
          modifier: "+10% Fire Resistance"
        },
        'ITEM_PREFIX_42': {
          name: "Cruel",
          modifier: "+10% Damage (Melee)"
        },
        'ITEM_PREFIX_43': {
          name: "Crystalline",
          modifier: "+22% Lightning Resistance"
        },
        'ITEM_PREFIX_44': {
          name: "Daunting",
          modifier: "+9% Melee Resistance"
        },
        'ITEM_PREFIX_45': {
          name: "Dawn",
          modifier: "+15% Magic Damage Resistance"
        },
        'ITEM_PREFIX_46': {
          name: "Dazzling",
          modifier: "Adds 12 to 32 Lightning Damage"
        },
        'ITEM_PREFIX_47': {
          name: "Demolishing",
          modifier: "+24% Combat Magic Damage"
        },
        'ITEM_PREFIX_48': {
          name: "Depraved",
          modifier: "Adds 24 to 40 Death Damage"
        },
        'ITEM_PREFIX_49': {
          name: "Desolate",
          modifier: "Adds 16 to 28 Death Damage"
        },
        'ITEM_PREFIX_50': {
          name: "Destructive",
          modifier: "+4% Combat Magic Damage"
        },
        'ITEM_PREFIX_51': {
          name: "Devastating",
          modifier: "+15% Combat Magic Damage"
        },
        'ITEM_PREFIX_52': {
          name: "Disorienting",
          modifier: "+8% Ranged resistance"
        },
        'ITEM_PREFIX_53': {
          name: "Dispiriting",
          modifier: "Adds 6 to 12 Death Damage"
        },
        'ITEM_PREFIX_54': {
          name: "Displacing",
          modifier: "+20% Ranged Resistance"
        },
        'ITEM_PREFIX_55': {
          name: "Druid's",
          modifier: "+2 to Nature Magic Skills"
        },
        'ITEM_PREFIX_56': {
          name: "Durable",
          modifier: "+22 Armor"
        },
        'ITEM_PREFIX_57': {
          name: "Duelist's",
          modifier: "+2 to Critical Strike, +2 to Dual Wield, +2 to Alacrity"
        },
        'ITEM_PREFIX_58': {
          name: "Electrified",
          modifier: "Adds 4 to 12 Lightning Damage"
        },
        'ITEM_PREFIX_59': {
          name: "Energizing",
          modifier: "+7% Power Recharge Rate"
        },
        'ITEM_PREFIX_60': {
          name: "Enforced",
          modifier: "+8 Armor"
        },
        'ITEM_PREFIX_61': {
          name: "Eradicating",
          modifier: "+8% Combat Magic Damage"
        },
        'ITEM_PREFIX_62': {
          name: "Eternal",
          modifier: "+115% Armor"
        },
        'ITEM_PREFIX_63': {
          name: "Excruciating",
          modifier: "+56% Damage (Melee)"
        },
        'ITEM_PREFIX_64': {
          name: "Fated",
          modifier: "+25% Chance to Find Magic Items"
        },
        'ITEM_PREFIX_65': {
          name: "Fearsome",
          modifier: "+14% Melee Resistance"
        },
        'ITEM_PREFIX_66': {
          name: "Feral",
          modifier: "+4% Nature Magic Damage"
        },
        'ITEM_PREFIX_67': {
          name: "Ferocious",
          modifier: "+12% Nature Magic Damage"
        },
        'ITEM_PREFIX_68': {
          name: "Fine",
          modifier: "+33% Damage (Ranged)"
        },
        'ITEM_PREFIX_69': {
          name: "Flaming",
          modifier: "Adds 16 to 20 Fire Damage"
        },
        'ITEM_PREFIX_70': {
          name: "Formidable",
          modifier: "+5% Melee resistance"
        },
        'ITEM_PREFIX_71': {
          name: "Fortified",
          modifier: "+40 Armor"
        },
        'ITEM_PREFIX_72': {
          name: "Fortunate",
          modifier: "+4% Chance to Find Magic Items"
        },
        'ITEM_PREFIX_73': {
          name: "Frigid",
          modifier: "Adds 8 to 14 Ice Damage"
        },
        'ITEM_PREFIX_74': {
          name: "Frosted",
          modifier: "Adds 3 to 4 Ice Damage"
        },
        'ITEM_PREFIX_75': {
          name: "Frozen",
          modifier: "Adds 13 to 22 Ice Damage"
        },
        'ITEM_PREFIX_76': {
          name: "Fusillier's",
          modifier: "+4 to Quick Draw, +4 to Bleed, +4 to Penetrate"
        },
        'ITEM_PREFIX_77': {
          name: "Glacial",
          modifier: "Adds 19 to 32 Ice Damage"
        },
        'ITEM_PREFIX_78': {
          name: "Glimmering",
          modifier: "Adds 2 to 5 Lightning Damage"
        },
        'ITEM_PREFIX_79': {
          name: "Glittering",
          modifier: "+5% Gold Dropped"
        },
        'ITEM_PREFIX_80': {
          name: "Glowing",
          modifier: "Adds 4 to 12 Lightning Damage"
        },
        'ITEM_PREFIX_81': {
          name: "Grim",
          modifier: "Adds 4 to 6 Death Damage"
        },
        'ITEM_PREFIX_82': {
          name: "Gruesome",
          modifier: "Adds 16 to 28 Death Damage"
        },
        'ITEM_PREFIX_83': {
          name: "Hardened",
          modifier: "+15 Armor"
        },
        'ITEM_PREFIX_84': {
          name: "Heartless",
          modifier: "+25% Damage (Melee)"
        },
        'ITEM_PREFIX_85': {
          name: "Heated",
          modifier: "Adds 3 to 3 Fire Damage"
        },
        'ITEM_PREFIX_86': {
          name: "Honed",
          modifier: "+15% Damage (Ranged)"
        },
        'ITEM_PREFIX_87': {
          name: "Hurricane's",
          modifier: "+4 to Critical Strike, +4 to Dual Wield, +4 to Alacrity"
        },
        'ITEM_PREFIX_88': {
          name: "Icy",
          modifier: "Adds 8 to 14 Ice Damage"
        },
        'ITEM_PREFIX_89': {
          name: "Igneous",
          modifier: "Adds 16 to 20 Fire Damage"
        },
        'ITEM_PREFIX_90': {
          name: "Impenetrable",
          modifier: "+52 Armor"
        },
        'ITEM_PREFIX_91': {
          name: "Imperial",
          modifier: "+7% Melee and Ranged Resistance"
        },
        'ITEM_PREFIX_92': {
          name: "Imposing",
          modifier: "7% Melee Resistance"
        },
        'ITEM_PREFIX_93': {
          name: "Incandescent",
          modifier: "Adds 24 to 70 Lightning Damage"
        },
        'ITEM_PREFIX_94': {
          name: "Incendiary",
          modifier: "+3 to Devastation, +3 to Searing Flames, +3 to Ignite"
        },
        'ITEM_PREFIX_95': {
          name: "Incinerating",
          modifier: "Adds 36 to 46 Fire Damage"
        },
        'ITEM_PREFIX_96': {
          name: "Indigo",
          modifier: "+10% Death Resistance"
        },
        'ITEM_PREFIX_97': {
          name: "Intimidating",
          modifier: "+11% Melee Resistance"
        },
        'ITEM_PREFIX_98': {
          name: "Invigorating",
          modifier: "+10% Power Recharge Rate"
        },
        'ITEM_PREFIX_99': {
          name: "Ivory",
          modifier: "+14% Lightning Resistance"
        },
        'ITEM_PREFIX_100': {
          name: "Jagged",
          modifier: "+26% Damage (Ranged)"
        },
        'ITEM_PREFIX_101': {
          name: "Jolting",
          modifier: "Adds 2 to 5 Lightning Damage"
        },
        'ITEM_PREFIX_102': {
          name: "Keen",
          modifier: "+48% Damage (Ranged)"
        },
        'ITEM_PREFIX_103': {
          name: "Knight's",
          modifier: "+2 to Barricade, +2 to Toughness, +2 to Reinforced Armor"
        },
        'ITEM_PREFIX_104': {
          name: "Lavender",
          modifier: "+14% Death Resistance"
        },
        'ITEM_PREFIX_105': {
          name: "Lucky",
          modifier: "+16% Chance to Find Magic Items"
        },
        'ITEM_PREFIX_106': {
          name: "Luminous",
          modifier: "+2 to Brilliance, +2 to Amplified Lightning, +2 to Arcing"
        },
        'ITEM_PREFIX_107': {
          name: "Marksman's",
          modifier: "+3 to Biting Arrow, +3 to Far Shot, +3 to Shockwave"
        },
        'ITEM_PREFIX_108': {
          name: "Masterwork",
          modifier: "+68 Armor"
        },
        'ITEM_PREFIX_109': {
          name: "Midnight",
          modifier: "+12% Magic Damage Resistance"
        },
        'ITEM_PREFIX_110': {
          name: "Mournful",
          modifier: "Adds 10 to 18 Death Damage"
        },
        'ITEM_PREFIX_111': {
          name: "Necromancer's",
          modifier: "+3 to Debilitation, +3 to Grim Necromancy, +3 to Vampirism"
        },
        'ITEM_PREFIX_112': {
          name: "Necromantic",
          modifier: "Adds 35 to 58 Death Damage"
        },
        'ITEM_PREFIX_113': {
          name: "Noble",
          modifier: "+3% Melee and Ranged Resistance"
        },
        'ITEM_PREFIX_114': {
          name: "Nomad's",
          modifier: "+3 to Critical Shot, +3 to Dodge, +3 to Survival"
        },
        'ITEM_PREFIX_115': {
          name: "Obliterating",
          modifier: "+28% Combat Magic Damage"
        },
        'ITEM_PREFIX_116': {
          name: "Obscuring",
          modifier: "+12% Ranged Resistance"
        },
        'ITEM_PREFIX_117': {
          name: "Opulent",
          modifier: "+40% Gold Dropped"
        },
        'ITEM_PREFIX_118': {
          name: "Overgrown",
          modifier: "+22% Nature Magic Damage"
        },
        'ITEM_PREFIX_119': {
          name: "Paladin's",
          modifier: "+4 to Barricade, +4 to Toughness, +4 to Reinforced Armor"
        },
        'ITEM_PREFIX_120': {
          name: "Pale",
          modifier: "+10% Lightning Resistance"
        },
        'ITEM_PREFIX_121': {
          name: "Pearl",
          modifier: "+25% Lightning Resistance"
        },
        'ITEM_PREFIX_122': {
          name: "Persistent",
          modifier: "+65% Armor"
        },
        'ITEM_PREFIX_123': {
          name: "Polar",
          modifier: "Adds 27 to 45 Ice Damage"
        },
        'ITEM_PREFIX_124': {
          name: "Protector's",
          modifier: "+3 to Nurturing Gift, +3 to Enveloping Embrace, +3 to Feral Wrath"
        },
        'ITEM_PREFIX_125': {
          name: "Purple",
          modifier: "+18% Death Resistance"
        },
        'ITEM_PREFIX_126': {
          name: "Pyromancer's",
          modifier: "+4 to Devastation, +4 to Searing Flames, +4 to Ignite"
        },
        'ITEM_PREFIX_127': {
          name: "Rabid",
          modifier: "+18% Nature Magic Damage"
        },
        'ITEM_PREFIX_128': {
          name: "Radiating",
          modifier: "Adds 6 to 20 Lightning Damage"
        },
        'ITEM_PREFIX_129': {
          name: "Rancorous",
          modifier: "+48% Damage (Melee)"
        },
        'ITEM_PREFIX_130': {
          name: "Ranger's",
          modifier: "+2 to Ranged Skills"
        },
        'ITEM_PREFIX_131': {
          name: "Ravager's",
          modifier: "+1 to Combat Magic Skills"
        },
        'ITEM_PREFIX_132': {
          name: "Razor",
          modifier: "+56% Damage (Ranged)"
        },
        'ITEM_PREFIX_133': {
          name: "Red",
          modifier: "+18% Fire Resistance"
        },
        'ITEM_PREFIX_134': {
          name: "Regal",
          modifier: "+5% Melee and Ranged Resistance"
        },
        'ITEM_PREFIX_135': {
          name: "Relentless",
          modifier: "+90% Armor"
        },
        'ITEM_PREFIX_136': {
          name: "Repellant",
          modifier: "+4 Armor"
        },
        'ITEM_PREFIX_137': {
          name: "Resolute",
          modifier: "+52% Armor"
        },
        'ITEM_PREFIX_138': {
          name: "Rime",
          modifier: "+2 to Aquatic Affinity, +2 to Arctic Mastery, +2 to Freezing"
        },
        'ITEM_PREFIX_139': {
          name: "Rousing",
          modifier: "+5% Power Recharge Rate"
        },
        'ITEM_PREFIX_140': {
          name: "Ruby",
          modifier: "+25% Fire Resistance"
        },
        'ITEM_PREFIX_141': {
          name: "Rugged",
          modifier: "+30 Armor"
        },
        'ITEM_PREFIX_142': {
          name: "Ruinous",
          modifier: "+12% Combat Magic Damage"
        },
        'ITEM_PREFIX_143': {
          name: "Ruthless",
          modifier: "+40% Damage (Melee)"
        },
        'ITEM_PREFIX_144': {
          name: "Sapphire",
          modifier: "+25% Ice Resistance"
        },
        'ITEM_PREFIX_145': {
          name: "Savage",
          modifier: "+8% Nature Magic Damage"
        },
        'ITEM_PREFIX_146': {
          name: "Scarlet",
          modifier: "+14% Fire Resistance"
        },
        'ITEM_PREFIX_147': {
          name: "Scorching",
          modifier: "Adds 2 to 4 Fire Damage"
        },
        'ITEM_PREFIX_148': {
          name: "Searing",
          modifier: "Adds 10 to 12 Fire Damage"
        },
        'ITEM_PREFIX_149': {
          name: "Serendipitous",
          modifier: "+35% Chance to Find Magic Items"
        },
        'ITEM_PREFIX_150': {
          name: "Serrated",
          modifier: "+40% Damage (Ranged)"
        },
        'ITEM_PREFIX_151': {
          name: "Sharp",
          modifier: "10% Damage (Ranged)"
        },
        'ITEM_PREFIX_152': {
          name: "Shining",
          modifier: "+4 to Brilliance, +4 to Amplified Lightning, +4 to Arcing"
        },
        'ITEM_PREFIX_153': {
          name: "Shivering",
          modifier: "Adds 5 to 8 Ice Damage"
        },
        'ITEM_PREFIX_154': {
          name: "Shocking",
          modifier: "Adds 12 to 32 Lightning Damage"
        },
        'ITEM_PREFIX_155': {
          name: "Slayer's",
          modifier: "+3 to Critical Strike, +3 to Dual Wield, +3 to Alacrity"
        },
        'ITEM_PREFIX_156': {
          name: "Smoking",
          modifier: "Adds 4 to 6 Fire Damage"
        },
        'ITEM_PREFIX_157': {
          name: "Sniper's",
          modifier: "+4 to Biting Arrow, +4 to Far Shot, +4 to Shockwave"
        },
        'ITEM_PREFIX_158': {
          name: "Snowy",
          modifier: "Adds 5 to 8 Ice Damage"
        },
        'ITEM_PREFIX_159': {
          name: "Somber",
          modifier: "Adds 4 to 6 Death Damage"
        },
        'ITEM_PREFIX_160': {
          name: "Sovereign",
          modifier: "+10% Melee and Ranged Resistance"
        },
        'ITEM_PREFIX_161': {
          name: "Stable",
          modifier: "+6 Armor"
        },
        'ITEM_PREFIX_162': {
          name: "Steadfast",
          modifier: "+26% Armor"
        },
        'ITEM_PREFIX_163': {
          name: "Stinging",
          modifier: "+20% Damage (Ranged)"
        },
        'ITEM_PREFIX_164': {
          name: "Storming",
          modifier: "Adds 24 to 70 Lightning Damage"
        },
        'ITEM_PREFIX_165': {
          name: "Stout",
          modifier: "+2 Armor"
        },
        'ITEM_PREFIX_166': {
          name: "Stygian",
          modifier: "Adds 35 to 58 Death Damage"
        },
        'ITEM_PREFIX_167': {
          name: "Suffused",
          modifier: "Adds 16 to 50 Lightning Damage"
        },
        'ITEM_PREFIX_168': {
          name: "Summoner's",
          modifier: "+3 to Summon Fortitude, +3 to Summon Might, +3 to Summon Bond"
        },
        'ITEM_PREFIX_169': {
          name: "Tempest's",
          modifier: "+3 to Quick Draw, +3 to Bleed, +3 to Penetrate"
        },
        'ITEM_PREFIX_170': {
          name: "Templar's",
          modifier: "+3 to Barricade, +3 to Toughness, +3 to Reinforced Armor"
        },
        'ITEM_PREFIX_171': {
          name: "Thundering",
          modifier: "Adds 16 to 50 Lightning Damage"
        },
        'ITEM_PREFIX_172': {
          name: "Tough",
          modifier: "+10 Armor"
        },
        'ITEM_PREFIX_173': {
          name: "Tragic",
          modifier: "+32% Combat Magic Damage"
        },
        'ITEM_PREFIX_174': {
          name: "Twilight",
          modifier: "+5% Magic Damage Resistance"
        },
        'ITEM_PREFIX_175': {
          name: "Unremitting",
          modifier: "+78% Armor"
        },
        'ITEM_PREFIX_176': {
          name: "Vagabond's",
          modifier: "+4 to Critical Shot, +4 to Dodge, +4 to Survival"
        },
        'ITEM_PREFIX_177': {
          name: "Vanquisher's",
          modifier: "+2 to Debilitation, +2 to Grim Necromancy, +2 to Vampirism"
        },
        'ITEM_PREFIX_178': {
          name: "Vicious",
          modifier: "+32% Damage (Melee)"
        },
        'ITEM_PREFIX_179': {
          name: "Vigilant",
          modifier: "+40% Armor"
        },
        'ITEM_PREFIX_180': {
          name: "Vile",
          modifier: "Adds 10 to 18 Death Damage"
        },
        'ITEM_PREFIX_181': {
          name: "Violet",
          modifier: "+22% Death Resistance"
        },
        'ITEM_PREFIX_182': {
          name: "Wanderer's",
          modifier: "+2 to Critical Shot, +2 to Dodge, +2 to Survival"
        },
        'ITEM_PREFIX_183': {
          name: "Warden's",
          modifier: "+4 to Nurturing Gift, +4 to Enveloping Embrace, +4 to Feral Wrath"
        },
        'ITEM_PREFIX_184': {
          name: "Warrior's",
          modifier: "+1 to Melee Skills"
        },
        'ITEM_PREFIX_185': {
          name: "Watcher's",
          modifier: "+1 to Nature Magic Skills"
        },
        'ITEM_PREFIX_186': {
          name: "Wealthy",
          modifier: "+15% Gold Dropped"
        },
        'ITEM_PREFIX_187': {
          name: "White",
          modifier: "+18% Lightning Resistance"
        },
        'ITEM_PREFIX_188': {
          name: "Wild",
          modifier: "+10% Nature Magic Damage"
        },
        'ITEM_PREFIX_189': {
          name: "Wicked",
          modifier: "+15% Damage (Melee)"
        },
        'ITEM_PREFIX_190': {
          name: "Winter",
          modifier: "+3 to Aquatic Affinity, +3 to Arctic Mastery, +3 to Freezing"
        },
        'ITEM_PREFIX_191': {
          name: "Wintery",
          modifier: "Adds 19 to 32 Ice Damage"
        },

        //END ITEM AFFIX ENUMS
      }],
      suffixes: [{
        'ITEM_SUFFIX_1': {
          name: "Accuracy",
          modifier: "+1 Max Damage (Ranged)"
        },
        'ITEM_SUFFIX_2': {
          name: "Acumen",
          modifier: "+16 Intelligence"
        },
        'ITEM_SUFFIX_3': {
          name: "Adroitness",
          modifier: "+76 Dexterity"
        },
        'ITEM_SUFFIX_4': {
          name: "Affliction",
          modifier: "+3 Min Damage (Melee)"
        },
        'ITEM_SUFFIX_5': {
          name: "Awakening",
          modifier: "+10% Mana Regeneration"
        },
        'ITEM_SUFFIX_6': {
          name: "Awareness",
          modifier: "+1 Intelligence"
        },
        'ITEM_SUFFIX_7': {
          name: "Badger",
          modifier: "+24 Health"
        },
        'ITEM_SUFFIX_8': {
          name: "Bear",
          modifier: "+188 Health"
        },
        'ITEM_SUFFIX_9': {
          name: "Blood",
          modifier: "8% Health Steal"
        },
        'ITEM_SUFFIX_10': {
          name: "Boar",
          modifier: "+67 Health"
        },
        'ITEM_SUFFIX_11': {
          name: "Boring",
          modifier: "+9 Min Damage (Ranged)"
        },
        'ITEM_SUFFIX_12': {
          name: "Brightening",
          modifier: "+4% Mana regeneration"
        },
        'ITEM_SUFFIX_13': {
          name: "Brilliance",
          modifier: "+33 Intelligence"
        },
        'ITEM_SUFFIX_14': {
          name: "Calamity",
          modifier: "+13 Min Damage (Melee)"
        },
        'ITEM_SUFFIX_15': {
          name: "Candlelight",
          modifier: "Restores 2 Mana Per Hit"
        },
        'ITEM_SUFFIX_16': {
          name: "Colossus",
          modifier: "+72 Strength"
        },
        'ITEM_SUFFIX_17': {
          name: "Consumption",
          modifier: "Restores 2 Health Per Hit"
        },
        'ITEM_SUFFIX_18': {
          name: "Daylight",
          modifier: "Restores 14 Mana Per Hit"
        },
        'ITEM_SUFFIX_19': {
          name: "Defense",
          modifier: "+20% Chance to Block Ranged Attack"
        },
        'ITEM_SUFFIX_20': {
          name: "Deflection",
          modifier: "+5% Chance to Block Ranged Attack"
        },
        'ITEM_SUFFIX_21': {
          name: "Deftness",
          modifier: "+57 Dexterity"
        },
        'ITEM_SUFFIX_22': {
          name: "Desolation",
          modifier: "+18 Min Damage (Melee)"
        },
        'ITEM_SUFFIX_23': {
          name: "Devouring",
          modifier: "Restores 23 Health Per Hit"
        },
        'ITEM_SUFFIX_24': {
          name: "Disaster",
          modifier: "+4 Min Damage (Melee)"
        },
        'ITEM_SUFFIX_25': {
          name: "Dragon",
          modifier: "+274 Mana"
        },
        'ITEM_SUFFIX_26': {
          name: "Driving",
          modifier: "+4 Min Damage (Ranged)"
        },
        'ITEM_SUFFIX_27': {
          name: "Eagle",
          modifier: "+30 Mana"
        },
        'ITEM_SUFFIX_28': {
          name: "Effortlessness",
          modifier: "+100 Dexterity"
        },
        'ITEM_SUFFIX_29': {
          name: "Enlightenment",
          modifier: "+45 Intelligence"
        },
        'ITEM_SUFFIX_30': {
          name: "Expertise",
          modifier: "+27 Dexterity"
        },
        'ITEM_SUFFIX_31': {
          name: "Falcon",
          modifier: "+59 Mana"
        },
        'ITEM_SUFFIX_32': {
          name: "Feasting",
          modifier: "Restores 14 Health Per Hit"
        },
        'ITEM_SUFFIX_33': {
          name: "Finesse",
          modifier: "+40 Dexterity"
        },
        'ITEM_SUFFIX_34': {
          name: "Focus",
          modifier: "+4 Max Damage (Ranged)"
        },
        'ITEM_SUFFIX_35': {
          name: "Force",
          modifier: "+20 Strength"
        },
        'ITEM_SUFFIX_36': {
          name: "Foresight",
          modifier: "+10 Intelligence"
        },
        'ITEM_SUFFIX_37': {
          name: "Fox",
          modifier: "+15 Health"
        },
        'ITEM_SUFFIX_38': {
          name: "Ghost",
          modifier: "5% Mana Steal"
        },
        'ITEM_SUFFIX_39': {
          name: "Gorging",
          modifier: "Restores 6 Health Per Hit"
        },
        'ITEM_SUFFIX_40': {
          name: "Grief",
          modifier: "+6 Min Damage (Melee)"
        },
        'ITEM_SUFFIX_41': {
          name: "Griffon",
          modifier: "+136 Mana"
        },
        'ITEM_SUFFIX_42': {
          name: "Hardiness",
          modifier: "+1 Strength"
        },
        'ITEM_SUFFIX_43': {
          name: "Hawk",
          modifier: "+13 Mana"
        },
        'ITEM_SUFFIX_44': {
          name: "Horse",
          modifier: "+150 Health"
        },
        'ITEM_SUFFIX_45': {
          name: "Hydra",
          modifier: "+175 Mana"
        },
        'ITEM_SUFFIX_46': {
          name: "Illumination",
          modifier: "+6% Mana Regeneration"
        },
        'ITEM_SUFFIX_47': {
          name: "Injury",
          modifier: "+25 Max Damage (Melee)"
        },
        'ITEM_SUFFIX_48': {
          name: "Insight",
          modifier: "+3 Intelligence"
        },
        'ITEM_SUFFIX_49': {
          name: "Interception",
          modifier: "+12% Chance to Block Ranged Attack"
        },
        'ITEM_SUFFIX_50': {
          name: "Judgment",
          modifier: "+6 Intelligence"
        },
        'ITEM_SUFFIX_51': {
          name: "Knowledge",
          modifier: "+24 Intelligence"
        },
        'ITEM_SUFFIX_52': {
          name: "Lion",
          modifier: "+237 Health"
        },
        'ITEM_SUFFIX_53': {
          name: "Lizard",
          modifier: "+21 Mana"
        },
        'ITEM_SUFFIX_54': {
          name: "Mastery",
          modifier: "+72 Max Damage (Ranged)"
        },
        'ITEM_SUFFIX_55': {
          name: "Mending",
          modifier: "+4% Health Regeneration"
        },
        'ITEM_SUFFIX_56': {
          name: "Might",
          modifier: "+42 Strength"
        },
        'ITEM_SUFFIX_57': {
          name: "Misery",
          modifier: "+9 Min Damage (Melee)"
        },
        'ITEM_SUFFIX_58': {
          name: "Moonlight",
          modifier: "Restore 6 Mana Per Hit"
        },
        'ITEM_SUFFIX_59': {
          name: "Mutilation",
          modifier: "+45 Max Damage (Melee)"
        },
        'ITEM_SUFFIX_60': {
          name: "Nimble",
          modifier: "+9 Dexterity"
        },
        'ITEM_SUFFIX_61': {
          name: "Obstruction",
          modifier: "+15% Chance to Block Melee Attack"
        },
        'ITEM_SUFFIX_62': {
          name: "Omniscience",
          modifier: "+60 Intelligence"
        },
        'ITEM_SUFFIX_63': {
          name: "Owl",
          modifier: "+107 Mana"
        },
        'ITEM_SUFFIX_64': {
          name: "Pain",
          modifier: "+4 Max Damage (Melee)"
        },
        'ITEM_SUFFIX_65': {
          name: "Panther",
          modifier: "+36 Health"
        },
        'ITEM_SUFFIX_66': {
          name: "Parasite",
          modifier: "3% Health Steal"
        },
        'ITEM_SUFFIX_67': {
          name: "Penetrating",
          modifier: "+18 Min Damage (Ranged)"
        },
        'ITEM_SUFFIX_68': {
          name: "Perforating",
          modifier: "+13 Min Damage (Ranged)"
        },
        'ITEM_SUFFIX_69': {
          name: "Phantom",
          modifier: "+3% Mana Steal"
        },
        'ITEM_SUFFIX_70': {
          name: "Phoenix",
          modifier: "+218 Mana"
        },
        'ITEM_SUFFIX_71': {
          name: "Piercing",
          modifier: "+3 Min Damage (Ranged)"
        },
        'ITEM_SUFFIX_72': {
          name: "Precision",
          modifier: "+25 Max Damage (Ranged)"
        },
        'ITEM_SUFFIX_73': {
          name: "Predator",
          modifier: "5% Health Steal"
        },
        'ITEM_SUFFIX_74': {
          name: "Prevention",
          modifier: "+10% Chance to Block Melee Attack"
        },
        'ITEM_SUFFIX_75': {
          name: "Proficiency",
          modifier: "+16 Dexterity"
        },
        'ITEM_SUFFIX_76': {
          name: "Prominence",
          modifier: "+56 Strength"
        },
        'ITEM_SUFFIX_77': {
          name: "Puncturing",
          modifier: "+6 Min Damage"
        },
        'ITEM_SUFFIX_78': {
          name: "Punishment",
          modifier: "20% of Physical Damage Reflected to Enemy"
        },
        'ITEM_SUFFIX_79': {
          name: "Ram",
          modifier: "+50 Health"
        },
        'ITEM_SUFFIX_80': {
          name: "Rat",
          modifier: "+4 Health"
        },
        'ITEM_SUFFIX_81': {
          name: "Raven",
          modifier: "+81 Mana"
        },
        'ITEM_SUFFIX_82': {
          name: "Reconstruction",
          modifier: "+6% Health Regeneration"
        },
        'ITEM_SUFFIX_83': {
          name: "Regeneration",
          modifier: "+12% Health Regeneration"
        },
        'ITEM_SUFFIX_84': {
          name: "Repulsion",
          modifier: "+5% Chance to Block Melee Attack"
        },
        'ITEM_SUFFIX_85': {
          name: "Retribution",
          modifier: "40% of Physical Damage Reflected to Enemy"
        },
        'ITEM_SUFFIX_86': {
          name: "Reversal",
          modifier: "10% of Physical Damage Reflected to Enemy"
        },
        'ITEM_SUFFIX_87': {
          name: "Seeking",
          modifier: "+44 Max Damage (Ranged)"
        },
        'ITEM_SUFFIX_88': {
          name: "Serpent",
          modifier: "+43 Mana"
        },
        'ITEM_SUFFIX_89': {
          name: "Sighting",
          modifier: "+11 Max Damage (Ranged)"
        },
        'ITEM_SUFFIX_90': {
          name: "Specter",
          modifier: "7% Mana Steal"
        },
        'ITEM_SUFFIX_91': {
          name: "Spry",
          modifier: "+4 Dexterity"
        },
        'ITEM_SUFFIX_92': {
          name: "Starlight",
          modifier: "Restores 23 Mana Per Hit"
        },
        'ITEM_SUFFIX_93': {
          name: "Sturdiness",
          modifier: "+3 Strength"
        },
        'ITEM_SUFFIX_94': {
          name: "Suturing",
          modifier: "+10% Health Regeneration"
        },
        'ITEM_SUFFIX_95': {
          name: "Swift",
          modifier: "+1 Dexterity"
        },
        'ITEM_SUFFIX_96': {
          name: "Tenacity",
          modifier: "+12 Strength"
        },
        'ITEM_SUFFIX_97': {
          name: "Tiger",
          modifier: "+116 Health"
        },
        'ITEM_SUFFIX_98': {
          name: "Toad",
          modifier: "+4 Mana"
        },
        'ITEM_SUFFIX_99': {
          name: "Torment",
          modifier: "+12 Max Damage (Melee)"
        },
        'ITEM_SUFFIX_100': {
          name: "Torture",
          modifier: "+72 Max Damage (Melee)"
        },
        'ITEM_SUFFIX_101': {
          name: "Vampire",
          modifier: "7% Health Steal"
        },
        'ITEM_SUFFIX_102': {
          name: "Vengeance",
          modifier: "30% of Physical Damage Reflected to Enemy"
        },
        'ITEM_SUFFIX_103': {
          name: "Vigor",
          modifier: "+7 Strength"
        },
        'ITEM_SUFFIX_104': {
          name: "Virulence",
          modifier: "+30 Strength"
        },
        'ITEM_SUFFIX_105': {
          name: "Visions",
          modifier: "+12% Mana Regeneration"
        },
        'ITEM_SUFFIX_106': {
          name: "Weasel",
          modifier: "+9 Health"
        },
        'ITEM_SUFFIX_107': {
          name: "Wolf",
          modifier: "+90 Health"
        },
        'ITEM_SUFFIX_108': {
          name: "Wounding",
          modifier: "+1 Max Damage (Melee)"
        },

        //END ITEM SUFFIX ENUMS
      }],

      //END ITEM_ENUMS
    },

  });
}
