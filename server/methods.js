Meteor.methods({
  addUserCharacter: function(charDetails) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    UserDetails.insert(charDetails);
    return true;
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
      Roles.addUsersToRoles(targetUserId, 'admin');
    } else if (targetUser.profile.roleSelected === 'instructor') {
      Roles.addUsersToRoles(targetUserId, 'instructor');
    } else if (targetUser.profile.roleSelected === 'student') {
      Roles.addUsersToRoles(targetUserId, 'student');
    } else {
      Roles.addUsersToRoles(targetUserId, 'rolesPending');
    }
  },
  addItemToDatabase: function(user, params) {

  },
  createRandomItems: function(user, params) {
    var random = Math.random();
    var currentUserId = user._id;
    var ENUMS = Enums.find().fetch();
    console.log(ENUMS);
    if (Roles.userIsInRole(currentUserId, 'admin')) {
      console.log('loop count' + params);
    }
    if (Roles.userIsInRole(currentUserId, 'admin')) {
      var qualitySelector = Math.randomInt(1, (ENUMS.Item_Enums.quality.count() -
        1));
      var typeSelector = Math.randomInt(1, ENUMS.Item_Enums.type.count());
      var prefixSelector = Math.randomInt(1, ENUMS.Item_Enums.prefixes.count());
      var suffixSelector = Math.randomInt(1, ENUMS.Item_Enums.suffixes.count());
      var selectors = [{
        quality: qualitySelector
      }, {
        type: typeSelector
      }, {
        prefix: prefixSelector
      }, {
        suffix: suffixSelector
      }];
      console.log(selectors);
    }
  },
  //NEXT METHOD GOES HERE

});
