Template.leftPane.helpers({
  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
  getCharImage: function() {
    if (!!Session.get('userCharacter')) {
      return Session.get('userCharacter').characterType.backgroundImages[
        0];
    }
  }
});

Template.leftPane.events({

});
