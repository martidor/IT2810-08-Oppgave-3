var express 	= require('express');
var passport	= require('passport');
var Database 	= require('../database/database');
var OsloBors	= require('../external-apis/oslobors');
var Helper		= require('../helper/helper');
var config		= require('../config/apiConfig');
var Equity      = require('../models/equity');

// Routes for our API
// =============================================================================

// create our router
var router = express.Router();


// Middleware that all our requests will pass through
// --------------------------------------------------------------------
router.use(function(req, res, next) {
	// set headers
	res.header("Access-Control-Allow-Origin", config.siteUrl);
	res.header("Access-Control-Allow-Credentials", true);
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Content-Type", "application/json");

	next();
});


// Optional midddleware for checking if a user is logged in.
// -------------------------------------------------------------------
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();

	// Send forbidden status and redirect if they are not authenticated
	else
		res.redirect(403, config.siteUrl);
}


// Test route to make sure API is working
// --------------------------------------------------------------------
router.get('/', function(req, res) {
	res.json({message: 'API is up and running.'});
});


// Get all users that have their profile visibiltiy set to public
// --------------------------------------------------------------------
router.route('/users')

	.get(isLoggedIn, function(req, res) { // TODO: run through helper and create user objects.
		Database.getPublicUsers(function(users){
			res.json(users);
		})
	});


// Get current user
// --------------------------------------------------------------------
router.route('/user')

	.get(isLoggedIn, function(req, res) {
		let user = req.user;
		res.json(user);
	});


// Get equities for logged in user
// -------------------------------------------------------------------
router.route('/user/equities')

    .get(isLoggedIn, function(req, res) {
    	let user = req.user;
    	Helper.getUserEquities(user, function(equities){
    		res.json(equities);
    	});
    })

    // Save new equity to portfolio
    .post(isLoggedIn, function(req, res) {
    	let user = req.user;
    	let totalPrice = req.body.totalprice;
    	let stockholding = req.body.stockholding;
    	let timestamp = new Date(req.body.date).getTime();
    	let externalId = req.body.externalid;

    	let equity = new Equity(externalId, totalPrice, timestamp, stockholding);
    	equity.saveToDb(user.id, function(){
    		res.redirect(config.portfolioUrl);
    	});
    });


// Get stats for logged in user
// -------------------------------------------------------------------
router.route('/user/stats')

    .get(isLoggedIn, function(req, res) {
    	let user = req.user;
    	Helper.getStatsByUser(user, function(userStats){
    		res.json(userStats);
    	});
    });


// Get list of all equities
// -------------------------------------------------------------------
router.route('/equity')

	.get(isLoggedIn, function(req, res) {
		OsloBors.getEquities(function(equities){
			eqArray = Helper.convertObjectToArray(equities);
    		res.json(eqArray);
		});
	});


// Get historical data for specific equity
// -------------------------------------------------------------------
router.route('/equity/:type/:equityId')

	.get(function(req, res) {
		var equityId = req.params.equityId;
		var type = req.params.type;
		OsloBors.getEquityStats(equityId, type, function(equityStats){
    		res.json(equityStats);
		});
	});


// Delete equity
// -------------------------------------------------------------------
router.route('/equity/delete')

	.post(isLoggedIn, function(req, res) {
		let equityId = req.body.equityid;
		let userId = req.user.id;

		Database.deleteUserEquity(equityId, userId, function(){
			res.redirect(config.portfolioUrl);
		});
	});


// Get current ticker for OSEBX (Oslo børs)
// -------------------------------------------------------------------
router.route('/ticker')

	.get(function(req, res) {
		OsloBors.getTicker(function(json){
    		res.json(json);
		});
	});


// Endpoint for checking if user is authenticated
// -------------------------------------------------------------------
router.route('/isAuthenticated')

	.get(function(req, res) {
		if (req.isAuthenticated())
			res.json({
				authenticated: true,
				token: req.user.token.substring(20)
			})
		else
			res.json({
				authenticated: false,
			})
	});


// Endpoint for logging out the user that sent the request
// -------------------------------------------------------------------
router.route('/logout')

	.get(function(req, res) {
		req.logOut();
		res.sendStatus(200);
	});


module.exports = router;
