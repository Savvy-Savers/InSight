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
import Colors from '../constants/Colors';

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
    height: 30,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 3,
    borderRadius: 5,
  },
  levelInfo: {
    height: 60,
    width: '100%',
    borderColor: Colors.secondAccent,
    borderWidth: 6,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    // borderRadius: 5,
    margin: 10,
    flexDirection: 'row',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    borderColor: Colors.secondAccent,
    borderWidth: 0,
  },
  innerInfo: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontSize: 24,
    color: Colors.secondAccent,
  },
  textDetails: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent,
    textAlign: 'right',
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
        <NavBar navigation={this.props.navigation} name="Profile" />
        <View style={{ alignItems: 'center', justifyContent: 'center', margin: 5 }}>
          <Image style={styles.image} source={{ uri: profile.photoUrl }} />
          <Text style={{ fontSize: 35, color: Colors.secondAccent, fontWeight: 'bold' }}>{`${profile.givenName} ${profile.familyName}`}</Text>
          <View style={styles.levelInfo}>
            <View style={{ ...styles.innerContainer, borderRightWidth: 3 }}>
              <View style={styles.innerInfo}>
                <Text style={{ ...styles.text }}>Level:</Text>
              </View>
              <View style={styles.innerInfo}>
                <Text style={{ ...styles.textDetails }}>{currentLevel.name}</Text>
              </View>
            </View>
            <View style={{ ...styles.innerContainer, borderLeftWidth: 3 }}>
              <View style={styles.innerInfo}>
                <Text style={{ ...styles.text }}>EXP:</Text>
              </View>
              <View style={styles.innerInfo}>
                <Text style={{ ...styles.textDetails }}>{profile.totalExperiencePoints}</Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ ...styles.text }}>EXP to next level:</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ ...styles.textDetails }}>{nextLevel.experiencePointsThreshold - profile.totalExperiencePoints}</Text>
            </View>
          </View>
          <View style={styles.progressBar}>
            <View style={{
              ...StyleSheet.absoluteFill,
              backgroundColor: '#8BED4F',
              width: `${((profile.totalExperiencePoints - currentLevel.experiencePointsThreshold) / (nextLevel.experiencePointsThreshold - currentLevel.experiencePointsThreshold)) * 100}%`,
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
