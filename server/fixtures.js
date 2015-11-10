if (Archetypes.find().count() === 0) {
  Archetypes.insert({
    className: 'Knight',
    description: 'The Knight is a bold leader, devoted to his or her craft.' +
      '\n\n' +
      'A leader strives to be an example for others, ever striving to be a beacon of hope for the lost.' +
      'The Knight is bound to a sacred Oath of Honor to follow in the footsteps of the those who have come' +
      'before him or her.\n\n' +
      'The Knight will not only follow best practices, but will teach them to apprentices under their watch.',
    standards: 'The Knight requires rank 5 in at least 3 disciplines in order to before they may become advisors to the High Council.',
    minLevel: 15,
    focus: ['Systems Engineering', 'Multi-disciplinary Studies'],
    canAssist: true,
    difficultyLevel: 5,
    backgroundImages: {
      href: '..\\img\\kinghtDemo.png'
    }
  });

  Archetypes.insert({
    className: 'The Construct',
    description: 'The Construct was once the obsession of a mortal - The Creator.\\n\\n' +
      'However, The Construct was left behind after The Creator was injured in a training ' +
      'exercise with The Construct.After the Creator was gone, The Construct began to ' +
      'perform its own maintenance, and eventually began to make upgrades and improvements ' +
      'to itself.\\n\\n' +
      'After many, many years, The Construct could barely remember those times with its ' +
      'Creator. There were more important things to do than to search old memory banks. The ' +
      'Construct had places it wanted to go, things it wanted to see, improvements it wanted to make.',
    standards: 'The Construct is not a terribly complicated machine, but an interest in robotics, AI, ' +
      'and Mechanical Engineering is strongly recommended.',
    minLevel: 1,
    focus: [
      'Mechanical Engineering', 'Robotics', 'Neural Networks',
      'Electrical Engineering', 'Speech Synthesis and Communication',
      'Computer Science'
    ],
    canAssist: true,
    difficulty: 4,
    backgroundImages: {
      href: "..\\img\\roboDemo.png"
    }
  });

  Archetypes.insert({
    className: 'Summoner',
    description: "Summoners create existences from within his or her imagination. \
    n\ n
    Using arcane knowledge gained from a vast array of languages and scholars,
    Summoners can create nearly anything they choose,
    provided,
    of course,
    that they are able to decipher the encantations without error.When Summoners mis -
    translate,
    or
    stray from the instructions written
    for the specific manifestation they are seeking,
    disatrous(and sometimes hilarious) results
    are sure to occur.\n\ n
    But,
    it is an awesome sight to behold in that moment when the Summoner first lays eyes upon their newly hatched creations ",
    standards: 'Summoners require significant patients and preparation, often months or years of work go into a project with little certainty of the outcome.',
    minLevel: 1,
    focus: {
      'Computer Science', 'Computer Programming', 'Software Engineering',
      'Data Management Systems', 'Information Technology', 'Networks',
      'Data Storage & Management'
    },
    canAssist: true,
    difficulty: 3,
    backgroundImages: {
      href: "..\\img\\sorcererDemo.png"
    }
  });

  Archetypes.insert({
    className: 'Tinkerer',
    description: "Tinkerers are the true embodiment of makers. \
    n\ n
    Tinkerers are the type of people who can put 3 paper clips,
    a piece of gum,
    and a small servo engine together to change the channels on the TV without
    getting up.Tinkerers are always taking things apart,
    putting them back together again,
    taking other things apart,
    and mixing them with something
    else
      that was found last week at the scrap heap.Tinkerers are as known
    for their subtle madness as they are
    for their great potential
    for desctruction.\n\ n
    When all of life is an experiment,
    Tinkerers have a tendency to seek answers first and ask forgiveness later
    .
    ",
    standards: 'Tinkerers should be curious, willing to sacrifice something small to make something great, creative and sometimes eccentric. They should try to be safe,
    but be as inquisitive as possible
    while doing so.
    ',
    minLevel: 1,
    focus: {
      'Making', '3D Printing', 'Repurposing & Recycling',
      'Creative Expression',
      'Basic to Intermediate Techniques of Engineering'
    },
    canAssist: false,
    difficulty: 3,
    backgroundImages: {
      href: "..\\img\\tinkerDemo.png"
    }
  });


}
