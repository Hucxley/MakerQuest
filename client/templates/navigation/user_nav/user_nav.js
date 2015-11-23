Template.userNav.helpers({
  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
  hasCharacter: function() {
    if(Session.get('characterDetails')){
      if(Session.get('characterDetails').characterName){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  }
});

Template.userNav.events({

});
