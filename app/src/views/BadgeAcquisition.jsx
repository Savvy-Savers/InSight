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
  const id = 1;


  const { navigate } = useNavigation();


  const toggleOverlay = () => {
    setVisible(!visible);
  };

  // We need to retrieve the badge image for the couse and display it
  // also assign the user the badge and experince points
  useEffect(() => {
    // send a request for the course badge
    axios.get(`http://18.206.35.110:8080/course/list/${id}`)
      .then((badge) => {
        setBadgeAchievement(badge);
      });
  }, []);


  const styles = {
    text: {
      textAlign: 'center',
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold',
      margin: 5,
    },
  };


  return (
    <View>
      <Button title="Finish Quiz!" onPress={toggleOverlay} />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Confetti />
        <Text styles={styles.text}>YOU DID IT! YOU ARE SO MUCH SMARTER NOW!</Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: badgeAchievement.iconUrl }}
        />
        <Button
          title="Back to Journey Map"
          onPress={() => { navigate('Map'); }}
        />
      </Overlay>
    </View>
  );
};

export default overlay;
