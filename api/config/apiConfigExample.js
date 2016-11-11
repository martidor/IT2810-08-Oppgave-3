var siteUrl = 'http://localhost:3000';
var apiUrl = 'http://localhost:8008';

module.exports = {
    'facebookAuth' : {
        'clientID'      : 658913754278482,
        'clientSecret'  : '0fcb2a93e0cc115164149ee40d9fd530',
        'callbackURL'   : apiUrl + '/auth/facebook/callback'
    },
    'siteUrl' : siteUrl,
    'portfolioUrl' : siteUrl + '/portefolje',
    'loginUrl' : siteUrl + '/logg-inn'
}