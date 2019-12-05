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
import Pie from './Pie';

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
      spend: 0, // Amount to add to the spent value for this budget period
    };

    this.updateIndex = this.updateIndex.bind(this);
    this.updateText = this.updateText.bind(this);
    this.submitBudget = this.submitBudget.bind(this);
    this.getBudgetData = this.getBudgetData.bind(this);
    this.submitExpense = this.submitExpense.bind(this);
  }

  // Retrieves the budget attached to the user id
  componentDidMount() {
    this.getBudgetData();
  }

  getBudgetData() {
    axios.get('http://localhost:8080/tool/budget/1')
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
            incomeModifier: budget.data.incomeModifier,
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
    } else if (element === 'spend') {
      this.setState({ spend: value });
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
    axios.post('http://localhost:8080/tool/budget/1', {
      income,
      outcome,
      incomeModifier,
      savings,
    })
      .then(() => {
        this.setState({ firstTime: false });
      });
  }

  submitExpense() {
    let { spend } = this.state;
    spend = Math.round(spend * 100) / 100;
    axios.patch('http://localhost:8080/tool/budget/1', {
      spend,
    })
      .then(() => {
        this.getBudgetData();
        this.setState({ spend: 0 });
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
      spend,
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
        <ButtonGroup // Button group to determine what kind of income user has (weekly/monthly etc)
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
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Pie // Pie chart display
            pieWidth={200}
            pieHeight={200}
            colors={['#1f77b4', '#ff7f0e']}
            width={250}
            height={250}
            data={[
              { number: (((income / incomeModifier) - outcome - savings) / 4) - spent },
              { number: spent },
            ]}
          />
        </View>
        <View style={{
          flex: 2,
          marginBottom: 25,
          alignSelf: 'center',
          width: '50%',
        }}
        >
          <Text>
            {`Weekly budget: $${(((income / incomeModifier) - outcome - savings) / 4)}`}
          </Text>
          <Text>{`Total spent: $${Math.round(spent * 100) / 100}`}</Text>
          <Input // Input for user income
            label="Expense"
            leftIcon={<Icon name="dollar" />}
            onChangeText={(text) => this.updateText('spend', text)}
            value={spend.toString()}
            errorStyle={{ color: 'red' }}
            // errorMessage="ENTER A VALID ERROR HERE"
          />
          <Button // Button to send new expense
            title="Spend"
            onPress={this.submitExpense}
          />
        </View>
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
