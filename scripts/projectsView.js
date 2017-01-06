var projectView = {};

projectView.populateFilters = function() {
  $('article').not('.template').each(function(){
    var projectName, optionTag;
    projectName = $(this).find('h1 a').text();
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
        if($(this).attr('name') === $currentProjectName) {
          $(this).fadeIn();
        }
      });
    }else{
      $('article').fadeIn();
    }
    $('#name-filter').val('');
  });
};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav .tab:first').click();
};


$(document).ready(function() {
  projectView.populateFilters();
  projectView.handleNameFilter();
  projectView.handleMainNav();
});
