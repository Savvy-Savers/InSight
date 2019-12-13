import React from 'react';
import { View, ImageBackground, AsyncStorage } from 'react-native';
import { deployment } from 'react-native-dotenv';
import { withNavigationFocus } from 'react-navigation';
import axios from 'axios';
import MapSvg from './MapSVG';
import Colors from '../constants/Colors';

class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      coursesCompleted: [],
      isLoaded: false,
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps) {
    const { isFocused } = this.props;
    if (prevProps.isFocused !== isFocused) {
      this.getData();
    }
  }

  // compare all courses to completed courses
  getData() {
    AsyncStorage.getItem('@token')// Retrieve token stored from login
      .then((token) => axios.get(`http://${deployment}:8080/profile/user/${token}`))
      .then((profileData) => {
        axios.get(`http://${deployment}:8080/profile/user/${profileData.data.id}/completed`)
          .then((completedCourses) => {
            // an array of courseIds or an empty array for a new user
            this.setState({
              coursesCompleted: completedCourses.data,
            });
          });
      })
      .then(async () => {
        const allCourses = await axios.get(`http://${deployment}:8080/course/list`);
        this.setState({
          courses: allCourses.data,
          isLoaded: true,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { courses, coursesCompleted, isLoaded } = this.state;
    return (
      <ImageBackground source={require('../assets/images/journey.png')}
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
}

export default withNavigationFocus(MapScreen);
