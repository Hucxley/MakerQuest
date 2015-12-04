Template.loggedInView.helpers({
  playerHasCharacter: function() {
    console.log('playerHasCharacter running');

    if (Meteor.userId()) {
      if (!UserDetails) {
        console.log('no userDetails found in loggedInView')
        return false;
      } else if (!UserDetails.findOne({
          userId: Meteor.userId()
        }, {
          fields: {
            characterName: 1
          }
        })) {
        console.log('no character found in session in loggedInView');
        return false;
      } else {
          Session.set('userCharacter', UserDetails.findOne({
          userId: Meteor.userId()
        }));
        console.log('session and character found hasCharacter true');
        return true;
      }
    }
  },
});

Template.loggedInView.events({

});
