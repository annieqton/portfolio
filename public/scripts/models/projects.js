'use strict';

(function(module){

  function Project(opts) {
    Object.keys(opts).forEach(e => this[e] = opts[e]);
  }

  Project.all = [];

  Project.prototype.toHtml = function () {
    let template =   Handlebars.compile($('#project-template').text());
    // var source = $('#project-template').html();
    // var templateRender = Handlebars.compile(source);
    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
    this.body = marked(this.body);

    return template(this);
  };

  Project.loadAll = rows => {
    rows.sort((a,b) => (new Date(b.publishedOn)) - (new Date(a.publishedOn)));

    Project.all = rows.map(row => new Project(row));
  };

  Project.fetchAll = function () {
    if(localStorage.sourceData) {
      Project.loadAll(JSON.parse(localStorage.sourceData));
    } else {
      $.getJSON('data/projectDetails.json').then(function(sourceData) {
        localStorage.setItem('projectDetails', JSON.stringify(sourceData));
        Project.loadAll(sourceData);
      });
    }
  };

  module.Project = Project;
})(window);
