Template.guestView.helpers({
  create: function() {


  },
  rendered: function() {

  },
  destroyed: function() {

  },
});

Template.guestView.events({
  'click .about-button': function(event, template) {
    event.preventDefault();
    var clickTarget = event.target.innerText;
    Router.go('/about.html')
  }
});
