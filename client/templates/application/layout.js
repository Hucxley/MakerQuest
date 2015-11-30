Tracker.autorun(function() {
  if (Meteor.userId()) {
    var currentUser = Meteor.userId();
    var userDetails = Meteor.subscribe('userDetails', currentUser);
    if (userDetails.ready()) {
      console.log('userDetails ready');
    }
    var archetypes = Meteor.subscribe('archetypes');
    if (archetypes.ready()) {
      console.log('archetypes ready');
    }
    /*UserDetails.findOne({
          userId: Meteor.userId()
        }, {
          fields: {
            characterName: 1
          }
        });*/
  } else {
    Router.go('/');
  }
});

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



Template.layout.events({

});
