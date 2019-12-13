import React, { Component } from 'react';
import Confetti from 'react-native-confetti';

class RNConfetti extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

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

    return (
      <Confetti ref={(node) => this._confettiView = node} />
    );
  }
}

export default RNConfetti;
