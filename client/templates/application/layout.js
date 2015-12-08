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

    var pendingUsers = Meteor.subscribe('pendingUsers', currentUser);
    if (pendingUsers.ready()) {
      console.log('pendingUsers ready');
    }
    var roles = Meteor.subscribe('_roles');
    if (roles.ready()) {
      console.log('roles ready');
    }

    var verifyTool = Meteor.subscribe('verifyTool', Meteor.user());
    if (verifyTool.ready()) {
      console.log(RoleManagement.find().fetch);
      console.log('verifyTool ready')
    };
    /*UserDetails.findOne({
          userId: Meteor.userId()
        }, {
          fields: {
            characterName: 1
          }
        });*/
  } else {
    console.log('dumbass went to layout.html')
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
  adminNoCode: function() {
    if (Meteor.userId().profile.accessCode || Meteor.userId().profile.accessCode ===
      'none') {
      return true;
    }
  },
});



Template.layout.events({

});
