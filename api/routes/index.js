var express 	= require('express');
var Database 	= require('../database/database');

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();


// middleware to use for all requests
router.use(function(req, res, next) {
	console.log('Perform authentication here.');
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
		
		const username = req.body.name;
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

module.exports = router;