Template.adminView.helpers({
  rendered: function() {

  },
  verfiedAdmin: function() {
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      return true;
    }

  },
});
