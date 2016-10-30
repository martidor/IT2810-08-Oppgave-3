var fetch 		= require('node-fetch');
var Promise 	= require('bluebird');
var Database 	= require('../database/database');
var OsloBors	= require('../external-apis/oslobors');

class Helper{

	static convertObjectToArray(obj){
		return Object.keys(obj).map(function (key) { return obj[key]; });
	}

	// This method is getting a users equities from the database,
	// and merge it with information from Oslo Børs.
	static getUserEquities(userId, callback){
		let dbPromise = new Promise(function (resolve, reject) {
			Database.getEquitiesByUserId(userId, function(userEquities){
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
			}

			callback(dbResults);
		});
	}
}

module.exports = Helper;