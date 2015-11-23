Template.userNav.helpers({
  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
  hasCharacter: function() {
    var currentUser = Meteor.userId();
    if (currentUser) {
      if (!Session.equals('characterDetails', true)){
        console.log('no session found in hasCharacter')
        return false;
      }else if (!Session.get('userCharacter').characterName) {
        console.log('no character found in session in hasCharacter');
        return false;
      } else {
        console.log('session and character found hasCharacter true');
        return true;
      }
    }
  }
});

Template.userNav.events({

});
