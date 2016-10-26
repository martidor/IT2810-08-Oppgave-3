var sqlite3 = require('sqlite3').verbose();

class Database{

	static getDatabase(){
		return new sqlite3.Database('./database/stockwatch.db');
	}

	static getAllUsers(callback){
		const db = this.getDatabase();
		db.all("SELECT * FROM user", function(err, rows) {
			callback(rows);
		});
	}

	static createNewUser(username, callback){
		const db = this.getDatabase();
		const stmt = db.prepare("INSERT INTO user VALUES (?)");
		stmt.run(username);
		stmt.finalize(callback);
	}
}


module.exports = Database;