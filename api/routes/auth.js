var express 	= require('express');
var passport = require('passport');
var configAuth = require('../config/auth');

// ROUTES FOR OUR AUTH
// =============================================================================
var router = express.Router();

// test route to make sure everything is working (accessed at GET /api)
router.get('/', function(req, res) {
	res.json({message: 'Auth API is up and running.'});
});

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
router.get('/facebook/callback',
  passport.authenticate('facebook', { successRedirect: configAuth.siteUrl + '/',
                                      failureRedirect: configAuth.siteUrl + '/logg-inn' }));

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
router.get('/facebook', passport.authenticate('facebook'));

module.exports = router;