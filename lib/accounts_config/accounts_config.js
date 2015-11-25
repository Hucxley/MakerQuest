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
  redirect: function() {
    Router.go('/user');
  },
});


// AccountsTemplates.logout();
