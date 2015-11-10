if (Archetypes.find().count() === 0) {
  Archetypes.insert({
    className: 'Knight',
    description: cat('..\archetype_descriptions\knight'),
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
    description: cat('..\archetype_descriptors\construct'),
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
      fileLoc: "..\img\roboDemo.png"
    ]
  });

  Archetypes.insert({
    className: 'Summoner',
    description: cat('..\archtype_descriptions\summoner'),
    requirements: 'Summoners require significant patients and preparation, often months or years of work go into a project with little certainty of the outcome.',
    minLevel: 1,
    focus: {
      'Computer Science', 'Computer Programming', 'Software Engineering',
      'Data Management Systems', 'Information Technology', 'Networks',
      'Data Storage & Management'
    },
    canAssist: true,
    difficulty: 3,
    backgroundImages: [
      "..\img\sorcererDemo.png"
    ]
  });

  Archetypes.insert({
    className: 'Tinkerer',
    description: cat('..\archetype_descriptions\tinkerer'),
    requirements: 'Tinkerers should be curious, willing to sacrifice something small to make something great, creative and sometimes eccentric. They should try to be safe, but be as inquisitive as possible while doing so.',
    minLevel: 1,
    focus: {
      'Making', '3D Printing', 'Repurposing & Recycling',
      'Creative Expression',
      'Basic to Intermediate Techniques of Engineering'
    },
    canAssist: false,
    difficulty: 3,
    backgroundImages: [
      "..\img\tinkerDemo.png"
    ]
  });


}
