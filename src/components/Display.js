import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';

import { dims } from '../config/dims';
import { colors } from '../config/colors';

const styles = StyleSheet.create({
  display: {
    position: 'relative',
    width: dims.width,
    height: dims.height,
    backgroundColor: '#F5FCFF',
  },
  tileRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red'
  },
  tileCol: {
    flex: .1,
    flexDirection: 'column',
    borderColor: 'green',
    borderWidth: 1
  },
  tile: {
    position: 'absolute',
    top: dims.tileMargin,
    bottom: dims.tileMargin,
    left: dims.tileMargin,
    right: dims.tileMargin,
    backgroundColor: colors.tile
  },
  tileWrapperActive: {
    backgroundColor: colors.tileActive
  }
});

export default class Display extends Component {
  createTiles = () => {
    const tiles = [];
    const arr = [1,2,3];
    for (let i=0;i<5;i++) {
      tiles.push(
        <View key={i} style={styles.tileRow}>

          {
            arr.map((item, j) => <View key={j} style={styles.tileCol} /> )
          }
        </View>
      )
    }
    return tiles;
  }

  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.display} >
          { this.createTiles() }
        </View>
      </TouchableHighlight>
    )
  }
}
