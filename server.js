'use strict';

var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 4000,
  app = express();

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: 'https://api.github.com/' + request.params[0],
    headers: {Authorization: 'token ' + process.env.GITHUB_TOKEN }
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

app.use(express.static('./public'));

app.get('*', function(request, response) {
  console.log('New request:' , request.url);
  response.sendFile('index.html', { root: './public'});
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
