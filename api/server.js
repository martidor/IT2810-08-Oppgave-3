
// Base setup
// =============================================================================
var express		= require('express');
var app        	= express();
var port 		= 8008;
var bodyParser 	= require('body-parser');
var cookieParse = require('cookie-parser')
var session 	= require('express-session');
var passport 	= require('passport');
var routes 		= require('./routes/index');
var authRoutes	= require('./routes/auth');
var Cronjob 	= require('./helper/cronjob');

// Configure passport
require('./config/passport')(passport);


// Setup cookie and body parser (with json)
// =============================================================================
app.use(cookieParse()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));


// Passport initalization
// =============================================================================
// Passport needs sessions for persistent logins
app.use(session({
  secret: 'topSecretKey',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session()); // activate persistent login sessions


// Prefix and load routes
// =============================================================================
app.use('/api', routes);
app.use('/auth', authRoutes);


// Register a cronjob for updating user equity stats daily
// =============================================================================
Cronjob.registerStatsUpdate();


// Start the server
// =============================================================================
app.listen(port);
console.log('API up and running on port ' + port);
