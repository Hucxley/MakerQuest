Template.rightPane.helpers({

  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
  classIcon: function() {
    return Session.get('userCharacter').characterType.classIcon;
  },
  massiveClassIcon: function() {
    return "massive" + Session.get('userCharacter').characterType.classIcon;
  },
  className: function() {
    return Session.get('userCharacter').characterType.className;
  },
  classSlogan: function() {
    return Session.get('userCharacter').characterType.slogan;
  },
  qualities: function() {
    return Session.get('userCharacter').characterType.qualities;
  },
  characterName: function() {
    return Session.get('userCharacter').charName;
  },
  currentXP: function() {
    return Session.get('userCharacter').currentXP;
  }
});

Template.rightPane.events({

});
