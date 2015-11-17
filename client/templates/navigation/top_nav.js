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
  }
});

Template.topNav.events({
  "click .left-nav": function(event, template) {
    event.preventDefault();

    var navSelect = event.target.innerText;
    if(navSelect === 'Create Character'){
      Router.go('/createCharacter');

    }
  }
});
