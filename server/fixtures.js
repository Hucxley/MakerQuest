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
