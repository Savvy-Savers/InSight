import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';
import { deployment } from 'react-native-dotenv';
import Colors from '../constants/Colors';


function CourseScreen(props) {
  const [course, setCourse] = useState({});
  const [concepts, setConcepts] = useState([]);
  const [courseBadgeId, setCourseBadgeId] = useState(0);
  const { id } = props.navigation.state.params;
  const { navigate } = useNavigation();
  const resizeMode = 'center';


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
      backgroundColor: 'transparent',
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
      <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      >
        <Image
          styles={{ flex: 1, resizeMode }}
          source={require('../assets/images/bg1.png')}
        />
      </View>
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
          buttonStyle={{ backgroundColor: Colors.secondary }}
          onPress={() => { navigate('Quiz', { concepts, courseBadgeId }); }}
        />
      </View>
    </View>
  );
}

export default CourseScreen;
