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

Meteor.publish('itemDatabase', function(userId, options) {
  return ItemDatabase.find();
});

Meteor.publish('itemQuality', function(userId, options) {
  return ItemQuality.find();
});

Meteor.publish('pendingUsers', function(userId) {
  var currentUser = userId;
  var currentUserRole = UserDetails.find({
    userId: currentUser
  }, {
    fields: {
      roleId: 1
    }
  })
  console.log(currentUserRole);
});

Meteor.publish('itemPrefixes', function(userId) {
  var currentUser = userId;
  return ItemPrefixes.find();
});
Meteor.publish('courses', function() {
  return Courses.find();
});

Meteor.publish('itemSuffixes', function(userId) {
  var currentUser = userId;
  return ItemSuffixes.find();
});

Meteor.publish('instructorView', function(user) {
  return RoleManagement.findOne({
    verifyPrompt: user.profile.accessCode
  }, {
    fields: {
      verifyPrompt: 1
    }
  });

});

Meteor.publish('verifyTool', function(user) {
  console.log(user);
  if (!user) {
    return;
  }
  var userAccessCode = user.profile.accessCode || 'none';
  var confirmedOptions = {
    id: user._id,
    accessCode: 'verified',
    authorized: true,
    reviewDate: (new Date()).toString(),
  };
  var deniedOptions = {
    id: user._id,
    accessCode: userAccessCode,
    authorized: false,
    reviewDate: (new Date()).toString(),
  };
  console.log(userAccessCode);
  if (RoleManagement.findOne({
      verifyPrompt: userAccessCode
    })) {
    Meteor.call('verifyResults', confirmedOptions);
  } else {
    Meteor.call('verifyResults', deniedOptions);
  }


});
