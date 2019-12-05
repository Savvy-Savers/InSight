import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';
import Confetti from './Confetti';


const BadgeAcquisition = (props) => {
  const [visible, setVisible] = useState(false);
  const [badgeAchievement, setBadgeAchievement] = useState(null);
  const { navigate } = useNavigation();
  const badgeId = props.courseBadgeId;


  const toggleOverlay = () => {
    setVisible(!visible);
  };

  // We need to retrieve the badge image for the course and display it
  // also assign the user the badge and experince points
  useEffect(() => {
    // send a request for the course badge
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
    button: {
      justifyContent: 'flex-end',
      marginBottom: 36,
    },
  };

  return (
    <View>
      <Button title="Finish Quiz!" onPress={toggleOverlay} />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} style={styles.parent}>
        {/* NEED TO ADD CONDITIONAL HERE IF THE USER ALREADY HAS THE BADGE */}
        <Confetti badgeAchievement={badgeAchievement} />
        <Button
          title="Continue Your Journey"
          onPress={() => { navigate('Map'); }}
        />
      </Overlay>
    </View>
  );
};

export default BadgeAcquisition;
