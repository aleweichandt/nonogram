// @flow
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import UIOption, { type PropsType as OptionPropsType } from './Option';
import type { OptionType } from '../types';

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'grey',
  },
});

export type PropsType = {
  value: OptionType,
  Option?: React$ComponentType<OptionPropsType>,
}

const Tile = ({ value, Option = UIOption }: PropsType) => (
  <View style={styles.container}>
    <Option>{value}</Option>
  </View>
);
Tile.defaultProps = {
  Option: UIOption,
};

export default Tile;
