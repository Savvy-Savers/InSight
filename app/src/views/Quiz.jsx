/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from 'react-navigation-hooks';
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
    };
  }

  render() {
    const { concepts } = this.state;
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
            <QuizQuestionView concept={concept} index={index} key={concept.id} lastQuestion={lastQuestion} />
          ))}
        </Swiper>
      </View>
    );
  }
}
/*
 SAMPLE OF CONCEPT OBJECT
      Object {
        "answers": Array [
          Object {
            "choice": "you buy everything",
            "description": "No, dont do that!",
            "id": 1,
            "idConcept": 1,
            "isCorrect": false,
          },
          Object {
            "choice": "you plan it out",
      "description": "Yes, dont do that!",
      "id": 2,
      "idConcept": 1,
      "isCorrect": true,
    },
    Object {
      "choice": "you cry",
      "description": "budgeting isnt that bad!",
      "id": 3,
      "idConcept": 1,
      "isCorrect": false,
    },
  ],
  "description": "We are discussing the concept of budget tools",
  "id": 1,
  "question": "What is a budget tool?",
}
*/
