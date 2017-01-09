var projectView = {};

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
  $('article').on('click', 'h1', 'a', function() {
    var elem = $(this);
    if (elem.is('[href^ = "htpp"]')) {
      elem.attr('data-name', '_blank');
    }
  });
};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).show();
  });
  $('.main-nav .tab:first').click();
};


$(document).ready(function() {
  projectView.populateFilters();
  projectView.handleNameFilter();
  projectView.individualProject();
  projectView.handleMainNav();
});
