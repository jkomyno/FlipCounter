import React, { Component, PropTypes } from 'react';
import { Animated,
         Easing,
         StyleSheet,
         TouchableHighlight,
         View } from 'react-native';

import { colors,
         dims } from '../config';

const styles = StyleSheet.create({
  display: {
    backgroundColor: colors.background,
    height: dims.height,
    width: dims.width,
  },
  tileCol: {
    flex: 1,
  },
  tileRow: {
    flex: 1,
    flexDirection: 'row',
  },
  active: {
    backgroundColor: colors.tileActive,
  },
});

export default class Display extends Component {

  static propTypes = {
    tileMap: PropTypes.arrayOf(PropTypes.number).isRequired,
    onPress: PropTypes.func.isRequired,
  }

  state = {
    spinValue: new Animated.Value(0),
  }

  componentDidMount() {
    this.spin();
  }

  componentWillReceiveProps() {
    this.spin();
  }

  spin() {
    this.state.spinValue.setValue(0);
    Animated.timing(
      this.state.spinValue, {
        toValue: 1,
        easing: Easing.ease,
        duration: 500,
      },
    ).start();
  }

  createTiles = () => {
    // setup animation
    const getStartValue = () => '0deg';
    const getEndValue = () => '180deg';

    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: [getStartValue(), getEndValue()],
    });
    const tiles = [];
    const arr = [0, 0, 0];
    let k = 0;
    for (let i = 0; i < 5; i++) {
      tiles.push(
        <View key={i} style={styles.tileRow}>
          {arr.map((item, j) => (
            <Animated.View
              key={j}
              style={[styles.tileCol,
                this.props.tileMap[j + k] ?
                [styles.active, { transform: [{ rotateX: spin }] }] : {},
              ]}
            />
          ))}
        </View>,
      );
      k += 3;
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
    );
  }
}
