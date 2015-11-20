Router.configure({
  layoutTemplate: 'layout'
});

AccountsTemplates.configure({
  defaultLayout: 'layout',
  texts: {
    // navSignOut: function() {
    //   return Meteor.user().username;
    //}
  }
});

AccountsTemplates.configureRoute('signIn', {
  name: 'signIn',
  path: '/login.html',
  template: 'loginView',
  layoutTemplate: 'layout',
  redirect: function() {
    var user = Meteor.user().username;
    if (user){
      if(Session.get('characterDetails').characterName){
        Router.go('/myCharacter.html');
      }
    }
      Router.go('/myCharacter.html');
  }
});

Router.route('/', {
  name: 'guestView'
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
  name: 'playerView'
});

Router.route('/create-character.html', {
  name: 'createCharacter'
});

Router.route('/inventory.html', {
  name: 'inventoryView'
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

Router.route('/sign-out', {
  name: 'signOut',
  template: 'sign_out',
  onBeforeAction: function() {
    Meteor.logout(function() {});
    Session.set('characterDetails', undefined);
    this.next();
  }
});



//AccountsTemplates.configureRoute('changePwd');
//AccountsTemplates.configureRoute('enrollAccount');
//AccountsTemplates.configureRoute('forgotPwd');
//AccountsTemplates.configureRoute('resetPwd');
//AccountsTemplates.configureRoute('signIn');
//AccountsTemplates.configureRoute('signUp');
//AccountsTemplates.configureRoute('verifyEmail');
