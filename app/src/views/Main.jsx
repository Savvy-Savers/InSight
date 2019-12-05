import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
        <Text>Hello, this is our main page!</Text>
      </View>
    </View>
  );
}

export default MainScreen;
