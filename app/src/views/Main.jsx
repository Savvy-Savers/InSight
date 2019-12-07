import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import NavBar from './NavBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
