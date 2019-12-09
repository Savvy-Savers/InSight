import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios';
import NavBar from './NavBar';

const styles = StyleSheet.create({
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 3,
    borderRadius: 150,
  },
});

function ProfileScreen(props) {
  // Profile info
  const [profile, setProfile] = useState({});
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('@token') // Retrieve token stored from login
      .then((token) => axios.get(`http://localhost:8080/profile/user/${token}`))
      .then((profileData) => {
        setProfile(profileData.data);
        return axios.get(`http://localhost:8080/profile/user/${profileData.data.id}/badges`);
      })
      .then((badgesData) => {
        setBadges(badgesData.data);
      });
  }, []); // Array necessary to not repeat endlessly

  return (
    // Basic display to show necessary variables, to be revised
    <View style={{ flex: 1 }}>
      <NavBar navigation={props.navigation} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.image} source={{ uri: profile.photoUrl }} />
        <Text>{`${profile.firstName} ${profile.lastName}`}</Text>
        <Text>{`${profile.givenName} ${profile.familyName}`}</Text>
        <Text>{`${profile.totalExperiencePoints} XP`}</Text>
        <Text>{`Goals: ${profile.goal}`}</Text>
      </View>
      <View style={{ flex: 5 }}>
        <Text>Badges go Here!</Text>
        { // Map to display the badges
          badges.map((badge) => (
            <ListItem
              key={badge.name}
              title={badge.name}
              leftAvatar={{ source: { uri: badge.iconUrl } }}
              bottomDivider
              subtitle={badge.description}
            />
          ))
        }
      </View>
    </View>
  );
}

export default ProfileScreen;
