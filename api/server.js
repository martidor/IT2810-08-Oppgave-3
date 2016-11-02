// server.js

// BASE SETUP
// =============================================================================
var express		= require('express');
var app        	= express();
var bodyParser 	= require('body-parser');
var routes 		= require('./routes/index');
var authRoutes	= require('./routes/auth');
var passport 	= require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://www.example.com/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8008;        // set our port

// API routes will be prefixed with /api
app.use('/api', routes);

// Auth routes
app.use('/auth', authRoutes);

// START THE SERVER
// =============================================================================
app.listen(port);

console.log('Shit is going down on port ' + port);
