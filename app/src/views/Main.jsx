import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';
import cascadeBackground from '../assets/images/cascade.png';

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

function MainScreen() {
  const [fontLoaded, setFontLoad] = useState(true);
  return (
    <ImageBackground source={require('../assets/images/cascade.png')} style={{ width: '100%', height: '100%' }}>
      <Header // Temporary header with button to eventually open drawer
        leftComponent={
          (
            <TouchableOpacity onPress={() => { /* Open Drawer */ }}>
              <Icon
                name="bars"
                style={{
                  color: 'white',
                  padding: 10,
                  marginLeft: 10,
                  fontSize: 20,
                }}
              />
            </TouchableOpacity>
          )
        }
      />
      <View style={styles.container}>
        {fontLoaded ? (
          <Text style={styles.logoText}>Welcome to InSight!</Text>
        ) : null}
      </View>
    </ImageBackground>
  );
}

export default MainScreen;
