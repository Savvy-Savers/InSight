/* Every time you want to place SVG element in your app - you should wrap it using <Svg> component
 Without this tag other element's won’t be visible, because vectors need points.
 */
import React, { useState, useEffect } from 'react';
import { ListItem, Header } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Svg, { Circle, Rect, SvgUri } from 'react-native-svg';
import cascadeBackground from '../assets/images/cascade.png';


export default class SvgExample extends React.Component {
  render() {
    return (
      <ImageBackground source={require('../assets/images/cascade.png')}
        imageStyle={{ resizeMode: 'stretch' }}
        style={{ width: '100%', height: '100%' }}
      >
      <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center' },
        ]}>
        {/* The viewBox attribute defines the position and dimensions, in user space, of an SVG viewport */}
          <Svg height="100%" width="100%" viewBox="0 0 100 100">
            {/* <SvgUri
              width="100%"
              height="100%"
              uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
            /> */}
            <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="blue"
              strokeWidth="2.5"
              fill="green"
            />
            <Rect
              x="15"
              y="15"
              width="70"
              height="70"
              stroke="red"
              strokeWidth="2"
              fill="yellow"
            />
          </Svg>
        </View>
      </ImageBackground>
    );
  }
}
