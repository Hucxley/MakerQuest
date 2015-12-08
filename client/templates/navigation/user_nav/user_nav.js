Template.userNav.helpers({
  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
  hasCharacter: function() {
    var currentUser = Meteor.userId();
    if (Meteor.userId()) {
      if (!UserDetails) {
        console.log('no userDetails found in loggedInView')
        return false;
      } else if (!UserDetails.findOne({
          userId: Meteor.userId()
        }, {
          field: {
            characterName: 1
          }
        })) {
        console.log('no character found in session in loggedInView');
        return false;
      } else {
        Session.set('userCharacter', UserDetails.find().fetch())
        Router.go('/user.html');
        console.log('session and character found hasCharacter true');
        return true;
      }
    }
  },
  isAdmin: function() {
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      return true;
    }
  },
  isInstructor: function() {
    if (Roles.userIsInRole(Meteor.userId(), 'instructor')) {
      return true;
    }
  }
});

Template.userNav.events({

});
