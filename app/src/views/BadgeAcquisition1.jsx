import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  AsyncStorage,
  Image,
} from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import { useNavigation } from 'react-navigation-hooks';
import { deployment } from 'react-native-dotenv';
import axios from 'axios';


const BadgeAcquisition1 = (props) => {
  const { navigate } = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const { courseBadgeId } = props;
  const [badgeAchievement, setBadgeAchievement] = useState({});
  const [userId, setUserId] = useState(null);
  const [userProfile, setProfile] = useState();
  const [courseStatus, setCourseStatus] = useState(null);
  const [isLoaded, setLoadStatus] = useState(false);

  const styles = {
    parent: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // const postBadge = () => {
  //   if (courseStatus === false) {
  //     // add the badge to the user table in database.
  //     return axios.post(`http://${deployment}:8080/course/user/${userId}/badge/${courseBadgeId}`);
  //   }
  //   return null;
  // };

  useEffect(() => {
    let profileData = {};
    // get the badge data
    AsyncStorage.getItem('@token')
      .then(async (token) => {
        profileData = await axios.get(`http://${deployment}:8080/profile/user/${token}`);
        setUserId(profileData.data.id);
        return axios.get(`http://${deployment}:8080/course/status/${profileData.data.id}/${courseBadgeId}`);
      })
      .then(async (status) => {
        setCourseStatus(status.data);
        const badge = await axios.get(`http://${deployment}:8080/course/badge/${courseBadgeId}`);
        setBadgeAchievement(badge.data || {});
        if (status.data === false) {
          return axios.post(`http://${deployment}:8080/course/user/${profileData.data.id}/badge/${courseBadgeId}`);
        }
        setLoadStatus(true);
        return null;
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Button title="Finish Quiz! " onPress={() => { toggleModal(); }} />
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          {courseStatus === false ? (
            <View>
              <Text style={styles.description}>{`${badgeAchievement.description}`}</Text>
              <Image
                style={styles.badge}
                source={{ uri: badgeAchievement.iconUrl }}
              />
              <Text style={styles.name}>{`${badgeAchievement.name}`}</Text>
              <Text style={styles.stats}>{`You've gained ${badgeAchievement.experiencePoints} experience points!`}</Text>
            </View>
          ) : null}
          <Button title="Continue Journey " onPress={() => { navigate('Map'); }} />
        </View>
      </Modal>
    </View>
  );
};

export default BadgeAcquisition1;
