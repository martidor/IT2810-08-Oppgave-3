// This module works as middleware to check an perform authentication
// towards the API
// =============================================================================
import config from '../config/apiConfig';

let apiWorking = true;
let listeners = [];
let self = module.exports = {

  redirect(nextState, replace, path){
    // Redirect to a path.
    replace({
      pathname: path,
      state: { nextPathname: nextState.location.pathname }
    });
  },

  login(token) {
    // Save the token in local storage to indicate that we are logged in
    localStorage.token = token;
  },

  logout(nextState, replace) {
    // Remove token from localstora
    delete localStorage.token;
    // Send a logout request to the server
    fetch(config.logoutUrl, { credentials: 'include' });
    // Notify listeners that the login state has changed
    self.onChange();
    // Redirect to home page.
    self.redirect(nextState, replace, '/');
  },

  isLoggedIn() {
    // Check if we have a login token in local storage.
    return !!localStorage.token;
  },

  // Method that is ran before routing to a protected page,
  // will redirect if the user is not logged in
  requireLogin(nextState, replace){
    // Require that we are logged in.
    if (! self.isLoggedIn()) {
      // If not, redirect to login page.
      self.redirect(nextState, replace, '/logg-inn');
    }
  },

  // Method to check if the user is logged in
  checkIfLoggedInOnServer(callback){
    // Send a request to the server and check if we are authenticated.
    fetch(config.isAuthenticatedUrl,
      { credentials: 'include' })
      .then((response) => response.json())
      .then((json) => {
        if (json.authenticated)
          self.login(json.token);
        else
          delete localStorage.token;
        callback();
      })
      .catch((error) => {
        apiWorking = false;
        delete localStorage.token;
        callback();
      });
  },

  // Notify listeners that the auth state has changed
  onChange(){
    for (var func of listeners)
      func();
  },

  // Add a function that will run if the auth state changes.
  addListener(func){
    listeners.push(func);
  },

  // Remove the listener on the auth state
  removeListener(func){
    var index = listeners.indexOf(func);
    if (index > -1){
      listeners.splice(index, 1);
    }
  },

  // Check if the API is up and running
  apiIsWorking(){
    return apiWorking;
  }
}
