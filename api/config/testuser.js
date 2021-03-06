// This module is used to configure a local login strategy (for test user)
// ===============================================================================

var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

// Config variables
var config = require('./apiConfig');

module.exports = function(passport) {

  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findByFacebookId('6666666666', function(err, user) {
        // Abort misson on DB error
        if (err)
          return done(err, false);

        if (user)
          return done(null, user);

        return done(null, null);
      });
    })
  );
}
