Meteor.publish('archetypes', function() {
  return Archetypes.find()
});

Meteor.publish('userDetails', function(userId) {
  var currentUser = userId;
  return UserDetails.find({
    userId: currentUser
  })
});

Meteor.publish('quests', function() {
  return Quests.find();
});
