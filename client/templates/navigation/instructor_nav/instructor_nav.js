Template.instructorNav.helpers({
  rendered: function() {

  },
  verifiedInstructor: function() {
    if (Roles.userIsInRole(Meteor.userId(), 'rolesPending')) {
      if (Meteor.users.profile.role === 'instructor') {
        Meteor.call('assignUserRoles', Meteor.userId(), 'instructor');
        console.log(Meteor.user)
      } else if (Roles.userIsInRole(Meteor.userId(), 'instructor')) {
        Session.set('userSession', UserList.findOne({
          userId: Meteor.userId()
        }));
        return true;
      }
    }
  },

});
