Template.rightPane.helpers({

  create: function() {

  },
  rendered: function() {
    template.$('#xp-bar').progress({
      percent: 47
    });

  },
  destroyed: function() {

  },
  classIcon: function(){
    return Session.get('userCharacter').classIcon;
  },
  massiveClassIcon: function(){
    return "massive" +Session.get('userCharacter').classIcon;
  },
  className: function(){
    return Session.get('userCharacter').className;
  },
  classSlogan: function(){
    return Session.get('userCharacter').slogan;
  },
  qualities: function(){
    return Session.get('userCharacter').qualities;
  }
});

Template.rightPane.events({

});
