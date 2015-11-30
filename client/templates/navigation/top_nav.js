Template.topNav.helpers({
  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
  loggedIn: function() {
    if (Meteor.userId()) {
      return true
    }
  },
  currentUser: function() {
    return Meteor.user().username;
  }
});

Template.topNav.events({
  "click .left-nav": function(event, template) {
    event.preventDefault();
    console.log(event.target.id);
    var navSelect = event.target.id;
    Router.go('/' + navSelect);
  },
  "click .home-button": function(event, template) {
    event.preventDefault();
    Router.go('/');
  },
  "click .login-link": function(event, template) {
    event.preventDefault();
    if (!Session.get('userDetails')) {
      Router.go('/createCharacter.html')
    } else {
      Router.go('/myCharacter.html');
    }
  }

});
