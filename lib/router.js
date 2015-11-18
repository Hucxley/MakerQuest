Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'guestView'
});

Router.route('/about', {
  name: 'aboutView'
});
