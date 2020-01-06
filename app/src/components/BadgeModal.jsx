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
import Confetti from './Confetti';
import Colors from '../constants/Colors';

const BadgeModal = (props) => {
  const { navigate } = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const { courseBadgeId } = props;
  const [badgeAchievement, setBadgeAchievement] = useState({});
  const [userId, setUserId] = useState(null);
  const [courseStatus, setCourseStatus] = useState(null);

  const styles = {
    parent: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      alignSelf: 'center',
      marginTop: 50,
    },
    achievement: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    modal: {
      backgroundColor: 'white',
      padding: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderColor: 'lightblue',
      height: 340,
      flex: 0,
      flexBais: 30,
      marginTop: 140,
      borderWidth: 5,
    },
    name: {
      color: '#000',
      fontSize: 20,
      fontWeight: 'bold',
      margin: 5,
    },
    description: {
      color: '#000',
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
      margin: 5,
    },
    body: {
      color: '#000',
      fontSize: 14,
      textAlign: 'center',
      fontWeight: 'bold',
      margin: 5,
    },
    stats: {
      color: '#000',
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    badge: {
      width: 100,
      height: 100,
      margin: 10,
    },
    button: {
      position: 'absolute',
      bottom: 0,
      marginBottom: 36,
    },
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
        return null;
      });
  }, []);

  return (
    <View style={styles.parent}>
      <Button 
      style={styles.button} 
      title="Finish Quiz! " 
      buttonStyle={{ backgroundColor: Colors.primary }}
      onPress={() => { toggleModal(); }} />
      <Modal
        isVisible={isModalVisible}
        style={styles.modal}
      >
        {courseStatus === false ? (
          <View style={styles.achievement}>
            <Confetti />
            <Text style={styles.description}>{`${badgeAchievement.description}`}</Text>
            <Image
              style={styles.badge}
              source={{ uri: badgeAchievement.iconUrl }}
            />
            <Text style={styles.name}>{`${badgeAchievement.name}`}</Text>
            <Text style={styles.stats}>{`You've gained ${badgeAchievement.experiencePoints} experience points!`}</Text>
          </View>
        ) : (
          <View>
            <Text style={styles.stats}>{`You've already gained the ${badgeAchievement.name} badge!`}</Text>
            <Text style={styles.stats}> Check it out in your profile.</Text>
          </View>
        )}
        <View style={{ margin: 20 }}>
          <Button 
          style={styles.button} 
          title="Continue Journey " 
          buttonStyle={{ backgroundColor: Colors.primary }}
          onPress={() => { navigate('Map'); }} />
        </View>
      </Modal>
    </View>
  );
};

export default BadgeModal;
