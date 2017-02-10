import React, { Component } from 'react';
import { TouchableHighlight , View, StyleSheet } from 'react-native';

import { colors } from '../config/colors';
import { digits } from '../utils';
import Display from './Display';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  }
});

export default class Container extends Component {
  state = {
    number: 0
  }

  demo = () => {
    setTimeout(this.onPress, 1000);
    setTimeout(this.onPress, 2000);
    setTimeout(this.onPress, 3000);
  }

  componentDidMount() {
    this.demo();
  }

  onPress = () => {
    console.log("digits", digits);
    console.log("this.state.number", this.state.number);
    console.log("tileMap", digits[this.state.number]);
    this.setState({
      number: ((this.state.number + 1) % 10)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Display
          tileMap={digits[this.state.number]}
          onPress={this.onPress}
        />
      </View>
    )
  }
}
