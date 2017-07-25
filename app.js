const express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json())

var routes = require('./sendgrid');

app.use(express.static(__dirname));
app.use('/', routes);

app.listen(process.env.PORT || '3000', function() {
  console.log('The server is up!');
})
