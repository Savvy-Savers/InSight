import React from 'react';
import {
  Button,
  View,
  StyleSheet
} from 'react-native';
import { Auth } from 'aws-amplify';

class AuthScreen extends React.Component {
  render() {
    return (
      <View style={styles.authScreen} >
        <Button
          onPress={() => Auth.federatedSignIn({ provider: 'google' })}
          title="Signin with Google"
        />
      </View>
    );
  }

}

export default AuthScreen;

const styles = StyleSheet.create({
  authScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});