// Routes for auth
// =============================================================================
var express   = require('express');
var passport = require('passport');
var config = require('../config/apiConfig');

// Get or initialize the singleton router
var router = express.Router();

// test route to make sure everything is working (accessed at GET /api)
router.get('/', function(req, res) {
  res.json({message: 'Auth API is up and running.'});
});

// Facebook will redirect the user to this URL after authentication. 
// The user is (not) logged in and redirected based on the response from facebook
router.get('/facebook/callback',
  passport.authenticate('facebook', { successRedirect: config.siteUrl,
                                      failureRedirect: config.loginUrl }));

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to /auth/facebook/callback
router.get('/facebook', passport.authenticate('facebook'));

// Router for testuser
router.post('/test',
  passport.authenticate('local', { successRedirect: config.siteUrl,
                                   failureRedirect: config.loginUrl }));

module.exports = router;