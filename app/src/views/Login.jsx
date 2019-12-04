import React from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'

import { Main } from './navigation'

export default class Login extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', password: '', email: '',
    };
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val});
  }

  login = async () => {
    const { username, email, password} = this.state
    try {
      console.log('user successfully signed up!');
    } catch (err) {
      console.error('Something went wrong!', err);
    }
  }

  render() {
    return (
      <Main style={StyleSheet.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText('username', val)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={val => this.onChangeText('email', val)}
            />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize={true}
            placeholderTextColor="white"
            onChangeText={val => this.onChangeText('password', val)}
            />
            <Button
              title="Login"
              onPress={this.login}
              />
      </Main>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})