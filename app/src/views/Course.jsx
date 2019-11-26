import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class CourseScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Course Screen</Text>
                <Button
                    title="Go to Next part of course... "
                    // each push we add a new route to the navigation stack
                    onPress={() => this.props.navigation.push('Course')}
                />
                <Button
                    title="Go to Map"
                    onPress={() => this.props.navigation.navigate('Map')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

