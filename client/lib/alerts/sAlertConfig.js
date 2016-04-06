Meteor.startup(function() {
  sAlert.config({
    effect: 'stackslide',
    position: 'bottom-right',
    timeout: 7500,
    html: false,
    onRouteClose: true,
    stack: {
      spacing: 10,
      limit: 3
    },
    offset: 0,
    beep: false,
    onClose: _.noop
  });
});
