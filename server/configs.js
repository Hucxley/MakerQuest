Meteor.users.deny({
  update: function() {
    console.log('users.deny, Meteor.user():' + Meteor.user());
    return true;
  }
});
