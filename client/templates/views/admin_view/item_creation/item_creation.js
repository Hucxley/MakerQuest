Template.newItemView.helpers({
  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
});

Template.newItemView.events({
  'submit': function(event, template) {
    event.preventDefault();
  },
  '.random-ui-button': function(event, template) {
    event.preventDefault();
    console.log(event);
  },
  '.custom-ui-button': function(event, template) {
    event.preventDefault();
    console.log(event);
  },
});
