Meteor.methods({
  addUserCharacter: function(charDetails) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    UserDetails.insert(charDetails);
  },

});
