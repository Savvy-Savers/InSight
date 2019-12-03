import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthLoadingScreen from './AuthLoadingScreen';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Main: MainNavigator,
    Auth: AuthNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)
);