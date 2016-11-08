var Database = require('../database/database');

class User {

	constructor(facebookId, token, name, id, visibility){
		this.facebookId = facebookId;
		this.token = token;
		this.name = name;
		this.id = id;
		this.visibility = visibility;
	}

	saveToDb(callback){
		Database.createNewUser(this, function(){
			User.findByFacebookId(this.facebookId, function(err, user){
				callback(err, user);
			})
		});
	}

	static findById(id, callback){
		Database.getUserById(id, function(err, user){
			if (typeof user == 'undefined' || err)
				callback(null);
			else
				callback(err, new User(user.FacebookId, user.Token, user.Name, user.UserId, user.PortfolioVisibility));
		});
	}

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