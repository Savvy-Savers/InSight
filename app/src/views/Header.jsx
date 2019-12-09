import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={{fontSize: 28, alignSelf: 'center'}}>
        Loan Calculator
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    width: 500,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    position: 'absolute',
    top: 60
  }
});

export default Header;