import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';

function QuizScreen(props) {
  // Use state hooks to access concept object
  // All concepts available here
  const [concepts, setConcepts] = useState(props.navigation.state.params.concepts);
  const { id } = props.navigation.state.params;
  const { navigate } = useNavigation();

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
    // mapping over the concpets, and getting their questions
    <View style={{ flex: 1 }}>
      <Swiper
        key={concepts.length}
        style={styles.wrapper}
        showsButtons
        loop={false}
      >
        {concepts.map((concept) => (
          <View key={concept.id} style={styles.slides}>
            <Text style={styles.text}>{concept.question}</Text>
          </View>
        ))}
      </Swiper>
    </View>
  );
}

export default QuizScreen;
