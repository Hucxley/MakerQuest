Template.userNav.helpers({
  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
  hasCharacter: function() {
    return UserDetails.findOne({
      userId: Meteor.userId()
    }, {
      fields: {
        userId: 0
      }
    });
  }
});

Template.userNav.events({

});
