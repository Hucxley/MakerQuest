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
    console.log('submit');
    console.log(event);
    event.preventDefault();
  },
  '.random-item-button': function(event, template) {
    console.log('random-item-button');
    console.log(event);
    event.preventDefault();
    console.log(event);
  },
  '.custom-item-button': function(event, template) {
    console.log('.custom-item-button');
    console.log(event);
    event.preventDefault();
    console.log(event);
  },
});
