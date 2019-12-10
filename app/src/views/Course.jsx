import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';
import { deployment } from 'react-native-dotenv';

function CourseScreen(props) {
  const [course, setCourse] = useState({});
  const [concepts, setConcepts] = useState([]);
  const [courseBadgeId, setCourseBadgeId] = useState(0);
  const { id } = props.navigation.state.params;
  const { navigate } = useNavigation();

  useEffect(() => {
    axios.get(`http://${deployment}:8080/course/list/${id}`)
      .then((courseData) => {
        setCourse(courseData.data);
        setCourseBadgeId(courseData.data.idBadge);
        setConcepts(courseData.data.concepts);
      });
  }, []); // Array necessary to not repeat endlessly

  const styles = {
    wrapper: {
      backgroundColor: '#fff',
    },
    slides: {
      flex: 3,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,

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
          onPress={() => { navigate('Quiz', { concepts, courseBadgeId }); }}
        />
      </View>
    </View>
  );
}

export default CourseScreen;
