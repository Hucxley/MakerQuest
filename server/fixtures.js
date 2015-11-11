if (Archetypes.find().count() === 0) {
  Archetypes.insert({
    className: 'Knight',
    description: "A Knight is a bold leader, devoted to his or her Order.\n \n Knights devote their lives for others, ever striving to be a beacon of hope for the lost.The Knight is bound to a sacred Oath of Honor to follow in the footsteps of the those who have come before him or her.The Knight will not only follow best practices, but will teach them to all apprentices under their watch, so that their order may live on forever.\n \n \"In the name of the Order, may all the good works of men and women shine as beacons forever, as those that are chaotic crumble to dust.\"",
    requirements: 'A Knight requires rank 5 in at least 3 disciplines to be eligible to become an advisor to the High Council.',
    minLevel: 15,
    focus: ['Systems Engineering', 'Multi-disciplinary Studies'],
    canAssist: true,
    difficulty: 5,
    firstLevelXP: 1500,
    backgroundImages: [
      '..\img\kinghtDemo.png'
    ]
  });

  Archetypes.insert({
    className: 'The Construct',
    description: "The Construct was once the lovingly detailed work of a mortal - The Creator.\n \nHowever, The Construct was left behind after The Creator was fatally injured in a training exercise with The Construct. Some time after it was abandoned by The Creator, The Construct began to perform its own maintenance, and eventually began to make upgrades and improvements to itself. After many, many years, The Construct has found it difficult to remember much of its time with The Creator.\n \n \"Initiate data integrity protocol on module LTM-001, Unit A. /> Response code 301: Resource archived by 'Self' with header, 'The Creator'. />  Protocol forwarded to the indexed archive. /> Error 409:  Request conflicts with prioritized processes(['Self.Relocate(locationData, patternSelector)', 'Self.Discover(referenceData, patternSelector)', 'Self.Manufacture(module, materials, equippedItems)']). /> Forwarded protocol will restart when resources available. />\"",
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
    backgroundImages: [
      "..\img\roboDemo.png"
    ]
  });

  Archetypes.insert({
    className: 'Summoner',
    description: "Summoners create existences from within his or her imagination.\n \nUsing arcane knowledge gained from a vast array of languages and scholars, Summoners can create nearly anything they choose, provided, of course, that they are able to decipher the enchantments without error.\n \nWhen Summoners mis-translate, or stray from the exact instructions written for the specific manifestation they are seeking, disastrous(and sometimes hilarious) results are sure to occur.\n \n \"After all that time, work, and digging through the old libraries, it came down to that moment. It's amazing that simple ones and zeros can create a universe, but I had done it!\"",
    requirements: 'Summoners require significant patients and preparation, often months or years of work go into a project with little certainty of the outcome.',
    minLevel: 1,
    focus: [
      'Computer Science', 'Computer Programming', 'Software Engineering',
      'Data Management Systems', 'Information Technology', 'Networks',
      'Data Storage & Management'
    ],
    canAssist: true,
    difficulty: 3,
    backgroundImages: [
      "..\img\sorcererDemo.png"
    ]
  });

  Archetypes.insert({
    className: 'Tinkerer',
    description: "Tinkerers are the true embodiment of makers.\n \nTinkerers are the type of people who can put 3 paper clips, a piece of gum, and a small servo motor together to change the channel on the TV without getting up. They are always taking things apart, putting them back together again,    taking other things apart, and mixing them with something else found last week at the scrap heap.\n \nWhile sometimes known for their eccentric joy at finding discarded or forgotten items, they are sometimes reviled for 'improving' a loved ones' prize possession.\n \n \"When life is an experiment, seek answers first and ask forgiveness later.\"",
    requirements: 'Tinkerers should be curious, willing to sacrifice something small to make something great, creative and sometimes eccentric. They should try to be safe, but be as inquisitive as possible while doing so.',
    minLevel: 1,
    focus: [
      'Making', '3D Printing', 'Repurposing & Recycling',
      'Creative Expression',
      'Basic to Intermediate Techniques of Engineering'
    ],
    canAssist: false,
    difficulty: 3,
    backgroundImages: [
      "..\img\tinkerDemo.png"
    ]
  });


}
