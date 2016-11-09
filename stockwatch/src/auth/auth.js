import config from '../config/config';

var listeners = [];
var self = module.exports = {

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

  requireLogin(nextState, replace){
    // Require that we are logged in.
    if (! self.isLoggedIn()) {
      // If not, redirect to login page.
      self.redirect(nextState, replace, '/logg-inn');
    }
  },

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
        delete localStorage.token;
        callback();
      });
  },

// Let components listen to this in case we log in or out.
  onChange(){
    for (var func of listeners)
      func();
  },

  addListener(func){
    listeners.push(func);
  },

  removeListener(func){
    var index = listeners.indexOf(func);
    if (index > -1){
      listeners.splice(index, 1);
      console.log("Fant Funksjon!!!!!!!!!!")
    }
  }
}
