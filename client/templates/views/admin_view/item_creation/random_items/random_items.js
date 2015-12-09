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
    event.preventDefault();
    var itemsToCreate = $('input[name="random-item-creation-quantity"]').val();
    var prefixes = ItemPrefixes.find().fetch();
    var suffixes = ItemSuffixes.find().fetch();
    var armor = ['Helmet','Hauberk','Gauntlets','Pauldrons','Boots', 'Pants'];
    var rarities = ItemQuality.find().fetch();
    var weapons = ['Sword','Shield','Mace','Hammer','Tome','Staff','Dagger','Scythe'];
    console.log(prefixes);
    console.log(suffixes);
    console.log(armor);
    console.log(rarities);
    console.log(weapons);


  }
});
