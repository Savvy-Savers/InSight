import React, { Component } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';
import Colors from '../constants/Colors';
import NavBar from './NavBar';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    height: 10,
    width: 30,
    color: 'white',
    margin: 5,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 50,
  },
  inputs: {
    width: 300,
    alignSelf: 'center',
    height: 40,
    margin: 10,
    padding: 5,
    backgroundColor: 'white'
  },
  results: {
    width: 300,
    alignSelf: 'center',
    height: 70,
    margin: 10,
  },
  header: {
    height: 100,
    width: 500,
    backgroundColor: Colors.accent,
    justifyContent: 'center',
    position: 'absolute',
    top: 100,
  },
});

export default class Loan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: '',
      principal: 0,
      years: 0,
      response: '',
      completed: false,
    };

    this.reset = this.reset.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  reset() {
    this.setState({
      rate: '',
      principal: '',
      years: 0,
      response: '',
      completed: false,
    });
  }

  calculate() {
    function getMonths(yrs) {
      return yrs * 12;
    }

    function convertRate(rate) {
      return Number(rate);
    }

    function MonthlyPayments(r, p, yrs) {
      const months = getMonths(yrs);
      const rate = convertRate(r);
      this.values = function () {
        return { months: months, rate: rate, principal: p };
      };
      this.total = function () {
        const top = rate * Math.pow((1 + rate), months);
        const bottom = Math.pow(1 + rate, months) - 1;
        return Math.round(p * (top / bottom));
      };
      this.message = function () {
        return `At an interest rate of ${rate}% with ${months} monthly payments & a principal of $${p}, your total installment repayments will be $${this.total()}!`;
      };
    }

    const loan = new MonthlyPayments(this.state.rate, this.state.principal, this.state.years);

    this.setState({
      response: loan.message(),
      completed: true,
    });
  }

  render() {
    // destructed the variables. required by eslint
    const {
      completed,
      response,
      rate,
      years,
    } = this.state;

    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <NavBar navigation={navigation} name="Loan Tool" />
        { completed ? (
          <View style={styles.results}>
            <Text style={{ fontSize: 15, color: Colors.accent }}>{response}</Text>
          </View>
        ) : null }
        <TextInput
          keyboardType="numeric"
          placeholder="Interest Rate"
          style={styles.inputs}
          value={`${rate}`}
          onChangeText={(text) => this.setState({ rate: text })}
        />
        <TextInput
          keyboardType="numeric"
          placeholder="Principal"
          style={styles.inputs}
          onChangeText={(text) => this.setState({ principal: text })}
        />
        <TextInput
          keyboardType="numeric"
          placeholder="Years"
          style={styles.inputs}
          value={`${years}`}
          onChangeText={(text) => this.setState({ years: text })}
        />
        <Button
          onPress={this.calculate}
          style={styles.button}
          title="Calculate"
        />
        <Button
          onPress={this.reset}
          style={styles.button}
          title="Reset"
        />
      </View>
    );
  }
}