import React from 'react';
import {
  Button,
  View,
  Text,
} from 'react-native';
import { Auth } from 'aws-amplify';

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text> Home Screen </Text>
        <Button onPress={() => Auth.signOut()} title="Sign out" />
      </View>
    );
  }
}

export default HomeScreen;
