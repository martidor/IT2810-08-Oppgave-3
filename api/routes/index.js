var express 	= require('express');
var passport	= require('passport');
var Database 	= require('../database/database');
var OsloBors	= require('../external-apis/oslobors');
var Helper		= require('../helper/helper');

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();


// middleware to use for all requests
router.use(function(req, res, next) {
	// set headers
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Credentials", true);
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Content-Type", "application/json");

	next();
});

// test route to make sure everything is working (accessed at GET /api)
router.get('/', function(req, res) {

	res.json({message: 'API is up and running.'});
});

// on routes that end in /users
// ----------------------------------------------------
router.route('/user')

	// create a user (accessed at POST /user)
	.post(function(req, res) {
		if (!username)
			res.json({message: 'Something went wrong'});
		else {
			Database.createNewUser(username, function(){
				res.json({message: 'User created'});
			});
		}
	})

	// get all the users (accessed at GET /api/users)
	.get(function(req, res) {
		Database.getAllUsers(function(users){
			res.json(users);
		})
	});

router.route('/user/:userId/equities')
    .get(function(req, res) {
    	let userId = req.params.userId;
    	Helper.getUserEquities(userId, function(equities){
    		res.json(equities);
    	});
    });

router.route('/user/:userId/stats')

    .get(function(req, res) {
    	let userId = req.params.userId;
    	Helper.getStatsByUserId(userId, function(userStats){
    		res.json(userStats);
    	});
    });

// on routes that end in /equity
// ----------------------------------------------------
router.route('/equity')

	// get all the equities (accessed at GET /api/equity)
	.get(isLoggedIn, function(req, res) {
		OsloBors.getEquities(function(equities){
			eqArray = Helper.convertObjectToArray(equities);
    		res.json(eqArray);
		});
	});

router.route('/equity/:equityId')

	// get all the equities (accessed at GET /api/equity)
	.get(function(req, res) {
		OsloBors.getEquityStats(req.params.equityId, function(equityStats){
    		res.json(equityStats);
		});
	});

// ticker routes
// ----------------------------------------------------
router.route('/ticker')

	.get(function(req, res) {
		OsloBors.getTicker(function(json){
    		res.json(json);
		});
	});

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't send forbidden
	res.sendStatus(403);
}

module.exports = router;
