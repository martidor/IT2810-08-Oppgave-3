
# Stockwatch - written in React

*GROUP 8* - *NTNU COURSE IT2810* https://www.ntnu.no/studier/emner/IT2810

The project is located in the `stockwatch` folder. Previous assignments are located in the `previous_assignments` folder.

### Introduction
Stockwatch is your number one source for keeping track of stock values. Using data generated from Oslo Stock Exchange' API, stock values from all the listed businesses in Norway are updated in real time. By creating your own profile, you can easily manage your equities and find new and exciting stocks all in one place.

The react application is running at http://it2810-08.idi.ntnu.no.

### File structure

The main pages are set up in different folders, whereas the components that's not site-specific are placed in `/components`. This way the file-structure is clear and concise, which makes it easy to navigate. The following tree structure starts from the `stockwatch` folder.

```
    
    src
    │   App.css
    │   App.js
    │   App.test.js
    │   dummy-funds.json
    │   index.css
    │   index.js
    │   
    ├───components
    │       avatar.png
    │       EditProfile.js
    │       FundModal.css
    │       FundModal.js
    │       FundRow.css
    │       FundRow.js
    │       NavigationBar.js
    │       ProfileTable.css
    │       ProfileTable.js
    │       SearchedFund.css
    │       SearchedFund.js
    │       
    ├───home
    │       Home.css
    │       Home.js
    │       osloborschart.png
    │       
    ├───login
    │       Login.js
    │       
    ├───notfound
    │       NotFound.js
    │       
    ├───overview
    │       Overview.js
    │       
    ├───profile
    │       Profile.css
    │       Profile.js
    │       
    └───search
            Search.css
            Search.js

```

### How to install

Clone the git directory with `git clone`, replace <username> with your own username:
```
    git clone https://<username>@bitbucket.org/trondaal/it2810-08-oppgave-3.git
```
Go into the directory `/it2810-08-oppgave-3/stockwatch/` and install npm
```
    npm install #Installs node modules in your folder
    npm start #Opens the website on port 3000 (by default)
```

### Built With
* [React](https://reactjs.net/) - The main libary used
* [Node](https://nodejs.org/en/) - JavaScript runtime
* [npm](https://www.npmjs.com/)- Package manager for node programs
* [React-bootstrap](https://react-bootstrap.github.io/) - React implementation for bootstrap
* [React-router](https://github.com/ReactTraining/react-router) - React Routing
* [Bower](https://bower.io/) - Package manange for frontend packages
* [Fuse.js](http://fusejs.io/) - Frontend library for searching
* [Facebook-login](https://github.com/kennetpostigo/react-facebook-login-component) - Facebook login component

### Authors
- Eirik Fosse
- Martin Dørum
- Joakim Grønstad Lindgren
- Christoffer A. Nilsen
- Cornelius Grieg Dahling
- Kristian Skog
