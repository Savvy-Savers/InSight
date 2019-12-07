import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios';
import NavBar from './NavBar';

function ProfileScreen(props) {
  // Profile info
  const [profile, setProfile] = useState({});
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    axios.get('http://18.206.35.110:8080/profile/user/1') // FIXME: modify user id# for authentication
      .then((profileData) => {
        setProfile(profileData.data);
        return axios.get('http://18.206.35.110:8080/profile/user/1/badges');
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
        <Text>{`${profile.firstName} ${profile.lastName}`}</Text>
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
