var express 	= require('express');
var passport = require('passport');

// ROUTES FOR OUR AUTH
// =============================================================================

// create our router
var authRotuer = express.Router();


// middleware to use for all requests
authRotuer.use(function(req, res, next) {
	// set headers
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Content-Type", "application/json");

	console.log('Perform authentication here.');
	next();
});

// test route to make sure everything is working (accessed at GET /api)
authRotuer.get('/', function(req, res) {
	res.json({message: 'Auth API is up and running.'});
});

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
authRotuer.get('/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
authRotuer.get('/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));

module.exports = authRotuer;
