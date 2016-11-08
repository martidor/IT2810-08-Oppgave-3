// server.js

// BASE SETUP
// =============================================================================
var express		= require('express');
var app        	= express();
var port = process.env.PORT || 8008;
var bodyParser 	= require('body-parser');
var cookieParser = require('cookie-parser')
var session = require('express-session');
var routes 		= require('./routes/index');
var authRoutes	= require('./routes/auth');
var passport 	= require('passport');
var Cronjob = require('./helper/cronjob');

// create our router
var router = express.Router();

require('./config/passport')(passport);

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

// required for passport
app.use(session({
  secret: 'topSecretKey',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


// API routes will be prefixed with /api
app.use('/api', routes);

// Auth routes
app.use('/auth', authRoutes);

// Register a cronjob for updating stats daily
Cronjob.registerStatsUpdate();

// START THE SERVER
// =============================================================================
app.listen(port);

console.log('API up and running on port ' + port);
