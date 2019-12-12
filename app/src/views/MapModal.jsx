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

const MapModal = (props) => {
  const { navigate } = useNavigation();
  const [isModalVisible, setModalVisible] = useState(true);
  const { course, toggleModal, status } = props;
  console.log(props);
  const [badgeAchievement, setBadgeAchievement] = useState({});

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
    trueModal: {
      backgroundColor: 'white',
      padding: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
      height: 250,
      flex: 0,
      flexBais: 30,
      marginTop: 200,
    },
    falseModal: {
      backgroundColor: 'white',
      padding: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
      height: 200,
      flex: 0,
      flexBais: 30,
      marginTop: 200,
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
      width: 50,
      height: 50,
      margin: 20,
    },
    button: {
      margin: 20,
    },
  };

  useEffect(async () => {
    const { id } = course;
    const badge = await axios.get(`http://${deployment}:8080/course/${id}/badge'`);
    setBadgeAchievement(badge.data || {});
  });


  return (
    <View style={styles.parent}>
      <Modal
        isVisible={isModalVisible}
        style={status ? styles.trueModal : styles.falseModal}
        backdropOpacity={0}
        onBackdropPress={() => toggleModal()}
      >
        <View style={styles.achievement}>
          <Text style={styles.name}>{course.topic}</Text>
          {/* if the course is completed, we show the badge achieved, else show the placeholder image */}
          {status ? (
            <View>
              <Text style={styles.description}>{`${badgeAchievement.description}`}</Text>
              <Image style={styles.badge} source={{ uri: badgeAchievement.iconUrl }}/>
              <Text style={styles.name}>{`${badgeAchievement.name}`}</Text>
            </View>
          ) : (
            <View>
              <Text style={styles.description}>{`${badgeAchievement.description}`}</Text>
              <Text style={styles.stats}>{`Worth ${badgeAchievement.experiencePoints} experience points`}</Text>
            </View>
          )}
          <Button style={styles.button} title="Start Learning! " onPress={() => { toggleModal(); navigate('Course', { id: course.id, name: course.topic }); }} />
        </View>
      </Modal>
    </View>
  );
};

export default MapModal;
