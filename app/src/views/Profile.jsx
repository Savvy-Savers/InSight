import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

function ProfileScreen() {
  // Profile info
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios.get('http://localhost/profile/user/1') // FIXME: modify user id# for authentication
      .then((profileData) => {
        setProfile(profileData.data);
      });
  }, []); // Array necessary to not repeat endlessly

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{`${profile.firstName} ${profile.lastName}`}</Text>
      <Text>{`${profile.totalExpriencePoints} XP`}</Text>
    </View>
  );
}

export default ProfileScreen;
