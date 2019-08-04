// @flow
import React from 'react';
import {
  Button,
} from 'native-base';
import UIOption, { type PropsType as OptionPropsType } from './Option';
import type { OptionType } from '../types';

const styles = {
  container: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'grey',
  },
  selected: {
    borderWidth: 4,
    borderColor: 'black',
  },
};

export type PropsType = {
  value: OptionType,
  selected?: boolean,
  onPress?: () => void,
  Option?: React$ComponentType<OptionPropsType>,
}

const Tile = ({
  value, selected = false, onPress = () => {}, Option = UIOption,
}: PropsType) => (
  <Button
    style={[styles.container, selected ? styles.selected : {}]}
    onPress={onPress}
  >
    <Option>{value}</Option>
  </Button>
);
Tile.defaultProps = {
  Option: UIOption,
  onPress: () => {},
  selected: false,
};

export default Tile;
