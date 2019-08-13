// @flow
import React from 'react';
import {
  Button,
} from 'native-base';
import { connectStyle } from '../../theme';
import UIOption, { type PropsType as OptionPropsType } from './Option';
import { OPTION_VOID } from '../module';
import type { OptionType } from '../module';

const styles = {
  'NativeBase.Button': {
    width: 50,
    height: 50,
    padding: 0,
    margin: 0,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
    '.selected': {
      borderWidth: 4,
      borderColor: 'black',
    },
  },
};

export type PropsType = {
  value?: OptionType,
  selected?: boolean,
  onPress?: () => void,
  Option?: React$ComponentType<OptionPropsType>,
}

const Tile = ({
  value = OPTION_VOID, selected = false, onPress = () => {}, Option = UIOption,
}: PropsType) => (
  <Button
    selected={selected}
    onPress={onPress}
  >
    <Option>{value}</Option>
  </Button>
);
Tile.defaultProps = {
  value: OPTION_VOID,
  Option: UIOption,
  onPress: () => {},
  selected: false,
};

export default connectStyle('Game.Tile', styles)(Tile);
