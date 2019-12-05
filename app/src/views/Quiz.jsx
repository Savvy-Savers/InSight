/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import QuizQuestionView from './QuizQuestionView';

const styles = {
  wrapper: {
    backgroundColor: '#fff',
  },
  slides: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default class QuizScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      concepts: props.navigation.state.params.concepts,
      courseBadgeId: props.navigation.state.params.courseBadgeId,
    };
  }

  render() {
    const { concepts, courseBadgeId } = this.state;
    const lastQuestion = concepts.length - 1;

    return (
    // mapping over the concpets, and getting their questions
      <View style={{ flex: 1 }}>
        <Swiper
          key={concepts.length}
          style={styles.wrapper}
          showsButtons
          loop={false}
        >
          {/* map over the concept and displays each associated question
          there is only one question per concept */}
          {concepts.map((concept, index) => (
            <QuizQuestionView
              concept={concept}
              index={index}
              key={concept.id}
              lastQuestion={lastQuestion}
              courseBadgeId={courseBadgeId}
            />
          ))}
        </Swiper>
      </View>
    );
  }
}
