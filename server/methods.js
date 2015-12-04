Meteor.methods({
  addUserCharacter: function(charDetails) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    UserDetails.insert(charDetails);
  },
  verifyResults: function(update) {
    check(update, {
      id: String,
      accessCode: String,
      authorized: Boolean,
      reviewDate: String,
    });
    Meteor.users.update(update.id, {
      $set: {
        'profile.accessCode': update.accessCode,
        'profile.isAuthorized': update.authorized,
        'profile.reviewDate': update.reviewDate,
      },
    });
    if (!UserDetails.findOne({
        _id: update.id
      })) {
      UserDetails.insert(Meteor.users.findOne({
        _id: update.id
      }));
    }
    var currentUser = Meteor.users.findOne({
      _id: update.id
    });
    Meteor.call('assignUserRoles', currentUser);
  },
  /**
   * update a user's permissions
   *
   * @param {Object} targetUser user object to update
   * @param {Array} roles User's new permissions
   * @param {String} group Company to update permissions for
   */
  assignUserRoles: function(targetUser) {
    var targetUserId = targetUser._id;
    if (targetUser.profile.roleSelected === 'admin' && targetUser.profile
      .isAuthorized) {
      Roles.addUsersToRoles(targetUserId, 'admin', Roles.GLOBAL_GROUP);
    } else if (targetUser.profile.roleSelected === 'instructor') {
      Roles.addUsersToRoles(targetUserId, 'instructor', 'instructors');
    } else if (targetUser.profile.roleSelected === 'student') {
      Roles.addUsersToRoles(targetUserId, 'student', 'members');
    } else {
      Roles.addUsersToRoles(targetUserId, 'rolesPending',
        'guests');
    }
  },
});
