'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $projects = $('#projects');

    $projects.find('ul').show();
    $projects.show().siblings().hide();
  };

  var render = Handlebars.compile($('#repo-template').html());

  repoView.index = function() {
    ui();

    $('#projects ul').append(
      repos.all.map(render)
    );
  };

  module.repoView = repoView;
})(window);
