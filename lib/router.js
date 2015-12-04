Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {
  name: 'guestView',
});

Router.route('/about.html', {
  name: 'aboutView'
});

Router.route('/courses.html', {
  name: 'coursesView'
});

Router.route('/blog.html', {
  name: 'blogView'
});

Router.route('/contact.html', {
  name: 'contactView'
});

Router.route('/store.html', {
  name: 'storeView'
});

Router.route('/register.html', {
  name: 'registerView'
});

Router.route('/myCharacter.html', {
  name: 'playerView',

});

Router.route('/createCharacter.html', {
  name: 'createCharacter'
});

Router.route('/inventory.html', {
  name: 'inventoryView'
});

Router.route('/guilds.html', {
  name: 'guildsView'
});

Router.route('/quests.html', {
  name: 'questsView'
});

Router.route('/skills.html', {
  name: 'skillsView'
});

Router.route('/achievements.html', {
  name: 'achievementsView'
});

Router.route('admin.html', {
  name: 'adminView',
});

Router.route('/instructor.html', {
  name: 'instructorView',
});

Router.route('/sign-out', {
  name: 'signOut',
  template: 'sign_out',
  redirect: function() {
    Session.set('userSession', undefined);
    Session.set('userCharacter', undefined);
    Router.go('/');
  },
});

Router.route('/user.html', {
  name: 'loggedInView',
});



//AccountsTemplates.configureRoute('changePwd');
//AccountsTemplates.configureRoute('enrollAccount');
//AccountsTemplates.configureRoute('forgotPwd');
//AccountsTemplates.configureRoute('resetPwd');
//AccountsTemplates.configureRoute('signIn');
//AccountsTemplates.configureRoute('signUp');
//AccountsTemplates.configureRoute('verifyEmail');
