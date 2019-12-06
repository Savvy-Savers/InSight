import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

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
          <Text>Welcome to InSight!</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default MainScreen;
