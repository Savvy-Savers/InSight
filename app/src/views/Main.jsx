import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Main = () => (
    <View style={styles.container}>
        <Text>Hello, this is our main page!
      </Text>
    </View>
)

export default Main;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
