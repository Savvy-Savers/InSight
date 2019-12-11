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
  const [badgeAchievement, setBadgeAchievement] = useState(null);
  const [userId, setUserId] = useState(null);
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

  useEffect(() => {
    // get the badge data
    axios.get(`http://${deployment}:8080/course/badge/${courseBadgeId}`)
      .then((badge) => {
        setBadgeAchievement(badge.data || {});
      });
    // then get the user status
    AsyncStorage.getItem('@userId')
      .then((Id) => {
        setUserId(Id);
        return axios.get(`http://${deployment}:8080/course/status/${Id}/${courseBadgeId}`);
      })
      .then((status) => {
        setCourseStatus(status.data);
        if (status.data === false) {
          // add the badge to the user table in database.
          return axios.post(`http://${deployment}:8080/course/user/${userId}/badge/${courseBadgeId}`);
        }
        return null;
      });
    setLoadStatus(true);
  }, []);

  if (!isLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
      <Button title="Finish Quiz! " onPress={toggleModal} />
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
