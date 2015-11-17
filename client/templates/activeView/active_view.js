Template.activeView.helpers({
  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
  activeViewState: function() {
    return Session.get('currentViewState');
  }
});

Template.activeView.events({
  "click #foo": function(event, template) {

  }
});
