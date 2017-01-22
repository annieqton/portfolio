'use strict'

const pg = require('pg');
// Load Express
const express = require('express');
const bodyParser= require('body-parser');
const requestProxy = require('express-request-proxy');
// Instantiate Express so that we can use its functionality
const app = express();
// Designate a port to serve our app on
const PORT = process.env.PORT || 4000;

// Define which directory we will serve files from
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(express.static('./public'));

app.get('/', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/about', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/projects', (request, response) => response.sendFile('index.html', {root: './public'}));

// This is a new route that will utilize our middle man proxy.
app.get('/github/*', proxyGitHub);

//This is a new proxy method which acts as a 'middle man' (middleware) for our request.
function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy){
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
