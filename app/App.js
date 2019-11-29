import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CourseScreen from './src/views/Course';
import MapScreen from './src/views/Map';
import ProfileScreen from './src/views/Profile';
import MainScreen from './src/views/Main';
import AboutScreen from './src/views/About';
import SettingScreen from './src/views/Setting';
import PolicyScreen from './src/views/Policy';
import ResourcesScreen from './src/views/Resources';
import ToolsScreen from './src/views/Tools';
import QuizScreen from './src/views/Quiz';


// This is the entry point for Expo! We cann't move this file - so instead,
// we are using it to return the rest of our app views.
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// This is our navigation router, these are the pages names, and the screens.
const CourseNavigator = createStackNavigator(
  {
    Map: {
      screen: MapScreen,
      navigationOptions: {
        title: 'Map',
      },
    },
    Course: {
      screen: CourseScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name}`,
      }),
    },
    Quiz: QuizScreen,
  },
  {
    initialRouteName: 'Map',
  },
);

const AppNavigator = createDrawerNavigator(
  {
    Main: MainScreen,
    Profile: ProfileScreen,
    Map: CourseNavigator,
    'Course Tools': ToolsScreen,
    About: AboutScreen,
    Settings: SettingScreen,
    Resources: ResourcesScreen,
    Policy: PolicyScreen,
  },
  {
    initialRouteName: 'Main',
  },
);

const AppContainer = createAppContainer(AppNavigator);
