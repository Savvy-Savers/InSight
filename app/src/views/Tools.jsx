import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Header,
  Input,
  ButtonGroup,
  Slider,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

export default class ToolsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      income: 0,
      selectedIndex: null,
      outcome: 0,
      spent: 0,
      savings: 25,
      firstTime: false, // Field to check if the user has not set up a budget
    };

    this.updateIndex = this.updateIndex.bind(this);
  }

  componentDidMount() {
    axios.get('http://18.206.35.110:8080/tool/budget/2')
      .then((budget) => {
        if (!budget.data) {
          this.setState({
            firstTime: true,
          });
        } else {
          this.setState({
            income: budget.data.income,
            outcome: budget.data.outcome,
            spent: budget.data.spent,
            savings: budget.data.savings,
          });
        }
      });
  }

  updateIndex(selectedIndex) {
    // Takes index from ButtonGroup assigning it to state
    this.setState({ selectedIndex });
  }

  updateText(element, value) {
    if (element === 'income') {
      this.setState({ income: value });
    } else if (element === 'outcome') {
      this.setState({ outcome: value });
    }
  }

  render() {
    const {
      income,
      selectedIndex,
      outcome,
      spent,
      savings,
      firstTime,
    } = this.state;
    const buttons = ['Weekly', 'Biweekly', 'Monthly', 'Yearly'];

    // Display for the first time setup for the budget
    const setup = (
      <View>
        <Input
          label="Income"
          onChangeText={(text) => this.updateText('income', text)}
          placeholder="Gimme ur $"
        />
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 40 }}
        />
        <Input
          label="Monthly Expenses"
          onChangeText={(text) => this.updateText('outcome', text)}
          placeholder="Gimme ur $"
        />
        <Slider
          value={savings}
          onValueChange={(percent) => this.setState({ savings: percent})}
          minimumValue={0}
          maximumValue={100}
          step={1}
        />
        <Text>Percent: {savings}%</Text>
      </View>
    );

    // Display for the budget
    const budget = (
      <View>
        <Text>{income}</Text>
        <Text>{outcome}</Text>
        <Text>{spent}</Text>
        <Text>{savings}</Text>
      </View>
    );

    return (
      <View style={{ flex: 1 }}>
        <Header // Temporary header with button to eventually open drawer
          leftComponent={
            (
              <TouchableOpacity onPress={() => { /* Open Drawer */ }}>
                <Icon
                  name="bars"
                  style={{
                    color: 'white',
                    padding: 10,
                    marginLeft: 10,
                    fontSize: 20,
                  }}
                />
              </TouchableOpacity>
            )
          }
        />
        {firstTime ? setup : budget}
      </View>
    );
  }
}
