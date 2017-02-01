'use strict';

(function(module) {
  const projectView = {};

  projectView.populateFilters = function() {
    var options;
    var template = Handlebars.compile($('#option-template').text());
    options = Project.projectName()
    .map(function(name) {
      return template({val: name});
    });
    $('#name-filter').append(options);
  };

  projectView.handleFilters = function() {
    $('#filters').on('change', 'select', function() {
      var resource = this.id.replace('-filter', '');
      $(this).parent().siblings().children().val('');
      page('/' + resource + '/' +
        // Replace any/all whitespace with a '+' sign
        $(this).val().replace(/\W+/g, '+')
      );
    });
  };

  projectView.individualProject = function () {
    $('#projects h1 a').attr('target','_blank');
  };

    projectView.index = function() {
    $('#projects').show().siblings().hide();


    projectView.populateFilters();
    projectView.handleFilter();
    projectView.individualProject();
  };

  module.projectView = projectView;
})(window);
