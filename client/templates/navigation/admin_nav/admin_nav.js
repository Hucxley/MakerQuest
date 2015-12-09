Template.adminNav.helpers({
  rendered: function() {

  },
  isAdmin: function() {
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      return true;
    }
  },

});
