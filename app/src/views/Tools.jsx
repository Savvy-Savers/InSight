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
  Button,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

export default class ToolsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      income: 0,
      selectedIndex: null,
      incomeModifier: 0, // Modifier to divide income by to achieve monthly income
      outcome: 0,
      spent: 0,
      savings: 0,
      firstTime: false, // Field to check if the user has not set up a budget
    };

    this.updateIndex = this.updateIndex.bind(this);
    this.updateText = this.updateText.bind(this);
    this.submitBudget = this.submitBudget.bind(this);
  }

  // Retrieves the budget attached to the user id
  componentDidMount() {
    axios.get('http://localhost:8080/tool/budget/2')
      .then((budget) => {
        // if there is no budget data, send the user through first time setup
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

  // Update handler for the type of payment multibutton
  updateIndex(selectedIndex) {
    // Takes index from ButtonGroup assigning it to state
    this.setState({ selectedIndex });
    // Values put in correspond to the income modifier to change the income to monthly value
    if (selectedIndex === 0) {
      this.setState({ incomeModifier: 0.25 });
    } else if (selectedIndex === 1) {
      this.setState({ incomeModifier: 0.5 });
    } else if (selectedIndex === 2) {
      this.setState({ incomeModifier: 1 });
    } else if (selectedIndex === 3) {
      this.setState({ incomeModifier: 12 });
    }
  }

  // update handler for all the text fields for creating a budget
  updateText(element, value) {
    if (element === 'income') {
      this.setState({ income: value });
    } else if (element === 'outcome') {
      this.setState({ outcome: value });
    } else if (element === 'savings') {
      this.setState({ savings: value });
    }
  }

  // Submition for a new budget
  submitBudget() {
    const {
      income,
      outcome,
      incomeModifier,
      savings,
    } = this.state;
    axios.post('http://localhost:8080/tool/budget/2', {
      income,
      outcome,
      incomeModifier,
      savings,
    })
      .then(() => {
        this.setState({ firstTime: false });
      });
  }

  render() {
    const {
      income,
      selectedIndex,
      outcome,
      spent,
      savings,
      firstTime,
      incomeModifier,
    } = this.state;
    const buttons = ['Weekly', 'Biweekly', 'Monthly', 'Yearly'];

    // Display for the first time setup for the budget
    const setup = (
      <View>
        <Input // Input for user income
          label="Income"
          onChangeText={(text) => this.updateText('income', text)}
          placeholder="Gimme ur $"
        />
        <ButtonGroup // Button group to determine what kind of income user has (weekly / monthly etc...)
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 40 }}
        />
        <Input // Input for user outcome
          label="Monthly Expenses"
          onChangeText={(text) => this.updateText('outcome', text)}
          placeholder="Rent, electricity, internet"
        />
        <Input // Input for user savings
          label="Savings"
          onChangeText={(text) => this.updateText('savings', text)}
          placeholder={`We recommend 25% of net worth: ${Math.floor(((income / incomeModifier) - outcome) * 0.25)}`}
        />
        <Button // Button to submit all budget data to server
          title="Submit"
          onPress={this.submitBudget}
        />
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
