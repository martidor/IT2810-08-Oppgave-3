// This module has a bad classname, and provides helper methods for different
// parts of the server. TODO: distribute methods to relevant classes.
// ===============================================================================
var fetch 		= require('node-fetch');
var Promise 	= require('bluebird');
var Database 	= require('../database/database');
var OsloBors	= require('../external-apis/oslobors');

class Helper{

	// Convert an object to an array
	static convertObjectToArray(obj){
		return Object.keys(obj).map(function (key) { return obj[key]; });
	}

	// This method is getting a users equities from the database,
	// and merge it with information from Oslo Børs.
	static getUserEquities(user, callback){
		let dbPromise = new Promise(function (resolve, reject) {
			Database.getEquitiesByUserId(user.id, function(userEquities){
	    		resolve(userEquities);
	    	});
    	});

    	let apiPromise = new Promise(function (resolve, reject) {
	    	OsloBors.getEquities(function(equities){
	    		resolve(equities);
			});
		});

		Promise.all([dbPromise, apiPromise]).then(values => {
			let dbResults = values[0];
			const apiResults = values[1];

			for (let dbResult of dbResults) {
				const apiResult = apiResults[dbResult.ExternalEquityId]
				for (const attr in apiResult)
					dbResult[attr] = apiResult[attr];
				
				if(typeof dbResult.type === 'undefined')
					dbResult.type = 'FUNDS';
			}

			callback(dbResults);
		});
	}

	// This method is getting all user equities from the database,
	// and merge it with information from Oslo Børs.
	static getAllUserEquities(callback){
		let dbPromise = new Promise(function (resolve, reject) {
			Database.getAllEquities(function(userEquities){
	    		resolve(userEquities);
	    	});
    	});

    	let apiPromise = new Promise(function (resolve, reject) {
	    	OsloBors.getEquities(function(equities){
	    		resolve(equities);
			});
		});

		Promise.all([dbPromise, apiPromise]).then(values => {
			let dbResults = values[0];
			const apiResults = values[1];

			let users = Helper.placeEquitiesOnUsers(dbResults, apiResults);
			callback(users);
		});
	}

	// This method is getting user stats from the database,
	// and spread it into different stats arrays.
	static getStatsByUser(user, callback){
		var promise = new Promise(function(resolve, reject) {
			Database.getStatsByUserId(user.id, function(userStats){
				resolve(userStats);
			});
		});

		promise.then(function(userStats){
			let stats = {
				'return': [],
				'value': [],
				'invested': []
			}

			for(let userStat of userStats){
				stats.return.push([userStat.Timestamp, userStat.Value - userStat.Invested]);
				stats.value.push([userStat.Timestamp, userStat.Value]);
				stats.invested.push([userStat.Timestamp, userStat.Invested]);
			}

			callback(stats);
		});
	}

	// This method places equities on a user, based
	// on which equities the user has.
	static placeEquitiesOnUsers(dbResults, apiResults){
		let users = {};
		for (let dbResult of dbResults) {
			let userId = dbResult.UserId;

			// Add user to object if it doesn't exist yet.
			if (! users.hasOwnProperty(userId))
				users[userId] = [];

			const apiResult = apiResults[dbResult.ExternalEquityId]
			for (const attr in apiResult)
				dbResult[attr] = apiResult[attr];

			users[userId].push(dbResult);
		}
		return users;
	}

	// Helper method to calculate user stats, based
	// on the equities of a user. 
	static calculateUserStats(users){
		let stats = [];
		for (let userKey in users){
			let user = users[userKey];
			let userStat = {
				timestamp: new Date().getTime(),
				invested: 0,
				value: 0,
				userId: 0
			}
			for (let userEquity of user){
				userStat.invested += userEquity.TotalPrice;
				userStat.value += userEquity.Stockholding * userEquity.price;
				userStat.userId = userEquity.UserId;
			}
			stats.push(userStat);
		}
		return stats;
	}
}

module.exports = Helper;