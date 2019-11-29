import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import axios from 'axios';

function QuizScreen(props) {
  // Use state hooks to access concept object
  const [concepts, setConcepts] = useState(props.navigation.state.params.concepts); // All concepts available here
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
      <Text>{concepts[0].question}</Text>
      {/* <Swiper
        key={questions.length}
        style={styles.wrapper}
        showsButtons
        loop={false}
      >

      // will be mapping over questions
        {questions.map((question) => (
          <View key={question.id} style={styles.slides}>
            <Text style={styles.text}>{question.description}</Text>
          </View>
        ))}
      </Swiper> */}
    </View>
  );
}

export default QuizScreen;
