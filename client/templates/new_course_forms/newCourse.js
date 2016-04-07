Template.newCourse.helpers({

});

Template.newCourse.events({
  "click .btn-new-course-submit": function(event, template) {
    event.preventDefault();
    var formSubmit = $('.ui.form').form('get values');
    console.log(formSubmit);
    if (formSubmit.courseTitle) { //TODO add form validation rules, if passed, submit
      Meteor.call('addNewCourse', formSubmit, function(error, response) {
        if (error) {
          sAlert.error('Server ERROR: ' + error + '. \nCourse NOT added!')
        } else {
          sAlert.success(formSubmit.courseTitle + ' was added to the courses database!')
        }
      });
    } else {
      sAlert.error('ERROR: \nCourses must have a valid title!')
    }
  }
});
