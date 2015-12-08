Template.leftPane.helpers({
  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
  getCharImage: function() {
    var charImage = Session.get('userCharacter').characterType
      .backgroundImage;
    console.log(charImage);
    return charImage;
  },
});

Template.leftPane.events({

});
