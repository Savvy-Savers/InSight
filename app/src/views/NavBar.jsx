import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

// Header for app
function NavBar(props) {
  return (
    <View>
      <Header
        leftComponent={
          (
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
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
    </View>
  );
}

export default NavBar;
