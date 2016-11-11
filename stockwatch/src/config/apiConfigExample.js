var baseUrl = 'http://' + window.location.hostname + ':8008';
var apiUrl  = baseUrl + '/api';
var authUrl = baseUrl + '/auth';

module.exports = {
	facebookAuthUrl    : authUrl + '/facebook',
	testUserAuthUrl    : authUrl + '/test',
	logoutUrl          : apiUrl  + '/logout',
	isAuthenticatedUrl : apiUrl  + '/isAuthenticated',
	userEquitiesUrl    : apiUrl  + '/user/equities',
	equityUrl          : apiUrl  + '/equity/',
	tickerUrl          : apiUrl  + '/ticker',
	userStatsUrl       : apiUrl  + '/user/stats',
	allUsersUrl        : apiUrl  + '/users',
	userUrl            : apiUrl  + '/user',
	deleteEquityUrl    : apiUrl  + '/equity/delete'
}