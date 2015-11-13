Template.topNav.helpers({
  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
  loggedIn: function(){
    if(Meteor.userId()){
      return true
    }
  }
});

Template.topNav.events({
  "click .left-nav": function(event, template) {
    event.preventDefault();
    var navSelect = event.target.innerText;
    if(navSelect === 'Create Character'){
      userId = Meteor.userId();
      charSelector = parseInt(prompt('Pick a number from 1 to 4')) - 1;
    }
    var archetypeList = Archetypes.find().fetch();
    charDetails = archetypeList[charSelector];
    UserDetails.insert({
      userId: userId,
      charDetails: charSelector
    });
    Session.set('userCharacter',charDetails);
  }
});
