import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';
import Confetti from './Confetti';


const overlay = (props) => {
  const [visible, setVisible] = useState(false);
  const [badgeAchievement, setBadgeAchievement] = useState(null);
  // const { id } = props.navigation.state.params;

  const { navigate } = useNavigation();
  const badgeId = props.courseBadgeId;


  const toggleOverlay = () => {
    setVisible(!visible);
  };

  // We need to retrieve the badge image for the course and display it
  // also assign the user the badge and experince points
  useEffect(() => {
    // send a request for the course badge
    // setBadgeAchievement('https://cdn0.iconfinder.com/data/icons/business-startup-10/50/25-512.png');
    axios.get(`http://18.206.35.110:8080/course/badge/${badgeId}`)
      .then((badge) => {
        setBadgeAchievement(badge.data);
      });
    // update the user's badge collection
    //  axios.post(`http://18.206.35.110:8080/course/user/${id}/badge/${badgeId})` <--- FIXME: still need to have userID
  }, []);

  const styles = {
    parent: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      textAlign: 'center',
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold',
      margin: 5,
    },
    badge: {
      width: 100,
      height: 100,
    },
  };


  return (
    <View>
      <Button title="Finish Quiz!" onPress={toggleOverlay} />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} style={styles.parent}>
        <Confetti badgeAchievement={badgeAchievement} />
        <Button
          title="Continue Your Journey"
          onPress={() => { navigate('Map'); }}
        />
      </Overlay>
    </View>
  );
};

export default overlay;
