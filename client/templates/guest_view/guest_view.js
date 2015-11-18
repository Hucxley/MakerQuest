Template.guestView.helpers({
  create: function() {


  },
  rendered: function() {

  },
  destroyed: function() {

  },
});

Template.guestView.events({
  "click .about-button": function(event, template) {
    event.preventDefault();
    var clickTarget = event.target.innerText;
    Session.set('currentViewState', 'aboutView');
    console.log(clickTarget);
    Router.go('/about')
  }
});
