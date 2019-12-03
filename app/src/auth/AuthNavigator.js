import { createStackNavigator } from 'react-navigation-stack';

import AuthScreen from './AuthScreen';

export default createStackNavigator(
  {
    Auth: { screen: AuthScreen },
  },
);
