import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import axios from 'axios';

function CourseScreen(props) {
  const [course, setCourse] = useState([]);
  const { id } = props.navigation.state.params;

  useEffect(() => {
    axios.get(`http://localhost:8080/course/list/${id}`) // FIXME: modify for deployment
      .then((courseData) => {
        setCourse(courseData.data);
      });
  }, []); // Array necessary to not repeat endlessly

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{course.topic}</Text>
      <Button
        title="Go to Next part of course... "
        // each push we add a new route to the navigation stack
        onPress={() => this.props.navigation.push('Course')}
      />
      <Button
        title="Go back"
        onPress={() => this.props.navigation.goBack()}
      />
    </View>
  );
}

export default CourseScreen;
