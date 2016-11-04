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
var Cronjob = require('./helper/cronjob')

passport.use(new FacebookStrategy({
    clientID: 658913754278482,
    clientSecret: "0fcb2a93e0cc115164149ee40d9fd530",
    callbackURL: "http://localhost:8008/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ facebookId: profile.id }, function(err, user) {
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

// Register a cronjob for updating stats daily
Cronjob.registerStatsUpdate();

// START THE SERVER
// =============================================================================
app.listen(port);

console.log('API up and running on port ' + port);
