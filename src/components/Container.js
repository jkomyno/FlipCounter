import React, { Component } from 'react';
import { StatusBar,
         View,
         StyleSheet } from 'react-native';

import Display from './Display';
import { colors,
         digits } from '../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class Container extends Component {
  state = {
    number: 0,
  }

  onPress = () => {
    this.setState({
      number: ((this.state.number + 1) % 10),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.statusBar}
        />
        <Display
          tileMap={digits[this.state.number]}
          onPress={this.onPress}
        />
      </View>
    );
  }
}
