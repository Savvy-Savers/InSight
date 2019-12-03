import React from 'react';
import {
  ActivityIndicator,
  View,
} from 'react-native';
import { Auth, Hub } from 'aws-amplify';

class AuthLoadingScreen extends React.Component {

  async componentDidMount() {
    this.checkIfAuthenticated();
    Hub.listen('auth', async (data) => {
      switch (data.payload.event) {
        case 'signIn':
          this.props.navigation.navigate('Main');
          break;
        case 'signOut':
          this.props.navigation.navigate('Auth');
          break;
        default:
          break;
      }
    });
  }

  async checkIfAuthenticated() {
    let currentSession = null;
    try {
      currentSession = await Auth.currentSession();
    } catch (err) {
      console.log(err);
    }
    this.props.navigation.navigate(currentSession ? 'Main' : 'Auth');
  }

  render() {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

}

export default AuthLoadingScreen;
