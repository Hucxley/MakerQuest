Template.loggedInView.helpers({
  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
  hasCharacter: function() {
    //TODO: set iron-router requires loggedIn restriction to prevent bypassing login to get to character creation
    if (Meteor.userId()) {
      if (!Session.get('userCharacter')) {
        var registeredUser = UserDetails.findOne({
          id: 1
        });
        console.log('no session found in hasCharacter')
        return false;
      } else if (!Session.get('userCharacter').characterName) {
        console.log('no character found in session in hasCharacter');
        return false;
      } else {
        console.log('session and character found hasCharacter true');
        return true;
      }
    }
  }
});

Template.loggedInView.events({

});
