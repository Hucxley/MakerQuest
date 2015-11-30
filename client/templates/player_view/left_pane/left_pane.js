Template.leftPane.helpers({
  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
  getCharImage: function() {
    var charImage = Session.get('userCharacter')[0].characterType
      .backgroundImage;
    console.log(charImage);
    return charImage;
    // if (!!UserDetails.find().fetch()) {
    //   return UserDetails.findOne({
    //     userId: Meteor.userId()
    //   }).backgroundImage;
    // }
  },
});

Template.leftPane.events({

});
