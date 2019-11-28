import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';


function MapScreen() {
  const [courses, setCourses] = useState([]);
  const { navigate } = useNavigation();

  useEffect(() => {
    axios.get('http://localhost:8080/course/list') // FIXME: modify for deployment
      .then((allCourses) => {
        setCourses(allCourses.data);
      });
  }, []); // Array necessary to not repeat endlessly

  return (
    <View>
      <Header // Temporary header for display purposes
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Courses', style: { color: '#fff' } }}
      />
      <View>
        {
          courses.map((course) => (
            <ListItem
              key={course.topic}
              title={course.topic}
              leftAvatar={{ source: { uri: 'https://i.chzbgr.com/full/8762786048/hDA3B4D87/' } }}
              bottomDivider
              chevron
              onPress={() => { navigate('Course', { id: course.id }); }}
            />
          ))
        }
      </View>
    </View>
  );
}

export default MapScreen;
