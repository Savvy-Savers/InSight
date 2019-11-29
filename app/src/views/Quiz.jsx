import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import axios from 'axios';

function QuizScreen(props) {
  // Use state hooks to access concept object
  const styles = {
    wrapper: {
      backgroundColor: '#fff',
    },
    slides: {
      flex: 4,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold',
      margin: 5,
    },
  };

  return (
    <View style={{ flex: 1 }}>
      {/* <Swiper
        key={concepts.length}
        style={styles.wrapper}
        showsButtons
        loop={false}
      >
        {concepts.map((concept) => (
          <View key={concept.id} style={styles.slides}>
            <Text style={styles.text}>{concept.description}</Text>
          </View>
        ))}
      </Swiper> */}
    </View>
  );
}

export default QuizScreen;
