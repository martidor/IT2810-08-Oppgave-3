// Model to represent a user
// ===============================================================================
var Database = require('../database/database');

class User {

  constructor(facebookId, token, name, id, visibility){
    this.facebookId = facebookId;
    this.token = token;
    this.name = name;
    this.id = id;
    this.visibility = visibility;
  }

  // Store *this* user in the database.
  saveToDb(callback){
    let userToInsert = this;
    Database.insertNewUser(userToInsert, function(){
      User.findByFacebookId(userToInsert.facebookId, function(err, user){
        callback(err, user);
      })
    });
  }

  // Find a user in the database based on the user id.
  static findById(id, callback){
    Database.getUserById(id, function(err, user){
      if (typeof user == 'undefined' || err)
        callback(null);
      else
        callback(err, new User(user.FacebookId, user.Token, user.Name, user.UserId, user.PortfolioVisibility));
    });
  }

  // Find a user in the database based on the facebook id.
  static findByFacebookId(facebookId, callback){
    Database.getUserByFacebookId(facebookId, function(err, user){
      if (typeof user == 'undefined' || err)
        callback(null);
      else
        callback(err, new User(user.FacebookId, user.Token, user.Name, user.UserId, user.PortfolioVisibility));
    });
  }
}

module.exports = User;
