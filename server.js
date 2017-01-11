// Load Express
const express = require('express');

// Instantiate Express so that we can use its functionality
const app = express();

// Designate a port to serve our app on
const PORT = process.env.PORT || 4000;

// Define which directory we will serve files from
app.use(express.static('./public'));

// Send request for index.html to index.html
app.get('/index.html', function(request, response) {
  response.sendFile('index.html', {root: './public'});
});

app.listen(PORT, function() {
  console.log('Server is up and running on port 4000 and can be accessed at localhost:4000 in your browser');
});
