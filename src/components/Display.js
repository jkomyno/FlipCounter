import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';

import { dims } from '../config/dims';
import { colors } from '../config/colors';

const styles = StyleSheet.create({
  display: {
    backgroundColor: 'yellow',
    height: 500,
    width: 300
  },
  tileRow: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'green',
    borderBottomWidth: .5
  },
  tileCol: {
    flex: 1,
    flexDirection: 'column',
    borderColor: 'green',
    borderWidth: 1
  },
  active: {
    backgroundColor: 'pink'
  }
});

/*
You can actually animate strings using the interpolate method. interpolate takes a range of values, typically 0 to 1 works well for most things, and interpolates them into a range of values (these could be strings, numbers, even functions that return a value).

What you would do is take an existing Animated value and pass it through the interpolate function like this:

// First set up animation 
Animated.timing(
    this.state.spinValue,
  {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear
  }
).start()

// Second interpolate beginning and end values (in this case 0 and 1)
const spin = this.state.spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg']
})
Then use it in your component like this:

<Animated.Image
  style={{transform: [{rotate: spin}] }}
  source={{uri: 'somesource.png'}} />
 */

export default class Display extends Component {
  createTiles = () => {
    const tiles = [];
    const arr = [0,0,0];
    const backgroundArr = [
      {backgroundColor: 'blue'},
      {backgroundColor: 'white'},
      {backgroundColor: 'red'}
    ];
    let k = 0;
    for (let i=0;i<5;i++) {
      k+=3;
      tiles.push(
        <View key={i} style={styles.tileRow}>
          {arr.map((item, j) => <View key={j} style={[styles.tileCol, backgroundArr[j], this.props.tileMap[j+k] ? styles.active : {} ]}/>)}
        </View>
      )
    }
    return tiles;
  }

  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.display}>
          { this.createTiles() }
        </View>
      </TouchableHighlight>
    )
  }
}
