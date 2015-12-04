Template.adminNav.helpers({
  rendered: function() {

  },
  verfiedAdmin: function() {
    if (Roles.userIsInRole(Meteor.userId(), 'rolesPending')) {
      if (Meteor.users.profile.role === 'admin' && Meteor.users.profile.isAuthorized) {
        Meteor.call('assignUserRoles', Meteor.userId(), 'admin');
        console.log(Meteor.user)
      } else if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
        Session.set('userSession', UserList.findOne({
          userId: Meteor.userId()
        }));
        return true;
      }
    }
  },

});
