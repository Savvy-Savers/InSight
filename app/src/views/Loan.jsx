import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
header: {
  height: 50,
  width: 250,
  backgroundColor: "#FED627",
  justifyContent: 'center',
  position: 'absolute',
  top: 20,
}
});

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={{fontSize: 20, alignSelf: 'center'}}
        Student Loan Calculator
      ></Text>
    </View>
  )
}

export default class LoanInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: '',
      principal: 0,
      years: 0,
      response: '',
      completed: false
    }
    this.calculate = this.calculate.bind(this);
    this.reset = this.reset.bind(this);
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
    getMonths((yrs) => {
      return yrs * 12;
    });

    convertRate((rate) => {
      return Number(rate);
    });

    MonthlyPayment((r, p, yrs) => {
      months = getMonths(yrs);
      rate = convertRate(r);

      this.values = (() => {
        return {
          months: months, 
          rate: rate, 
          principal: p
        }
      });

      this.total = (() => {
        firstTop = rate * Math.pow((1 + rate), months);
        secondBottom = Math.pow(1 + rate, months) - 1;
        return Math.round(p * (firstTop / secondBottom));
      });

      this.message = (() => {
        return `At a rate of ${rate}% with ${months} months of payments & a principal of ${p}, your payment will be $${this.total()} per month!`
      });
    });
  }
}