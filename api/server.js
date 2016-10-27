// server.js

// BASE SETUP
// =============================================================================
var express		= require('express');
var app        	= express();
var bodyParser 	= require('body-parser');
var routes 		= require('./routes/index');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8008;        // set our port

// all of our routes will be prefixed with /api
app.use('/api', routes);

// START THE SERVER
// =============================================================================
app.listen(port);

console.log('Shit is going down on port ' + port);