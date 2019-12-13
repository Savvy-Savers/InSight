import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import NavBar from './NavBar';
import Colors from '../constants/Colors';

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
    <View style={styles.container}>
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
