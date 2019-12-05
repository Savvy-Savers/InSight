import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import Confetti from 'react-native-confetti';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 5,
  },
  name: {
    textAlign: 'center',
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
    margin: 5,
  },
  description:{
    textAlign: 'center',
    color: '#000',
    fontSize: 12,
    margin: 5,
  },
  stats: {
    color: '#000',
    fontSize: 8,
    fontWeight: 'bold',
    margin: 5,
  },
  badge: {
    width: 100,
    height: 100,
    margin: 20,
  },
};
class RNConfetti extends Component {
  componentDidMount() {
    if (this._confettiView) {
      this._confettiView.startConfetti();
    }
  }

  componentWillUnmount() {
    if (this._confettiView) {
      this._confettiView.stopConfetti();
    }
  }

  render() {
    const { badgeAchievement } = this.prop;
    return (
      <View style={styles.container}>
        <Confetti ref={(node) => this._confettiView = node} />
        <Text style={styles.text}>YOU DID IT! YOU ARE SMARTER NOW!</Text>
        <Image
          style={styles.badge}
          source={{ uri: badgeAchievement.iconUrl }}
        />
        <Text style={styles.name}>{`${badgeAchievement.name}`}</Text>
        <Text style={styles.description}>{`${badgeAchievement.description}`}</Text>
        <Text style={styles.stats}>{`You've gained ${badgeAchievement.experiencePoints} experience points!`}</Text>
      </View>
    );
  }
}

export default RNConfetti;
