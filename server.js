'use strict'

const pg = require('pg');
// Load Express
const express = require('express');
const bodyParser= require('body-parser');
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

app.listen(PORT, function() {
  console.log('Server is up and running on port 4000 and can be accessed at localhost:4000 in your browser');
});
