/* Every time you want to place SVG element in your app - you should wrap it using <Svg> component
 Without this tag other element's won’t be visible, because vectors need points.
 */
import React, { useState, useEffect } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';
import { View } from 'react-native';
import Svg, { Circle, Rect, SvgUri } from 'react-native-svg';

function MapSvg(props) {
  const { courses, coursesCompleted, profile } = props;
  const { navigate } = useNavigation();

  // if the users has completed the course, we want to X over it
  // need to check if the course id is in the coursed Completed Array;

  // check if each course is completed
  // if cousesCompleted.contains(course[0].id)

  return (
    <View>
      <Svg height="100%" width="100%" viewBox="10 10 100 100">
        {/* The viewBox attribute defines the position and dimensions, in user space, of an SVG */}
        <Circle
          cx="20"
          cy="20"
          r="6"
          fill={coursesCompleted.includes(courses[0].id) ? 'pink' : 'green'}
          title={courses[0].topic}
          key={courses[0].topic}
          onPress={() => { navigate('Course', { id: courses[0].id, name: courses[0].topic }); }}
        />
        {/* {cousesCompleted.contains(course[0].id) ? } */}
        <Circle
          cx="20"
          cy="50"
          r="6"
          fill={coursesCompleted.includes(courses[1].id) ? 'pink' : 'green'}
          title={courses[1].topic}
          key={courses[1].topic}
          onPress={() => { navigate('Course', { id: courses[1].id, name: courses[1].topic }); }}
        />
        <Circle
          cx="30"
          cy="40"
          r="6"
          fill={coursesCompleted.includes(courses[2].id) ? 'pink' : 'green'}
          title={courses[2].topic}
          key={courses[2].topic}
          onPress={() => { navigate('Course', { id: courses[2].id, name: courses[2].topic }); }}
        />
        <Circle
          cx="36"
          cy="90"
          r="6"
          fill={coursesCompleted.includes(courses[3].id) ? 'pink' : 'green'}
          title={courses[3].topic}
          key={courses[3].topic}
          onPress={() => { navigate('Course', { id: courses[3].id, name: courses[3].topic }); }}
        />
        <Circle
          cx="60"
          cy="20"
          r="6"
          fill={coursesCompleted.includes(courses[4].id) ? 'pink' : 'green'}
          title={courses[4].topic}
          key={courses[4].topic}
          onPress={() => { navigate('Course', { id: courses[4].id, name: courses[4].topic }); }}
        />
        <Circle
          cx="67"
          cy="79"
          r="6"
          fill={coursesCompleted.includes(courses[5].id) ? 'pink' : 'green'}
          title={courses[5].topic}
          key={courses[5].topic}
          onPress={() => { navigate('Course', { id: courses[5].id, name: courses[5].topic }); }}
        />
      </Svg>
    </View>
  );
}

export default MapSvg;
