import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { deployment } from 'react-native-dotenv';
import axios from 'axios';
import NavBar from './NavBar';

const styles = StyleSheet.create({
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 3,
    borderRadius: 150,
  },
  progressBar: {
    height: 20,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
  },
});

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      badges: [],
      currentLevel: {},
      nextLevel: {},
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

  getData() {
    AsyncStorage.getItem('@token') // Retrieve token stored from login
      .then((token) => axios.get(`http://${deployment}:8080/profile/user/${token}`))
      .then((profileData) => {
        this.setState({
          profile: profileData.data,
        });
        return axios.get(`http://${deployment}:8080/profile/user/${profileData.data.id}/badges`);
      })
      .then((badgesData) => {
        const { profile } = this.state;
        this.setState({
          badges: badgesData.data,
        });
        return axios.get(`http://${deployment}:8080/profile/user/${profile.id}/level`);
      })
      .then((levelData) => {
        console.log(levelData.data);
        this.setState({
          currentLevel: levelData.data.currentLevel,
          nextLevel: levelData.data.nextLevel,
        });
      });
  }

  render() {
    const {
      profile,
      badges,
      currentLevel,
      nextLevel,
    } = this.state;
    return (
      // Basic display to show necessary variables, to be revised
      <View style={{ flex: 1 }}>
        <NavBar navigation={this.props.navigation} />
        <View style={{ alignItems: 'center', justifyContent: 'center', margin: 5 }}>
          <Image style={styles.image} source={{ uri: profile.photoUrl }} />
          <Text>{`${profile.givenName} ${profile.familyName}`}</Text>
          <Text>{`Level: ${currentLevel.name}`}</Text>
          <Text>{`${profile.totalExperiencePoints} XP`}</Text>
          <View style={styles.progressBar}>
            <View style={{
              ...StyleSheet.absoluteFill,
              backgroundColor: '#8BED4F',
              width: `${(nextLevel.experiencePointsThreshold - currentLevel.experiencePointsThreshold) / profile.totalExperiencePoints}%`,
            }}
            />
          </View>
          {/* <Text>{`Goals: ${profile.goal}`}</Text> */}
        </View>
        <View style={{ flex: 5, margin: 5 }}>
          <Text>Your Achievements! </Text>
          { // Map to display the badges
            badges.map((badge) => (
              <ListItem
                key={badge.name}
                title={badge.name}
                leftAvatar={{ source: { uri: badge.iconUrl } }}
                bottomDivider
                subtitle={badge.description}
              />
            ))
          }
        </View>
      </View>
    );
  }
}

export default withNavigationFocus(ProfileScreen);
