import React from 'react';
import Main from './src/views/Main.jsx'
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CourseScreen from './src/views/Course';
import MapScreen from './src/views/Map.jsx';
import ProfileScreen from './src/views/Profile.jsx';
import MainScreen from './src/views/Main.jsx';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
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
