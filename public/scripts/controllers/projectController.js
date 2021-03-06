'use strict';

(function(module) {
  const projectController = {};

  projectController.index = () => {
    $('#projects').show().siblings().hide();
    repos.requestRepos(repoView.index);

    projectView.index();

    $('main > section').hide();
    $('#projects').show();
  };


  module.projectController = projectController;
})(window);
