Template.topNav.helpers({
  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
});

Template.topNav.events({
  "click .left-nav": function(event, template) {
    console.log(template);
    console.log(event);
    event.preventDefault();
  }
});
