// var allProjects = [];

function Project(opts) {
  for (var key in opts) {
    this[key] = opts[key];
  }
}

Project.all = [];

Project.prototype.toHtml = function () {
  let template = Handlebars.compile($('#project-template').text());
  // var source = $('#project-template').html();
  // var templateRender = Handlebars.compile(source);
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
  this.body = marked(this.body);

  return template(this);
};

Project.loadAll = function(sourceData) {
  sourceData.sort(function(a,b) {
    return(new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  sourceData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  })
}

// This function will retrieve the data from either a local or remote source,
// and process it, then hand off control to the View.
Project.fetchAll = function () {
  if(localStorage.sourceData) {
    Project.loadAll(JSON.parse(localStorage.sourceData));
    projectView.initIndexPage();
  } else {
  //When we don't already have the sourceData, we need to retrieve the JSON file from the server with AJAX
    $.getJSON('data/projectDetails.json').then(function(sourceData) {
  // cache it in localStorage so we can skip the server call next time,
      localStorage.setItem('projectDetails', JSON.stringify(sourceData));
  // then load all the data into Project.all with the .loadAll function above
      Project.loadAll(sourceData);
  // and then render the index page.
      projectView.initIndexPage();
    });
  }
}
