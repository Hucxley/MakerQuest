Template.createCharacter.helpers({
  create: function() {

  },
  rendered: function() {
    $('.ui.dropdown')
      .dropdown();
  },
  destroyed: function() {

  },
});

Template.createCharacter.events({
  "submit": function(event, template) {
    event.preventDefault();
    var characterName = $('input[name="character-name"]').val();
    var characterType = $('select[name="character-type"]').val();
    var gender = $('select[name="gender"]').val();
    var archetypeList = Archetypes.find().fetch();
    var userId = Meteor.userId();
    var charType = archetypeList[characterType];
    charDetails = {
      userId: userId,
      username: Meteor.user().username,
      charName: characterName,
      gender: gender,
      characterType: charType,
      currentLevel: 1,
      currentXP: 0,
      faction: 'Human',
      guild: 'Makers'
    };
    UserDetails.insert(charDetails);
    Session.set('userCharacter', charDetails);
    Router.go('/myCharacter.html');

  },
  "cancel": function(event, template) {
    event.preventDefault();
    $('input[name="character-name"]').clear();
    $('select[name="character-type"]').clear();
    $('select[name="gender"]').clear();
  }
});
