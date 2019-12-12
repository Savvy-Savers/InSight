/* Every time you want to place SVG element in your app - you should wrap it using <Svg> component
 Without this tag other element's won’t be visible, because vectors need points.
 */
import React, { useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import MapModal from './MapModal';
import { setAutoFocusEnabled } from 'expo/build/AR';


function MapSvg(props) {
  const { courses, coursesCompleted } = props;
  const [isModalVisible, setModalVisible] = useState(false);
  const [course, setCourse] = useState(null);
  const { navigate } = useNavigation();

  const toggleModal = (clickedCourse) => {
    setModalVisible(!isModalVisible);
    setCourse(clickedCourse);
  };

  return (
    <View>
      <Svg height="100%" width="100%" viewBox="10 10 100 100">
        {/* The viewBox attribute defines the position and dimensions, in user space, of an SVG */}
        <Circle
          cx="22"
          cy="35"
          r="6"
          fill={coursesCompleted.includes(courses[0].id) ? 'pink' : 'lightgreen'}
          title={courses[0].topic}
          key={courses[0].topic}
          //  open model
          onPress={() => { toggleModal(courses[0]); }}
          // onPress={() => { navigate('Course', { id: courses[0].id, name: courses[0].topic }); }}
        />
        {isModalVisible ? (<MapModal course={course} />) : null}
        <Circle
          cx="92"
          cy="40"
          r="6"
          fill={coursesCompleted.includes(courses[1].id) ? 'pink' : 'lightgreen'}
          title={courses[1].topic}
          key={courses[1].topic}
          onPress={() => { navigate('Course', { id: courses[1].id, name: courses[1].topic }); }}
        />
        <Circle
          cx="40"
          cy="50"
          r="6"
          fill={coursesCompleted.includes(courses[2].id) ? 'pink' : 'lightgreen'}
          title={courses[2].topic}
          key={courses[2].topic}
          onPress={() => { navigate('Course', { id: courses[2].id, name: courses[2].topic }); }}
        />
        <Circle
          cx="18"
          cy="97"
          r="6"
          fill={coursesCompleted.includes(courses[3].id) ? 'pink' : 'lightgreen'}
          title={courses[3].topic}
          key={courses[3].topic}
          onPress={() => { navigate('Course', { id: courses[3].id, name: courses[3].topic }); }}
        />
        <Circle
          cx="55"
          cy="15"
          r="6"
          fill={coursesCompleted.includes(courses[4].id) ? 'pink' : 'lightgreen'}
          title={courses[4].topic}
          key={courses[4].topic}
          onPress={() => { navigate('Course', { id: courses[4].id, name: courses[4].topic }); }}
        />
        <Circle
          cx="80"
          cy="75"
          r="6"
          fill={coursesCompleted.includes(courses[5].id) ? 'pink' : 'lightgreen'}
          title={courses[5].topic}
          key={courses[5].topic}
          onPress={() => { navigate('Course', { id: courses[5].id, name: courses[5].topic }); }}
        />
        <Circle
          cx="85"
          cy="92"
          r="6"
          fill={coursesCompleted.includes(courses[6].id) ? 'pink' : 'lightgreen'}
          title={courses[6].topic}
          key={courses[6].topic}
          onPress={() => { navigate('Course', { id: courses[6].id, name: courses[6].topic }); }}
        />
        <Circle
          cx="30"
          cy="130"
          r="6"
          fill={coursesCompleted.includes(courses[7].id) ? 'pink' : 'lightgreen'}
          title={courses[7].topic}
          key={courses[7].topic}
          onPress={() => { navigate('Course', { id: courses[7].id, name: courses[7].topic }); }}
        />
      </Svg>
    </View>
  );
}

export default MapSvg;
