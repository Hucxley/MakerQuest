if (Meteor.isClient) {
  // counter starts at 0
  if (Archetypes.find().count()) {
    var charDetails;
    var charSelector;
    if (!!Meteor.user()) {
      charSelector = parseInt(prompt('Pick a number from 1 to 4')) - 1;
    } else {
      charSelector = Math.floor(Math.random() * 4);
      console.log(charSelector);
    }
    var archetypeList = Archetypes.find().fetch();
    console.log(archetypeList);

    charDetails = archetypeList[charSelector];
    console.log(charDetails);
  }


}




if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
}
