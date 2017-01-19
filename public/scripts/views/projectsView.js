'use strict';

(function(module) {
  const projectView = {};

  projectView.populateFilters = function() {
    $('article').not('.template').each(function(){

      var projectName;
      projectName = $(this).find('h1 a').text();

      var optionTag;
      optionTag = '<option value="' + projectName +'">' + projectName + '</option>';

      $('#name-filter').append(optionTag);

      if($('#name-filter option[value="' + projectName +'"]').length === 0) {
        $('#name-filter').append(optionTag);
      }
    });
  };

  projectView.handleNameFilter = function () {
    $('#name-filter').on('change', function(){
      if($(this).val()) {
        $('article').hide();
        var $currentProjectName = $(this).val();
        $('article').each(function() {
          if($(this).data('name') === $currentProjectName) {
            $(this).fadeIn();
          }
        });
      }else{
        $('article').fadeIn();
      }
    });
  };

  projectView.individualProject = function () {
    $('#projects h1 a').attr('target','_blank');
  };

// Disable this code block since the routes are handling '/' and '/about'
  // projectView.handleMainNav = function() {
  //   $('.main-nav').on('click', '.tab', function() {
  //     $('.tab-content').hide();
  //     $('#' + $(this).data('content')).show();
  //   });
  //   $('.main-nav .tab:first').click();
  // };

  projectView.initIndexPage = function () {
    Project.all.forEach(function(a) {
      $('#projects').append(a.toHtml())
    });


    projectView.populateFilters();
    projectView.handleNameFilter();
    projectView.individualProject();
    projectView.handleMainNav();
  };

  module.projectView = projectView;
})(window);
