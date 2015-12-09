Template.randomItemCreatorView.helpers({
  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
});

Template.randomItemCreatorView.events({
  'submit': function(event, template) {
    console.log(event);
    event.preventDefault();
    var itemsToCreate = $('input[name="random-item-creation-quantity"]').val();
    console.log(Enums.find());
    Meteor.call('createRandomItems', Meteor.user(), itemsToCreate);

  }
});
