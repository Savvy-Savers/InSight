import React, { useState, useEffect } from 'react';
import { View, ImageBackground, AsyncStorage } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';
import MapSvg from './MapSVG';

function MapScreen() {
  const [courses, setCourses] = useState([]);
  const [coursesCompleted, setCompletedCourses] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);
  const [badges, setBadges] = useState([]);


  // compare all courses to completed courses
  useEffect(() => {
    axios.get('http://18.206.35.110:8080/course/list')
      .then((allCourses) => {
        setCourses(allCourses.data);
      })
      .then(() => AsyncStorage.getItem('@token')) // Retrieve token stored from login
      .then((token) => axios.get(`http://localhost:8080/profile/user/${token}`))
      .then((profileData) => { 
        axios.get(`http://18.206.35.110:8080/profile/user/${profileData.data.id}/completed`);
      })
      .then((completedCourses) => {
        setCompletedCourses(completedCourses);
        setLoadStatus(true);
      });
  }, []); // Array necessary to not repeat endlessly

  return (
    <ImageBackground source={require('../assets/images/cascade.png')}
      imageStyle={{ resizeMode: 'stretch' }}
      style={{ width: '100%', height: '100%' }}
    >
      <View>
        {isLoaded ? (
          <MapSvg courses={courses} coursesCompleted={coursesCompleted} />
        ) : null}
      </View>
    </ImageBackground>
  );
}

export default MapScreen;
