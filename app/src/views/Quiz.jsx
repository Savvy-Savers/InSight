/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import QuizQuestionView from './QuizQuestionView';
import Colors from '../constants/Colors';

const styles = {
  wrapper: {
    backgroundColor: 'transparent',
  },
  slides: {
    flex: 3,
    // flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
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
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        >
          <Image
            styles={{ flex: 1, resizeMode: 'center' }}
            source={require('../assets/images/bg2.png')}
          />
        </View>
        <Swiper
          key={concepts.length}
          style={styles.wrapper}
          showsButtons
          loop={false}
        >
          {/* map over the concept and displays each associated question
          there is only one question per concept */}
          {concepts.map((concept, index) => (
            <View key={concept.id} style={styles.slides}>
              <QuizQuestionView
                concept={concept}
                index={index}
                key={concept.id}
                lastQuestion={lastQuestion}
                courseBadgeId={courseBadgeId}
              />
            </View>
          ))}
        </Swiper>
      </View>
    );
  }
}
