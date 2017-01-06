var allProjects = [];

function Project(opts) {
  for (key in opts) {
    this[key] = opts[key];
  }
}

Project.prototype.toHtml = function () {
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
  return templateRender(this);
};

sourceData.sort(function(a,b) {
  return(new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

sourceData.forEach(function(ele) {
  allProjects.push(new Project(ele));
});

allProjects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
