Template.rightPane.helpers({

  create: function() {

  },
  rendered: function() {
    $('#xp-bar').progress({
      percent: UserDetails.findOne({
        userId: Meteor.userId()
      }, {
        fields: {
          currentXP: 1
        }
      })
    });

  },
  destroyed: function() {

  },
  classIcon: function() {
    var classIcon = UserDetails.findOne({
      userId: Meteor.userId()
    }).characterType.classIcon;
    return classIcon;
  },
  className: function() {
    var className = UserDetails.findOne({
      userId: Meteor.userId()
    }).characterType.className;
    return className;
  },
  classSlogan: function() {
    var slogan = UserDetails.findOne({
      userId: Meteor.userId()
    }).characterType.slogan;
    return slogan;
  },
  qualities: function() {
    var characterQualities = UserDetails.findOne({
      userId: Meteor.userId()
    }).characterType.qualities;
    return characterQualities;
  },
  characterName: function() {
    var charName = UserDetails.findOne({
      userId: Meteor.userId()
    }).characterName
    return charName;
  },
  currentXP: function() {
    $('#xp-bar').progress({
      percent: UserDetails.findOne({
        userId: Meteor.userId()
      }, {
        fields: {
          currentXP: 1
        }
      })
    });
    //return Session.get('userCharacter').currentXP;
  },
});

Template.rightPane.events({

});
