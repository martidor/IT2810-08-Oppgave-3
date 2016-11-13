
# Stockwatch - written in React

*GROUP 8* - *NTNU COURSE IT2810* https://www.ntnu.no/studier/emner/IT2810

### Introduction
Stockwatch is your number one source for keeping track of stock values. Using data generated from Oslo Stock Exchange' API, stock values from all the listed businesses in Norway are updated in real time. By creating your own profile, you can easily manage your equities and find new and exciting stocks all in one place.

The react application is running at http://it2810-08.idi.ntnu.no.

### Documentation
Installation guide, the file structure as well as some basic documentation is located on this page. For a more thorough documentation and a description of how the requirements were fulfilled, take a look at `/IT2810_Documentation.pdf`.

### How to install

Make sure that you are running node v6 or higher, and npm v3 or higher. Some configuration is required in order for the application to run properly. We have two config files and a database that must set up. These are ignored by git, in order to support different configuration on different pages. We have included examples of everything, so it should not be too hard to configure. Start off by cloning the git directory with `git clone`, replace <username> with your own username:

1. `git clone https://<username>@bitbucket.org/trondaal/it2810-08-oppgave-3.git`
2. Navigate to `stockwatch/src/config` and `api/config`. Both of these directories has a filed called `apiConfigExample.js`. Create a copy of each of the files, and call them `apiConfig.js`. Fill in correct URLs for the API and the site in the config files. Credentials for a Facebook app must also be included in the API config in order for Facebook login to work.
3. Navigate to `/api/database`, make a copy of `example-database.db` and call it `database.db`. 
4. Run the following command in both `/api` and `/stockwatch` (in two different terminal windows).
```
    npm install
    npm start
```

### File structure
When deciding on a project structure, we read up on different conventions and recommended structures. There are no standard, but it a big part of the React community appraised the structure explained below (for projects this size). All our main pages (components) are located in `src/views`. Other shared components are placed in `src/components`.

#### React application structure
```

src    
├── App.js
├── App.test.js
├── auth
│   └── auth.js
├── components
│   ├── format
│   │   └── FormattedDateTime.js
│   ├── highcharts
│   │   ├── Chart.js
│   │   ├── ChartOptions.js
│   │   └── options
│   │       ├── Equity.js
│   │       ├── InvestedAndValue.js
│   │       ├── PercentReturnOnInvestment.js
│   │       ├── ReturnOnInvestment.js
│   │       └── Ticker.js
│   ├── login
│   │   └── LoginModal.js
│   ├── navigation-bar
│   │   └── NavigationBar.js
│   ├── notes
│   │   ├── NoteInput.js
│   │   ├── Notes.css
│   │   └── Notes.js
│   ├── portfolio
│   │   ├── DeletePortfolioEquity.js
│   │   ├── PortfolioEquityHelper.js
│   │   ├── PortfolioEquityModal.js
│   │   ├── PortfolioEquityRow.js
│   │   ├── PortfolioFilter.js
│   │   └── PortfolioTotal.js
│   └── search
│       ├── AddSearchEquityForm.js
│       ├── SearchEquity.css
│       ├── SearchEquity.js
│       └── SearchEquityModal.js
├── config
│   ├── apiConfig.js
│   ├── apiConfigExample.js
│   └── color.js
├── index.css
├── index.js
└── views
    ├── home
    │   ├── Home.css
    │   └── Home.js
    ├── login
    │   ├── Login.css
    │   └── Login.js
    ├── not-found
    │   ├── NotFound.js
    │   └── ApiNotWorking.js
    ├── portfolio
    │   ├── Portfolio.css
    │   └── Portfolio.js
    ├── search
    │   ├── Search.css
    │   └── Search.js
    └── stats
        ├── Stats.css
        └── Stats.js

```

#### API structure
```

api
├── config
│   ├── apiConfig.js
│   ├── apiConfigExample.js
│   ├── passport.js
│   └── testuser.js
├── database
│   ├── database.db
│   ├── database.js
│   ├── database.sql
│   └── example-database.db
├── external-apis
│   └── oslobors.js
├── helper
│   ├── cronjob.js
│   └── helper.js
├── models
│   ├── equity.js
│   └── user.js
├── package.json
├── routes
│   ├── auth.js
│   └── index.js
└── server.js

```

### Built With
#### React frontend app:
* [React](https://reactjs.net/) - The main libary used.
* [Node](https://nodejs.org/en/) - JavaScript runtime.
* [npm](https://www.npmjs.com/)- Package manager for node programs.
* [React-bootstrap](https://react-bootstrap.github.io/) - React implementation for bootstrap.
* [React-router](https://github.com/ReactTraining/react-router) - React Routing.
* [React-router-bootstrap](https://github.com/react-bootstrap/react-router-bootstrap) - Integration between React Router and React-Bootstrap.
* [React-intl](https://github.com/yahoo/react-intl) - Components and an API to format dates, numbers, and strings, including pluralization and handling translations.
* [Fuse.js](http://fusejs.io/) - Frontend library for searching.
* [Highcharts](http://www.highcharts.com/) - Interactive graphs in pure JS.
* [FontAwesome](http://fontawesome.io/) - Scalable vector icons.
* [React-textarea-autosize](https://github.com/andreypopp/react-textarea-autosize) - Textarea which automatically resizes as content changes. 

#### API
* [Express](http://expressjs.com/) - Node.js web application framework.
* [Passport](http://passportjs.org/) - Passport is authentication middleware for Node.js.
* [SQLite](https://sqlite.org/) - Cross-platform C library that implements a self-contained, embeddable, zero-configuration SQL database engine.
* [node-sqlite3](https://github.com/mapbox/node-sqlite3) - Asynchronous, non-blocking SQLite3 bindings for Node.js.
* [node-cron](https://github.com/kelektiv/node-cron) - Cron for NodeJS.

### Initial choiche of framework: React
All of the team members felt that they got a better grip of React. We also think that we get the functionality that we need from React. Since Angular is a more comprehensive framework, we believe it is unnecessary to use this. During the development of the prototype in Angular, the group also encountered some unexpected problems with git. More functionality was also implemented in the React prototype, and we think we have a better basis there.
React’s compile-time error versus Angular’s run-time error, having React display more of a comprehensive error-log helping us the developers solve issues faster. React will provide both line number, and missing unclosed tags making finding issues quicker.
Most of Angular’s documentaions is written in TypeScript, while this can be converted to, or replaced with JavaScript, our team have more experience with JavaScript, and feel it will be easier to apply our knowledge with React.

### Authors
- Eirik Fosse
- Martin Dørum
- Joakim Grønstad Lindgren
- Christoffer A. Nilsen
- Cornelius Grieg Dahling
- Kristian Skog
