import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';

function CourseScreen(props) {
  const [course, setCourse] = useState({});
  const [concepts, setConcepts] = useState([]);
  const { id } = props.navigation.state.params;
  const { navigate } = useNavigation();

  useEffect(() => {
    axios.get(`http://localhost:8080/course/list/${id}`) // FIXME: modify for deployment
      .then((courseData) => {
        setCourse(courseData.data);
        setConcepts(courseData.data.concepts);
      });
  }, []); // Array necessary to not repeat endlessly

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
      <Swiper
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
      </Swiper>
      <View style={{ marginBottom: 25, alignSelf: 'center', width: '50%' }}>
        <Button
          title="Quiz"
          onPress={() => { navigate('Quiz', { concepts }); }}
        />
      </View>
    </View>
  );
}

export default CourseScreen;
