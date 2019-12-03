import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './HomeScreen';

export default createStackNavigator(
  {
    Home: { screen: HomeScreen },
  },
  { initialRouteName: 'Home' },
);
