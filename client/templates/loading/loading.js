Template.loading.rendered = function() {
  if (!Session.get('loadingSplash')) {
    this.loading = window.pleaseWait({
      logo: '../img/largeLogo.png',
      backgroundColor: '#FFFFFF',
      loadingHtml: message + spinner
    });
    Session.set('loadingSplash', true); // just show loading splash once
  }
};

Template.loading.destroyed = function() {
  if (this.loading) {
    this.loading.finish();
  }
};

var message = '<p class="loading-message">Loading Message</p>';
var spinner = '<div class="sk-spinner sk-cube-grid"></div>';
