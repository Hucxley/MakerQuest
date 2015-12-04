Template.playerView.helpers({
  rendered: function() {

  },
  isSession: function() {
    if (Session.get('userDetails')) {
      UserDetails.find().count();
    }
  }
});
