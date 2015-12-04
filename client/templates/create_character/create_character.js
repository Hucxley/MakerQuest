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
  'submit': function(event, template) {
    event.preventDefault();
    var charName = $('input[name="character-name"]').val();
    var selectorCharType = $('select[name="character-type"]').val();
    var gender = $('select[name="gender"]').val();
    var archetypeList = Archetypes.find().fetch();
    var currentUser = Meteor.userId();
    var charType = archetypeList[selectorCharType];
    var dateCreated = new Date();
    if (UserDetails.findOne({
        userId: currentUser
      }, {
        fields: {
          characterName: 1
        }
      })) {
      if (Session.get('userCharacter').userId == currentUser) {
        Router.go('/myCharacter.html');
      }
    } else {
      var charDetails = {
        userId: currentUser,
        roleId: 100,
        username: Meteor.user().username,
        characterName: charName,
        gender: gender,
        characterType: charType,
        currentLevel: 1,
        currentXP: 0,
        faction: 'Human',
        guild: 'Makers',
        characterCreated: dateCreated,
        availableQuests: [{
          _id: ''
        }],
        currentQuests: [{
          _id: ''
        }],
        completedQuests: [{
          _id: ''
        }],
      };
      Meteor.call('addUserCharacter', charDetails);
      Session.set('userCharacter', charDetails);
      Router.go('/myCharacter.html');
    }
  },
  'cancel': function(event, template) {
    event.preventDefault();
    $('input[name="character-name"]').clear();
    $('select[name="character-type"]').clear();
    $('select[name="gender"]').clear();
  }
});
