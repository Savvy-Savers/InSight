import React, { useState, useEffect } from 'react';
import { View, ImageBackground, AsyncStorage } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';
import { deployment } from 'react-native-dotenv';
import axios from 'axios';
import MapSvg from './MapSVG';

function MapScreen() {
  const [courses, setCourses] = useState([]);
  const [coursesCompleted, setCompletedCourses] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);
  const [badges, setBadges] = useState([]);


  // compare all courses to completed courses
  useEffect(() => {
    AsyncStorage.getItem('@token')// Retrieve token stored from login
      .then((token) => axios.get(`http://${deployment}:8080/profile/user/${token}`))
      .then((profileData) => {
        axios.get(`http://${deployment}:8080/profile/user/${profileData.data.id}/completed`);
      })
      .then((completedCourses) => {
        // an array of courseIds or an empty array for a new user
        setCompletedCourses(completedCourses || []);
        return axios.get(`http://${deployment}:8080/course/list`);
      })
      .then((allCourses) => {
        setCourses(allCourses.data);
        setLoadStatus(true);
      })
      .catch((err) => console.log(err));
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
