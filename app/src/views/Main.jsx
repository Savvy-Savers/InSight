import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
<<<<<<< HEAD
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';
import cascadeBackground from '../assets/images/cascade.png';
=======
import NavBar from './NavBar';
>>>>>>> 09f64012ff92231a9bf53ccae948a27bb0a10aff

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    // fontFamily: 'LobsterTwo-Bold',
    fontSize: 56,
    marginTop: 10,
  },
});

function MainScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={{ uri: './src/assets/images/cascade.png' }} style={{ width: '100%', height: '100%' }}>
        <NavBar navigation={props.navigation} />
        <View style={styles.container}>
          <Text>Welcome to InSight!</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default MainScreen;
