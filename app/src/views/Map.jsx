import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';
import { deployment } from 'react-native-dotenv';
import axios from 'axios';


function MapScreen() {
  const [courses, setCourses] = useState([]);
  const { navigate } = useNavigation();

  useEffect(() => {
    axios.get(`http://${deployment}:8080/course/list`)
      .then((allCourses) => {
        setCourses(allCourses.data);
      });
  }, []); // Array necessary to not repeat endlessly

  return (
    <View>
      <View>
        {
          courses.map((course) => (
            <ListItem
              key={course.topic}
              title={course.topic}
              leftAvatar={{ source: { uri: 'https://i.chzbgr.com/full/8762786048/hDA3B4D87/' } }}
              bottomDivider
              chevron
              onPress={() => { navigate('Course', { id: course.id, name: course.topic }); }}
            />
          ))
        }
      </View>
    </View>
  );
}

export default MapScreen;
