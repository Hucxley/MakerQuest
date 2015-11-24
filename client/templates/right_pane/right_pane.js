Template.rightPane.helpers({

  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
  classIcon: function() {
    if (!!Session.get('userCharacter')) {
      return Session.get('userCharacter').characterType.classIcon;
    }
  },
  massiveClassIcon: function() {
    if (!!Session.get('userCharacter')) {
      return "massive" + Session.get('userCharacter').characterType.classIcon;
    }
  },
  className: function() {
    if (!!Session.get('userCharacter')) {
      return Session.get('userCharacter').characterType.className;
    }
  },
  classSlogan: function() {
    if (!!Session.get('userCharacter')) {
      return Session.get('userCharacter').characterType.slogan;
    }
  },
  qualities: function() {
    if (!!Session.get('userCharacter')) {
      return Session.get('userCharacter').characterType.qualities;
    }
  },
  characterName: function() {
    if (!!Session.get('userCharacter')) {
      return Session.get('userCharacter').characterName;
    }
  },
  currentXP: function() {
    if (!!Session.get('userCharacter')) {
      $('#xp-bar').progress({
        percent: Session.get('userCharacter').currentXP
      });
      //return Session.get('userCharacter').currentXP;
    }
  }
});

Template.rightPane.events({

});
