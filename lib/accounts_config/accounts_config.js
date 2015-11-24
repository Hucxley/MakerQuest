// Options
AccountsTemplates.configure({
  defaultLayout: 'layout',
  showForgotPasswordLink: true,
  overrideLoginErrors: true,
  enablePasswordChange: true,
  sendVerificationEmail: false,

  //enforceEmailVerification: true,
  confirmPassword: true,
  //continuousValidation: false,
  //displayFormLabels: true,
  //forbidClientAccountCreation: false,
  //formValidationFeedback: true,
  //showAddRemoveServices: false,
  showPlaceholders: true,

  //negativeValidation: true,
  //positiveValidation:true,
  //negativeFeedback: false,
  //positiveFeedback:true,

  // Privacy Policy and Terms of Use
  //privacyUrl: 'privacy',
  //termsUrl: 'terms-of-use',

  onLogoutHook: function() {
    console.log('Session cleared, logging out');
    Session.set('userCharacter', undefined);
    Router.go('/');
  },
});

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([{
    _id: "username",
    type: "text",
    displayName: "username",
    required: true,
    minLength: 5,
  },
  pwd
]);

AccountsTemplates.configureRoute('signIn', {
  name: 'signIn',
  path: '/login.html',
  loadingTemplate: 'loading',
  template: 'loginView',
  layoutTemplate: 'layout',
  waitOn: function() {
    return Session.get('userCharacter');
  },
  redirect: function() {
    var currentUser = Meteor.userId();
    if (Session.get('userCharacter').username === currentUser) {
      Router.go('/myCharacter.html');
    } else {
      Router.go('/');
    }
  }
});


// AccountsTemplates.logout();
