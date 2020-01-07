# InSight
A Financial Literacy App that rewards users for curiosity and completing learning modules.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Before you begin, ensure you have met the following requirements: 
  * You have installed the latest version of npm and node
  * You have installed Expo

Fork this reposity and clone to your local machine. 

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
The mobile app also needs a .env file with the following variables. The androidId and iphoneId are the google client IDs for the google authentication and will need to be acquired from google's developer console by making a new project and creating new OAuth client IDs for android and iOs. and the deployment variable is where to put the location of your running server, whether that's localhost if you are running the app on a Mac (see note at the bottom) or if you are tunneling your localhost or have a deployed server with an IP address.
```
andriodId='1234.apps.googleusercontent.com';
iphoneId='1234.apps.googleusercontent.com';
deployment=localhost
```

## Source Files
### assets 
  * 3 folders in here: fonts, icons and images

### components 
  * This is where we place all our shared React components. Usually these components are the ones that we call stateless or function components, that have no state logic and can be easily reused across the app.

### views 
  * These are our application screens, the ones that we navigate from one to another. 

### services 
  *  These are the functions that wrap the API calls.

## Built With

* [React-Native](https://facebook.github.io/react-native/) - The mobile framework used
* [Expo.io](https://expo.io/) - Dev tools
* [Jest](https://jestjs.io/) - Testing library
* [MariaDB](https://mariadb.org/) - Database Manager
* [D3](https://d3js.org/) - Used to generate visual data graphs

## Note on the Localhost Testing In Expo
Only IOS through Xcode can connect to localhost without tunneling. Running the Android Studio emulator or the Expo app will require either tunneling or deployment of the server.

## Team

| <a href="https://github.com/tcharles23" target="_blank">**Titus**</a> | <a href="https://github.com/amberjones" target="_blank">**Amber**</a> |   <a href="https://github.com/btheard3" target="_blank">**Brandon**</a> |<a href="https://github.com/BunnyDunker" target="_blank">**Eliott**</a> |
| :---: |:---:| :---:| :---: |
| [![Titus](https://avatars3.githubusercontent.com/u/46572767?s=50)](https://github.com/tcharles23)  |[![Amber](https://avatars0.githubusercontent.com/u/51866859?s=50)](https://github.com/amberjones)  | [![Brandon](https://avatars0.githubusercontent.com/u/24530908?s=50)](https://github.com/btheard3)  | [![Eliott](https://avatars0.githubusercontent.com/u/35610640?s=50)](https://github.com/BunnyDunker) | 


