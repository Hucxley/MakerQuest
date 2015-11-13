if (Meteor.isClient) {
  // counter starts at 0
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
    Session.set('userCharacter',charDetails);
    console.log(Session.get('userCharacter').className);
  }

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
  })

}



if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
}
3
