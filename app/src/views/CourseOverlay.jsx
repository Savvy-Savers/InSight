import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import Confetti from './Confetti';

const CourseOverlay = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button onPress={toggleOverlay} />
      <Overlay
        isVisible={!visible}
        onBackdropPress={toggleOverlay}
        windowBackgroundColor="rgba(255, 255, 255, .5)"
        overlayBackgroundColor="red"
        width="auto"
        height="auto"
      >
        <Text style={{ fontWeight: 'bold' }}>Great job! You completed the course!</Text>
      </Overlay>
      <Confetti />
    </View>
  );
};

export default CourseOverlay;
