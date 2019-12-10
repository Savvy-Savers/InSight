import React, { Component } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    height: 10,
    width: 30,
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 50
  },
  inputs: {
    width: 300,
    alignSelf: 'center',
    height: 40,
    margin: 10,
    padding: 5,
    backgroundColor: 'lightblue'
  },
  results: {
    width: 300,
    alignSelf: 'center',
    height: 70,
    margin: 10
  },
  header: {
    height: 100,
    width: 500,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    position: 'absolute',
    top: 60
  }
});

const Header = () => {
  return(
    <View style={styles.header}>
      <Text style={{fontSize: 15, alignSelf: 'center'}}
        Loan Calculator
        ></Text>
    </View>
  )
}


export default class Loan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: '',
      principal: 0,
      years: 0,
      response: '',
      completed: false
    }

    this.reset = this.reset.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  reset() {
    this.setState({
      rate: '',
      principal: null,
      years: null,
      response: '',
      completed: false
    })
  }

  calculate() {
    function getMonths(yrs) {
      return yrs * 12
    }

    function convertRate(rate) {
      return Number(rate);
    }

    function MonthlyPayments(r, p, yrs) {
      months = getMonths(yrs);
      rate = convertRate(r);
      this.values = function() {
        return { months: months, rate: rate, principal: p }
      }
      this.total = function() {
        top = rate * Math.pow((1 + rate), months);
        bottom = Math.pow(1 + rate, months) - 1;
        return Math.round(p * (top / bottom));
      }
      this.message = function() {
        return `At an interest rate of ${rate}% with ${months} monthly payments & a principal of $${p}, your loan installments will be $${this.total()} per month!`
      }
    }

    const loan = new MonthlyPayments(this.state.rate, this.state.principal, this.state.years);

    this.setState({
      response: loan.message(),
      completed: true
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        {
          this.state.completed ? 
          <View 
          style={styles.results}
          >
  <Text style={{fontSize: 15, color: 'blue'}}>{this.state.response}
  </Text>
  </View>
  : null
        }
        <TextInput
        keyboardType = 'numeric'
        placeholder = 'Interest Rate'
        style={styles.inputs}
        value={`${this.state.rate}`}
        onChangeText={(text) => this.setState({rate: text})}
        />
        <TextInput
        keyboardType = 'numeric'
        placeholder = 'Principal'
        style={styles.inputs}
        onChangeText={(text) => this.setState({principal: text})}
        />
        <TextInput
        keyboardType = 'numeric'
        placeholder = 'Years'
        style={styles.inputs}
        value={`${this.state.years}`}
        onChangeText={(text) => this.setState({years: text})}
        />
        <Button
        onPress={this.calculate}
        style={styles.button}
        title='Calculate'
        />
        
        <Button
        onPress={this.reset}
        style={styles.button}
        title='Reset'
        />
      </View>
    )
  }
}