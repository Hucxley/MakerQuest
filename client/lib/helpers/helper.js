UI.registerHelper('isAdmin', function() {
  if (Meteor.user().profile.role === 'admin' && Meteor.user().profile.authorized) {
    return true;
  };

});
