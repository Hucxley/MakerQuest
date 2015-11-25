Meteor.users.find({
  "status.online": true
}).observe({
  added: function(id) {
    // id just came online
    if (!!Session.get('userCharacter'))
      console.log(Session.get('userCharacter').characterName +
        " logged in.");
  },
  removed: function(id) {
    // id just went offline
    console.log('user went offline')
  }
});
