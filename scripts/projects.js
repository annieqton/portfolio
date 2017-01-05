var allProjects = [];

function Project(opts) {
  this.name = opts.name;
  this.category = opts.category;
  this.contributor = opts.contributor;
  this.projectUrl = opts.projectUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

Project.prototype.toHtml = function () {
  var $newProject =$('article.template').clone().removeClass('template');

  $newProject.attr('data-category', this.category);
  $newProject.find('.byline').text(this.contributor);
  $newProject.find('h1').text(this.name).attr('href', this.projectUrl);
  // $newProject.find('h1').attr('href', this.projectUrl);
  $newProject.find('.project-body').html(this.body);
  $newProject.find('time[pubdate]').attr('datetime', this.publishedOn);
  $newProject.find('time').text(' about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  return $newProject;
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
