// This module is used to initialize Facebook authentication
// ===============================================================================

// Load facebook strategy for passport
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/user');

// Config variables
var config = require('./apiConfig');

module.exports = function(passport) {
  
    // Passort session setup
    // =============================================================================
    // passport needs ability to serialize and unserialize users out of session

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });


    // Facebook stratgy
    // =============================================================================
    passport.use(new FacebookStrategy({
        clientID        : config.facebookAuth.clientID,
        clientSecret    : config.facebookAuth.clientSecret,
        callbackURL     : config.facebookAuth.callbackURL,
        enableProof     : true
    },

    // Facebook will send back the token and profile
    function(token, refreshToken, profile, done) {
        process.nextTick(function() {
            // Try to find the user based on its facebook id.
            User.findByFacebookId(profile.id, function(err, user) {
                // Abort misson if DB or facebook error
                if (err)
                    return done(err, false);

                // If the user was found, login is successful
                if (user)
                    return done(null, user);
                
                else {
                    // Otherwise, create a new user with info from Facebook.
                    var newUser = new User(profile.id, token, profile.displayName);

                    // Save user to database
                    newUser.saveToDb(function(err, user) {
                        if (err)
                            throw err;

                        // If successful, return the new user
                        return done(null, user);
                    });
                }
            });
        });
    }));
}
