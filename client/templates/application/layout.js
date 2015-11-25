Template.layout.helpers({
  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },

  updateSession: function() {

  },
});

Tracker.autorun(function() {
  if (Meteor.userId()) {
    var currentUser = Meteor.userId();
    var userChar = UserDetails.findOne({
      userId: Meteor.userId()
    }, {
      fields: {
        characterName: 1
      }
    });
    if (Meteor.userId()) {
      var sanitizedDetails = UserDetails.findOne({
        userId: Meteor.userId()
      });
      if (!Session.get('userCharacter')) {
        Session.set('userCharacter', sanitizedDetails);
        Router.go('/myCharacter.html');
      }
    }
  } else {
    Session.set('userCharacter', undefined);
    Router.go('/');
  }
});

Template.layout.events({

});
