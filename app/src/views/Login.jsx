import React from "react"
import { StyleSheet, Text, View, Image, Button } from "react-native"
// import * as Expo from "expo"
import Main from './Main';
import * as Google from "expo-google-app-auth";
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: ""
    }
    // this.result = this.result.bind(this);
  }
  signIn = async () => {
    try {
      const { type, accessToken, user} = await Google.logInAsync({
        androidClientId:
          "847385043058-1v26bjo0eahcc7sal4f86s7ed04mtjro.apps.googleusercontent.com",
        iosClientId: '847385043058-lo98oseuebn051god5a24pacgevrubp0.apps.googleusercontent.com',
        scopes: ["profile", "email"]
      })
    
      if (type === "success") {
        console.log('google user',user);
        this.setState({
          signedIn: true,
          name: user.name,
           photoUrl: user.photoUrl
        })
        return axios.post('http://localhost:8080/profile/user/', {
           user,
          })
            .then(function (response) {
            //  return axios.get({})
            })
            .catch(function (error) {
              console.log(error);
            });
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }

//   result = async () => {
//     await AuthSession.startAsync({
//     authUrl:
//       `https://accounts.google.com/o/oauth2/v2/auth?` +
//       `&client_id=${googleWebAppId}` +
//       `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
//       `&access_type=offline` +
//       `&scope=profile`,
//   });
// }
  render() {
    return (
      <View style={styles.container}>
        {this.state.signedIn ? (
          <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl}/>
        ) : (
            <LoginPage signIn={this.signIn} />
          )}
      </View>
    )
  }
}

const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  )
}

const LoggedInPage = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})