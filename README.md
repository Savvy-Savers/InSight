# InSight
A Financial Literacy App that rewards users for curiosity and completing learning modules.

<div>
<img src = "https://user-images.githubusercontent.com/51866859/72934109-b0a7e200-3d28-11ea-87b6-6c9cfa1db97b.png" width = "200" style="padding: 10px">

<img src = "https://user-images.githubusercontent.com/51866859/72934825-ee593a80-3d29-11ea-98e2-0cea2613a0ef.gif" width = "200" style="padding: 10px">
<img src = "https://user-images.githubusercontent.com/51866859/72934961-23fe2380-3d2a-11ea-9cb9-69b249eaa40a.png" width = "200" style="padding: 10px">
</div>

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
The client side app also needs a .env file with the following variables. 
```
andriodId='1234.apps.googleusercontent.com';
iphoneId='1234.apps.googleusercontent.com';
deployment=localhost
```
The androidId and iphoneId are the google client IDs for the google authentication and will need to be acquired from Google's developer console by making a new project and creating new OAuth client IDs.

The deployment variable is the location of your running server, whether that's localhost (see note at the bottom), tunneling, or have a deployed server with an IP address.


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


