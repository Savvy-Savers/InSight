import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import { useNavigation } from 'react-navigation-hooks';
import { deployment } from 'react-native-dotenv';
import axios from 'axios';
import Colors from '../constants/Colors';

const MapModal = (props) => {
  const { navigate } = useNavigation();
  const [isModalVisible, setModalVisible] = useState(true);
  const { course, toggleModal, status } = props;
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
    modal: {
      backgroundColor: 'white',
      padding: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      borderColor: 'lightblue',
      height: 240,
      flex: 0,
      flexBais: 30,
      marginTop: 200,
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
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
      margin: 5,
    },
    stats: {
      color: '#000',
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 5,
    },
    badge: {
      width: 80,
      height: 80,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      margin: 20,
      backgroundColor: Colors.primary,
    },
  };

  useEffect(() => {
    const getBadge = async () => {
      const badge = await axios.get(`http://${deployment}:8080/course/${course.id}/badge`);
      setBadgeAchievement(badge.data || {});
    };
    getBadge();
  }, []);

  return (
    <View style={styles.parent}>
      <Modal
        isVisible={isModalVisible}
        style={styles.modal}
        backdropOpacity={0}
        onBackdropPress={() => toggleModal()}
      >
        <View style={styles.achievement}>
          <Text style={styles.name}>{course.topic}</Text>
          {/* if the course is completed, we show the badge achieved, else placeholder image */}
          {status ? (
            <View style={styles.achievement}>
              <Image style={styles.badge} source={{ uri: badgeAchievement.iconUrl }} />
              <Text style={styles.stats}>{`You've already earned the ${badgeAchievement.name} badge`}</Text>
              <Button style={styles.button} 
                buttonStyle={{ backgroundColor: Colors.primary }}
                title="Review Course" onPress={() => { toggleModal(); navigate('Course', { id: course.id, name: course.topic }); }} 
              />
            </View>
          ) : (
            <View style={styles.achievement}>
              <Image style={styles.badge} source={require('../assets/icons/purple-square-question-mark-icon-by-vexels.png')} />
              <Text style={styles.stats}>{`Worth ${badgeAchievement.experiencePoints} experience points`}</Text>
              <Button 
                style={styles.button} 
                buttonStyle={{ backgroundColor: Colors.primary }}
                title="Start Learning! " 
                onPress={() => { toggleModal(); navigate('Course', { id: course.id, name: course.topic }); }} 
              />
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default MapModal;
