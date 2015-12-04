// Options
AccountsTemplates.configure({
  defaultLayout: 'layout',
  showForgotPasswordLink: true,
  overrideLoginErrors: false,
  enablePasswordChange: true,
  sendVerificationEmail: false,
  focusFirstInput: true,

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

  onSubmitHook: function(error, state) {

  },

  onLogoutHook: function() {
    console.log('Session cleared, logging out');
    Session.set('userCharacter', undefined);
    Session.set('userSession', undefined);
    Router.go('/');
  },
  preSignUpHook: function(password, info) {
    var userSession = {
      username: info.username,
      role: info.profile.role,
      email: info.profile.email || '',
    };
    Session.set('userSession', userSession);
  },

});

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField(
  'email');
AccountsTemplates.addFields([{
    _id: 'roleSelected',
    type: 'select',
    displayName: 'User Type',
    required: true,
    select: [{
      text: 'Student',
      value: 'student',
    }, {
      text: 'Instructor',
      value: 'instructor',
    }, {
      text: 'Admin',
      value: 'admin',
    }, ],
  }, {
    _id: 'username',
    type: 'text',
    displayName: 'username',
    placeholder: 'All users MUST choose a username',
    required: true,
    continuousValidation: true,
    minLength: 8,
  }, {
    _id: 'email',
    type: 'email',
    required: false,
    displayName: 'email',
    placeholder: 'For Instructor Use Only',
    re: /.+@(.+){2,}\.(.+){2,}/,
    continuousValidation: true,
    errStr: 'Invalid email',
  },
  pwd, {
    _id: 'accessCode',
    type: 'text',
    displayName: 'Authorization Code',
    placeholder: 'For Instructors and Admins ONLY',
    required: false,

  }, {
    _id: 'authorized',
    type: 'hidden',
    value: false,
    required: false,
  }, {
    _id: 'reviewDate',
    type: 'hidden',
    value: '',
    required: false,
  }
]);

AccountsTemplates.configureRoute('signIn', {
  name: 'signIn',
  path: '/login.html',
  loadingTemplate: 'loading',
  template: 'loginView',
  layoutTemplate: 'layout',
  waitOn: function() {
    if (Meteor.userId()) {
      var currentUser = Meteor.user();
      return Meteor.subscribe('verifyPrompt', currentUser);
    }
  },
  redirect: function() {
    if (Meteor.user().profile.role === 'admin') {
      Router.go('/admin.html');
    };
    if (Meteor.user().profile.role === 'instructor') {
      Router.go('/instructor.html');
    };
    if (Meteor.user().profile.role === 'student') {
      Router.go('/user.html');
    };
  },
});
