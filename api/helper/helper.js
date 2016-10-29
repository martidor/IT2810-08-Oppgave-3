
class Helper{

	static convertObjectToArray(obj){
		return Object.keys(obj).map(function (key) { return obj[key]; });
	}
}

module.exports = Helper;