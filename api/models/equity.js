// Model to represent an equity.
// ===============================================================================
var Database = require('../database/database');

class Equity {

  constructor(externalId, totalPrice, timestamp, stockholding){
    this.externalId = externalId;
    this.totalPrice = totalPrice;
    this.timestamp = timestamp;
    this.stockholding = stockholding;
  }

  // Store *this* equity on a user.
  saveToDb(userId, callback){
    Database.insertUserEquity(this, userId, function(){
      callback();
    });
  }
}

module.exports = Equity;