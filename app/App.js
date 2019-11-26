import React from 'react';
import Main from './src/views/Main.jsx'
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CourseScreen from './src/views/Course';
import MapScreen from './src/views/Map.jsx';
import ProfileScreen from './src/views/Profile.jsx';
import MainScreen from './src/views/Main.jsx';


// This is the entry point for Expo! We cann't move this file - so instead, 
// we are using it to return the rest of our app views. 
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// This is our navigation router, these are the pages names, and the screens. 
const AppNavigator = createDrawerNavigator(
  {
    Main: MainScreen,
    Course: CourseScreen,
    Map: MapScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Main',
  }
  );

  const AppContainer = createAppContainer(AppNavigator);
