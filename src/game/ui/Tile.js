// @flow
import React from 'react';
import {
  TouchableOpacity,
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
  selected: {
    borderWidth: 4,
    borderColor: 'black',
  },
});

export type PropsType = {
  value: OptionType,
  selected?: boolean,
  onPress?: () => void,
  Option?: React$ComponentType<OptionPropsType>,
}

const Tile = ({
  value, selected = false, onPress = () => {}, Option = UIOption,
}: PropsType) => (
  <TouchableOpacity
    style={[styles.container, selected ? styles.selected : {}]}
    onPress={onPress}
  >
    <Option>{value}</Option>
  </TouchableOpacity>
);
Tile.defaultProps = {
  Option: UIOption,
  onPress: () => {},
  selected: false,
};

export default Tile;
