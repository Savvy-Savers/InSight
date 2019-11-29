import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import axios from 'axios';

function ProfileScreen() {
  // Profile info
  const [profile, setProfile] = useState({});
  const [Badges, setBadges] = useState([]);

  useEffect(() => {
    axios.get('http://18.206.35.110:8080/profile/user/1') // FIXME: modify user id# for authentication
      .then((profileData) => {
        setProfile(profileData.data);
      });
  }, []); // Array necessary to not repeat endlessly

  return (
    // Basic display to show necessary variables, to be revised
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Header />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{`${profile.firstName} ${profile.lastName}`}</Text>
        <Text>{`${profile.totalExpriencePoints} XP`}</Text>
        <Text>Display Level Here</Text>
        <Text>{`Goals: ${profile.goal}`}</Text>
      </View>
      <View style={{ flex: 5, alignItems: 'center' }}>
        <Text>Badges go Here!</Text>
        { // Map to display the badges
          Badges.map((badge) => (
            <ListItem
              key={badge.name}
              title={badge.name}
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
