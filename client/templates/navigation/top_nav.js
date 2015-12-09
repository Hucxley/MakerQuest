Template.topNav.helpers({
  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
  loggedIn: function() {
    if (Meteor.userId()) {
      console.log('user logged in for nav');
      return true
    }
  },
  currentUser: function() {
    return Meteor.userId();
  },
  isUserSession: function() {
    if (!Session.get('userSession')) {
      return false;
    };
  },
  isAdmin: function() {
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      return true;
    }
  },
  isInstructor: function() {
    if (!Meteor.userId()) {
      return false;
    } else if (Roles.userIsInRole(Meteor.userId(), 'rolesPending')) {
      if (Meteor.users.profile.role === 'instructor') {
        Meteor.call('assignUserRoles', Meteor.userId(), 'instructor');
      }
    } else if (Roles.userIsInRole(Meteor.userId(), 'instructor')) {
      return true;
    } else {
      return false;
    }
  },
});

Template.topNav.events({
  'click .left-nav': function(event, template) {
    event.preventDefault();
    console.log(event.target.id);
    var navSelect = event.target.id;
    Router.go('/' + navSelect);
  },
  'click .home-button': function(event, template) {
    event.preventDefault();
    Router.go('/');
  },
  'click .login-link': function(event, template) {
    event.preventDefault();
    if (!Session.get('userDetails')) {
      Router.go('/createCharacter.html')
    } else {
      Router.go('/myCharacter.html');
    }
  }

});
