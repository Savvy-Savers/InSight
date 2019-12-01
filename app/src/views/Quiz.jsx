/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';

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
  question: {
    textAlign: 'center',
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 5,
  },
  answer: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
  },
  des: {
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
  },
  isCorrect: {
    backgroundColor: 'green',
  },
};

export default class QuizScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      concepts: props.navigation.state.params.concepts,
      isSelected: false,
      prevChoice: null,
      description: '',
    };
  }

  setDescription(answer) {
    const { isSelected, prevChoice } = this.state;

    // has any choice been selected before?
    if (isSelected === false) {
      // if not, we set all state to current answer variables
      this.setState({
        isSelected: true,
        description: answer.description,
        [answer.id]: true,
        prevChoice: answer.id,
      });
    } else {
      // else a choice is already selected
      // is it the same choice or a new choice?
      // if it is the same choice,
      // set 'isSelected' to false
      // reset the description
      // set [answer.id] to false
      // eslint-disable-next-line no-unused-expressions
      prevChoice === answer.id
        ? this.setState({
          //  toggle off
          isSelected: false,
          //  remove description
          description: '',
          //  assign state of answer to false
          [answer.id]: false,
          //  reset the prev choice
          prevChoice: null,
        })
        // else we know it is a new choice,
        // we dont change state of 'isSelected'
        // set the previous to current
        // show the new choice's description
        : this.setState({
          // Shuffle state here
          // assign state at previous value false
          [prevChoice]: false,
          // display the new description
          description: answer.description,
          // assign new id as prev
          prevChoice: answer.id,
          [answer.id]: true,
        });
    }
  }

  render() {
    const { concepts, description } = this.state;
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
          {concepts.map((concept) => (
            <View>
              <Text style={styles.question}>{concept.question}</Text>
              <View>
                {concept.answers.map((answer) => (
                  <CheckBox
                    center
                    key={answer.id}
                    title={answer.choice}
                    // if these are not empty strings, the default checkbox appears
                    checkedIcon=""
                    uncheckedIcon=""
                    checked={this.state[answer.id] || false}
                    // conditionally renders the color of choice container
                    containerStyle={this.state[answer.id] ? { backgroundColor: answer.isCorrect ? 'lightgreen' : 'pink' } : null}
                    onPress={() => this.setDescription(answer)}
                  />
                ))}
              </View>
              {description ? (
                <View>
                  <Text style={styles.des}>{description}</Text>
                </View>
              ) : null}
            </View>
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
