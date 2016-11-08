// Load facebook strategy for passport
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/user');

// Auth variables
var configAuth = require('./auth');

// expose this function to our app using module.exports
module.exports = function(passport) {
	// =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        console.log('serializing user');
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        console.log("deserialize");
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // FACEBOOK ================================================================
    // =========================================================================
    passport.use(new FacebookStrategy({
        clientID        : configAuth.facebookAuth.clientID,
        clientSecret    : configAuth.facebookAuth.clientSecret,
        callbackURL     : configAuth.facebookAuth.callbackURL,
        enableProof     : true
    },

    // Facebook will send back the token and profile
    function(token, refreshToken, profile, done) {
        process.nextTick(function() {
            // Try to find the user based on its facebook id.
            User.findByFacebookId(profile.id, function(err, user) {
                // Abort misson on DB or facebook error
                if (err)
                    return done(err, false);

                // If the user was found, login is successful
                if (user)
                    return done(null, user);
                
                else {
                    // Create a new user with info from Facebook.
                    var newUser = new User(profile.id, token, profile.displayName);
                    console.log("new user to save:", newUser);

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
