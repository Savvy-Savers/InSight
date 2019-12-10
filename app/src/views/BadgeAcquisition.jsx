import React, { useState, useEffect } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';
import { deployment } from 'react-native-dotenv';
import axios from 'axios';
import Confetti from './Confetti';


const BadgeAcquisition = (props) => {
  const [visible, setVisible] = useState(false);
  const [badgeAchievement, setBadgeAchievement] = useState(null);
  const [courseStatus, setCourseStatus] = useState(null);
  const [profile, setProfile] = useState(null);
  const { navigate } = useNavigation();
  const [isLoaded, setLoadStatus] = useState(false);
  const badgeId = props.courseBadgeId;


  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const nav = () => navigate('Map');

  // We need to retrieve the badge image for the course and display it
  // also assign the user the badge and experince points
  useEffect(() => {
    AsyncStorage.getItem('@token')
      .then((token) => axios.get(`http://${deployment}:8080/profile/user/${token}`))
      // check the status of the badge acquisition for the user
      .then((profileData) => {
        setProfile(profileData.data);
        return axios.get(`http://${deployment}:8080/course/status/${profileData.data.id}/${badgeId}`)
          .then((status) => {
            setCourseStatus(status.data);
            if (status.data === false) {
              return axios.post(`http://${deployment}:8080/course/user/${profileData.data.id}/badge/${badgeId}`);
            }
            return axios.get(`http://${deployment}:8080/course/badge/${badgeId}`);
          })
          .then((badge) => {
            setBadgeAchievement(badge.data || {});
            setLoadStatus(true);
          });
      });
  }, []);

  const styles = {
    parent: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <View>
      <Button title="Finish Quiz!" onPress={toggleOverlay} />
      {isLoaded ? (
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay} style={styles.parent}>
          <Confetti badgeAchievement={badgeAchievement} courseStatus={courseStatus} nav={nav} />
        </Overlay>
      ) : null}
    </View>
  );
};

export default BadgeAcquisition;
