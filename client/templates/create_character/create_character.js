Template.createCharacter.helpers({
  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
});

Template.createCharacter.events({
  "submit": function(event, template) {
    event.preventDefault();
    // var archetypeList = Archetypes.find().fetch();
    // var userId = Meteor.userId();
    //
    // charDetails = archetypeList[charSelector];
    // UserDetails.insert({
    //   userId: userId,
    //   charDetails: charSelector
    // });
    // Session.set('userCharacter',charDetails);
    console.log(event);
    Router.go('playerWindow');

  }
});
