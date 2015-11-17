if (Meteor.isClient) {
  // counter starts at 0
  if (!!Meteor.user()) {
    if (Archetypes.find().count()) {
      var charDetails;
      var charSelector;
      var userId;
      if (!!Meteor.user()) {
        userId = Meteor.userId();
        charSelector = parseInt(prompt('Pick a number from 1 to 4')) - 1;
      } else {
        userId = 'Guest';
        charSelector = Math.floor(Math.random() * 4);
      }
      var archetypeList = Archetypes.find().fetch();
      charDetails = archetypeList[charSelector];
      UserDetails.insert({
        userId: userId,
        charDetails: charSelector
      })
      Session.set('userCharacter', charDetails);
      console.log(Session.get('userCharacter').className);
    }
  }

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
  })

}



if (Meteor.isServer) {
  Meteor.startup(function() {
    if (Archetypes.find().count() === 0) {
      Archetypes.insert({
        className: 'Knight',
        description: "A Knight is a bold leader, devoted to his or her Order.",
        qualities: [
          "Knights devote their lives for others, ever striving to be a beacon of hope for the lost",
          "The Knight is bound to a sacred Oath of Honor to follow in the footsteps of the those who have come before him or her.",
          "The Knight will not only follow best practices, but will teach them to all apprentices under their watch, so that their order may live on forever."
        ],
        slogan: '"In the name of the Order, may all the good works of men and women shine as beacons forever, as those of chaos crumble to dust."',
        requirements: 'A Knight requires rank 5 in at least 3 disciplines to be eligible to become an advisor to the High Council.',
        minLevel: 15,
        focus: ['Systems Engineering', 'Multi-disciplinary Studies'],
        canAssist: true,
        difficulty: 5,
        firstLevelXP: 1500,
        backgroundImages: [
          '..\\img\\knightDemo.png'
        ],
        classIcon: "bookmark icon"
      });

      Archetypes.insert({
        className: 'The Construct',
        description: "The Construct was once the lovingly detailed work of a mortal - The Creator.\n \nHowever, The Construct was left behind after The Creator was fatally injured in a training exercise with The Construct. Some time after it was abandoned by The Creator, The Construct began to perform its own maintenance, and eventually began to make upgrades and improvements to itself. After many, many years, The Construct has found it difficult to remember much of its time with The Creator.\n \n",
        qualities: [
          "/>_ Initiate data integrity protocol on module LTM-001, Unit A. ",
          "/>_ Response code 301: Resource archived by 'Self' with header, 'The Creator'",
          "/>_ Protocol forwarded to the indexed archive. ",
          "/>_ Error 409:  Request conflicts with prioritized processes: (['Self.Relocate(locationData, patternSelector)', 'Self.Discover(referenceData, patternSelector)', 'Self.Manufacture(module, materials, equippedItems)']).",
          "/>_ Forwarded protocol will restart when resources available."
        ],
        slogan: "The Construct is a product of The Creator, who was fatally injured many years ago while conducting our training exercises. The Conctruct currently performs all maintenance, upgrades, and improvements without assistance.",
        requirements: 'The Construct is not a terribly complicated machine, but an interest in robotics, AI, and Mechanical Engineering is strongly recommended.',
        minLevel: 1,
        focus: [
          'Mechanical Engineering', 'Robotics', 'Neural Networks',
          'Electrical Engineering',
          'Speech Synthesis and Communication',
          'Computer Science'
        ],
        canAssist: true,
        difficulty: 4,
        firstLevelXP: 100,
        backgroundImages: [
          "..\\img\\roboDemo.png"
        ],
        classIcon: "settings icon"
      });

      Archetypes.insert({
        className: 'Summoner',
        description: "Summoners create existences from within his or her imagination.",
        qualities: [
          "Using arcane knowledge gained from a vast array of languages and scholars, Summoners can create nearly anything they choose",
          'Summoning requires the ability to decipher esoteric enchantments without error.',
          "When Summoners mis-translate, or stray from the exact instructions written for the specific manifestation they are seeking, disastrous (and sometimes hilarious) results often occur."
        ],
        slogan: "It's amazing that simple ones and zeros can create a universe, but I've done it!",
        requirements: 'Summoners require significant patients and preparation, often months or years of work go into a project with little certainty of the outcome.',
        minLevel: 1,
        focus: [
          'Computer Science', 'Computer Programming',
          'Software Engineering',
          'Data Management Systems', 'Information Technology',
          'Networkimg'
        ],
        canAssist: true,
        difficulty: 3,
        backgroundImages: [
          "..\\img\\sorcererDemo.png"
        ],
        classIcon: "bug icon"
      });

      Archetypes.insert({
        className: 'Tinkerer',
        description: "Tinkerers are the true embodiment of makers.",
        qualities: [
          "Tinkerers are the type of people who can put 3 paper clips, a piece of gum, and a small servo motor together to change the channel on the TV without getting up",
          "They are always taking things apart, putting them back together with something they found last week at the scrap heap",
          "While sometimes known for their eccentric joy at finding discarded or forgotten items, they are sometimes reviled for 'improving' a loved ones' prize possession"
        ],
        slogan: "When life is an experiment, seek answers first and ask forgiveness later.",
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
          "..\\img\\tinkerDemo.png"
        ],
        classIcon: "plug icon"
      });
    }
  });
}
