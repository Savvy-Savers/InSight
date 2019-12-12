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


const MapModal = (props) => {
  const { navigate } = useNavigation();
  const [isModalVisible, setModalVisible] = useState(true);
  const { course } = props;
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
    modal: {
      backgroundColor: 'white',
      padding: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
      height: 340,
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
      width: 100,
      height: 100,
      margin: 20,
    },
    button: {
      margin: 20,
    },
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  return (
    <View style={styles.parent}>
      <Modal
        isVisible={isModalVisible}
        style={styles.modal}
        backdropOpacity={0}
        onBackdropPress={setModalVisible(false)}
      >
        <View style={styles.achievement}>
          <Text>{course.topic}</Text>
          <Button style={styles.button} title="Start the course! " onPress={() => { toggleModal(); navigate('Course', { id: course.id, name: course.topic }); }} />
        </View>
      </Modal>
    </View>
  );
};

export default MapModal;
