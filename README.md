# InSight
A Financial Literacy App that rewards users for curiosity and completing learning modules.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Clone to your local machine. 

There are two repos inside the InSight's root repository - app and server. 
Inside each of these run:

```
npm install
```

Run start in the app root to start the client
```
npm start
```
For local database testing, we use MariaDB and have seed data to populate on start. You will need MySQL installed locally, and a .env file with appropriate variables: 
```
host = 'localhost'
dialect = 'mariadb'
database = 'Insight'
port = 3306 //(typical mysql port)
user = YOURUSERNAME
pwd = YOURPASSWORD
```

## Source Files
### assets 
  * 3 folders in here: fonts, icons and images

### components 
  * This is where we place all our shared React components. Usually these components are the ones that we call “dummy”, that have no state logic and can be easily reused across the app.

### views 
  * These are our application screens, the ones that we navigate from one to another. These are also React components, but they are the ones that we call containers, because they contain their own state.
### services 
  *  These are the functions that wrap the API calls.

## Built With

* [React-Native](https://facebook.github.io/react-native/) - The mobile framework used
* [Jest](https://jestjs.io/) - Testing library
* [MariaDB](https://mariadb.org/) - Database Manager
* [D3](https://d3js.org/) - Used to generate visual data graphs

## Team

| <a href="https://github.com/tcharles23" target="_blank">**Titus**</a> | <a href="https://github.com/amberjones" target="_blank">**Amber**</a> |   <a href="https://github.com/btheard3" target="_blank">**Brandon**</a> |<a href="https://github.com/BunnyDunker" target="_blank">**Eliott**</a> |
| :---: |:---:| :---:| :---: |
| [![Titus](https://avatars3.githubusercontent.com/u/46572767?s=50)](https://github.com/tcharles23)  |[![Amber](https://avatars0.githubusercontent.com/u/51866859?s=50)](https://github.com/amberjones)  | [![Brandon](https://avatars0.githubusercontent.com/u/24530908?s=50)](https://github.com/btheard3)  | [![Eliott](https://avatars0.githubusercontent.com/u/35610640?s=50)](https://github.com/BunnyDunker) | 


