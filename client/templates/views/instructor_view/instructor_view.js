Template.instructorView.helpers({
  rendered: function() {

  },
  verifiedInstructor: function() {
    if (Roles.userIsInRole(Meteor.userId(), 'instructor')) {
      return true;
    }

  },
});
