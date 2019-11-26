import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class MapScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Map Screen</Text>
                <Button
                    title="Go to course... "
                    // each push we add a new route to the navigation stack
                    onPress={() => this.props.navigation.navigate('Course')}
                />

            </View>
        );
    }
}

