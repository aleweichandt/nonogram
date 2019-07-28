// @flow
import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
  },
});

type PropsType = {
  Option: React$ComponentType<*>,
}

class Tile extends PureComponent<PropsType> {
  render() {
    const { Option = Text } = this.props;
    return (
      <View style={styles.container}>
        <Option />
      </View>
    );
  }
}

export default Tile;
