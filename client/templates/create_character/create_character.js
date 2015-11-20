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
    var currentUser = Meteor.userId();
    var charType = archetypeList[characterType];
    var dateCreated = new Date();
    if (UserDetails.findOne({
        userId: currentUser
      }, {
        fields: {
          characterName: 1
        }
      })) {
      if (Session.get('userCharacter').userId == currentUser) {
        Router.go('/myCharacter');
      }
    } else {
      charDetails = {
        userId: currentUser,
        username: Meteor.user().username,
        charName: characterName,
        gender: gender,
        characterType: charType,
        currentLevel: 1,
        currentXP: 0,
        faction: 'Human',
        guild: 'Makers',
        characterCreated: dateCreated,
      };
      UserDetails.insert(charDetails);
      var sanitizedDetails = UserDetails.findOne({
        userId: currentUser
      }, {
        fields: {
          _id: 0,
        }
      });
      Session.set('userCharacter', sanitizedDetails);
    }
  },
  "cancel": function(event, template) {
    event.preventDefault();
    $('input[name="character-name"]').clear();
    $('select[name="character-type"]').clear();
    $('select[name="gender"]').clear();
  }
});
