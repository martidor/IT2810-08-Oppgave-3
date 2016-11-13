// This module is used as a repository that communicates with the database.
// ===============================================================================
var sqlite3 = require('sqlite3').verbose();

class Database{

  static getDatabase(){
    return new sqlite3.Database('./database/database.db');
  }

  static getPublicUsers(callback){
    const db = this.getDatabase();
    db.all("SELECT * FROM user where PortfolioVisibility = 1", function(err, rows) {
      callback(err, rows);
      db.close();
    });
  }

  static getUserById(id, callback){
    const db = this.getDatabase();
    const stmt = "SELECT * FROM user WHERE UserId = ?";
    db.get(stmt, id, function(err, row){
      callback(err, row);
      db.close();
    })
  }

  static getUserByFacebookId(facebookId, callback){
    const db = this.getDatabase();
    const stmt = "SELECT * FROM user WHERE FacebookId = ?";
    db.get(stmt, facebookId, function(err, row){
      callback(err, row);
      db.close();
    })
  }

  static insertNewUser(user, callback){
    const db = this.getDatabase();
    const stmt = db.prepare("INSERT INTO user(FacebookId, Token, Name) VALUES (?,?,?)");
    stmt.run([user.facebookId, user.token, user.name], function(){
      callback();
      stmt.finalize();
      db.close();
    });
  }

  static getEquitiesByUserId(userId, callback){
    const db = this.getDatabase();
    const stmt = "SELECT EquityId, ExternalEquityId, TotalPrice, TransactionTimestamp, Stockholding FROM Equity WHERE UserId = ? AND IsSold = 0 ORDER BY TransactionTimestamp";
    db.all(stmt, userId, function(err, rows){
      callback(rows);
      db.close();
    });
  }

  static getAllEquities(callback){
    const db = this.getDatabase();
    const stmt = "SELECT UserId, EquityId, ExternalEquityId, TotalPrice, TransactionTimestamp, Stockholding FROM Equity WHERE IsSold = 0";
    db.all(stmt, function(err, rows){
      callback(rows);
      db.close();
    });
  }

  static getStatsByUserId(userId, callback){
    const db = this.getDatabase();
    const stmt = "SELECT Timestamp, Invested, Value FROM UserStats Where UserId = ? ORDER BY Timestamp";
    db.all(stmt, userId, function(err, rows){
      callback(rows);
      db.close();
    });
  }

  static insertUserEquity(equity, userId, callback){
    const db = this.getDatabase();
    const stmt = db.prepare("INSERT INTO Equity(UserId, ExternalEquityId, TotalPrice, TransactionTimestamp, Stockholding) VALUES (?,?,?,?,?)");
    stmt.run([userId, equity.externalId, equity.totalPrice, equity.timestamp, equity.stockholding], function(){
      callback();
      stmt.finalize();
      db.close();
    });
  }

  static deleteUserEquity(equityId, userId, callback){
    const db = this.getDatabase();
    const stmt = "UPDATE Equity SET IsSold = 1 WHERE EquityId = ? AND UserId = ?";
    db.run(stmt, equityId, userId, function(){
      callback();
      db.close();
    });
  }

  static insertUserStats(userArray){
    const db = this.getDatabase();
    const stmt = db.prepare("INSERT INTO UserStats(Timestamp, Invested, Value, UserId) VALUES (?,?,?,?)");
    for (let user of userArray)
      stmt.run(user.timestamp, user.invested, user.value, user.userId);
    stmt.finalize();
    db.close();
  }
}

module.exports = Database;