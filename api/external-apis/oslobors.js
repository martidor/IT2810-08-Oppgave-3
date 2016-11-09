var fetch = require('node-fetch');
var Promise = require('bluebird');

class OsloBors{
	
	// Urls for Oslo børs API.
	static stockUrl() {
		return "http://www.oslobors.no/ob/servlets/components?source=feed.ob.quotes.EQUITIES&columns=LONG_NAME+as+name%2C+CHANGE_PCT_SLACK+as+percent%2C+ASK+as+price%2C+TIME+as+time%2C+ITEM_SECTOR+as+id%2C+INSTRUMENT_TYPE%20as%20type";
	};

	static fundUrl() {
		return "http://www.oslobors.no/ob/servlets/components?source=feed.omff.FUNDS&columns=SECURITYNAME+as+name%2C+PRICECHANGEPCT+as+percent%2C+PRICE+as+price%2C+TIME+as+time%2C+ITEM_SECTOR+as+id";
	};

	static tickerUrl() {
		return "http://oslobors.no/ob/servlets/components/graphdata/s1/tick/OSEBX.OSE";
	}

	static yesterdayCloseUrl() {
		return "http://oslobors.no/ob/servlets/components?columns=CLOSE_BEGIN_1DAY&itemSector=OSEBX.OSE&space=DAY";
	}

	static equityStatsUrl(equityId, type){
		return `http://www.oslobors.no/ob/servlets/components/graphdata/(${type})/DAY/${equityId}?points=2000&period=3years`;
	}

	// Methods to get data from API
	static getEquities(callback) {
		let requestUrls = [OsloBors.stockUrl(), OsloBors.fundUrl()];

		Promise.map(requestUrls, function(url) {
			return fetch(url).then(function(res) {
				return res.json();
			})
		}).then(function(results) {
			let equities = OsloBors.extractEquities(results);
			return callback(equities);
		});
	};

	static getTicker(callback){
		let requestUrls = [OsloBors.tickerUrl(), OsloBors.yesterdayCloseUrl()];

		Promise.map(requestUrls, function(url) {
			return fetch(url).then(function(res) {
				return res.json();
			})
		}).then(function(results) {
			let ticker = OsloBors.mergeTickerAndYesterday(results);
			return callback(ticker);
		});
	}

	static getEquityStats(equityId, type, callback){
		let key = (type === 'SHARES') ? 'CLOSE_CA' : 'PRICE';
		let requestUrl = OsloBors.equityStatsUrl(equityId, key);
		Promise.try(function(){
			return fetch(requestUrl).then(function(res) {
				return res.json();
			})
		}).then(function(json){
			return callback(json.rows[0].values.series.c1.data);
		});
	}

	// Helper methods
	static extractEquities(results){
		let equities = {};
		for (let result of results) {
			for (let row of result.rows){
				equities[row.values.id] = row.values;
			}
		}
		return equities;
	}

	static mergeTickerAndYesterday(results){
		let json = {};
		json.ticker = results[0].rows[0].values.series.s1.data;
		json.yesterday = results[1].rows[0].values.CLOSE_BEGIN_1DAY;
		return json;
	}

	
}

module.exports = OsloBors;