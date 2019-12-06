/* Every time you want to place SVG element in your app - you should wrap it using <Svg> component
 Without this tag other element's won’t be visible, because vectors need points.
 */
import React, { useState, useEffect } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Svg, { Circle, Rect, SvgUri } from 'react-native-svg';

function MapSvg(props) {
  const { courses } = props;
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);
  const { navigate } = useNavigation();

  return (
    <View>
      <Svg height="100%" width="100%" viewBox="10 10 100 100">
        {/* The viewBox attribute defines the position and dimensions, in user space, of an SVG */}
        <Circle
          cx="20"
          cy="20"
          r="8"
          fill="pink"
          title={courses[0].topic}
          key={courses[0].topic}
          onPress={() => { navigate('Course', { id: courses[0].id, name: courses[0].topic }); }}
        />
        <Circle
          cx="30"
          cy="80"
          r="8"
          fill="pink"
          title={courses[1].topic}
          key={courses[1].topic}
          onPress={() => { navigate('Course', { id: courses[1].id, name: courses[1].topic }); }}
        />
        <Circle
          cx="56"
          cy="70"
          r="8"
          fill="pink"
          title={courses[2].topic}
          key={courses[2].topic}
          onPress={() => { navigate('Course', { id: courses[2].id, name: courses[2].topic }); }}
        />
        <Circle
          cx="90"
          cy="90"
          r="8"
          fill="pink"
          title={courses[3].topic}
          key={courses[3].topic}
          onPress={() => { navigate('Course', { id: courses[3].id, name: courses[3].topic }); }}
        />
      </Svg>
    </View>
  );
}

export default MapSvg;
