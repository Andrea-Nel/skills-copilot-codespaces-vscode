//Create web server 
var express = require('express');
var app = express();

//Create a route that listens for GET requests on the /comments path
app.get('/comments', function(req, res) {
  //Create a JSON response to send back to the client
  var comments = [];