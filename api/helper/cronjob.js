var CronJob 	= require('cron').CronJob;
var Database 	= require('../database/database');
var Helper	 	= require('../helper/helper');

class Cronjob{

	static registerStatsUpdate(){
		var job = new CronJob({
		  cronTime: '00 30 17 * * 1-5',
		  onTick: function() {
		    /*
		     * Runs every weekday (Monday through Friday)
		     * at 17:30:00. It does not run on Saturday
		     * or Sunday.
		     */
		     Cronjob.updateStats();
		  },
		  start: false,
		  timeZone: 'Europe/Oslo'
		});

		job.start();
	}

	// Method to initialize the update of all registered users' stats.
	static updateStats(){
		Helper.getAllUserEquities(function(users){
			let userArray = Helper.calculateUserStats(users);
			Database.insertUserStats(userArray);
		});
	}
}

module.exports = Cronjob;