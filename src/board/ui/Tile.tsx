import React from 'react';
import {Button} from 'native-base';
import {connectStyle} from '../../theme';
import Value from './Value';
import {SelectorProps} from '../types';

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

type Props<T> = SelectorProps<T> & {
  selected: boolean;
  onPress: () => void;
  Option: typeof Value;
};

const Tile: React.FC<Props<any>> = ({value, selected, onPress, Option}) => (
  // @ts-ignore nativebase definition
  <Button selected={selected} onPress={onPress}>
    <Option>{value}</Option>
  </Button>
);
Tile.defaultProps = {
  value: undefined,
  Option: Value,
  onPress: () => {},
  selected: false,
};

export default connectStyle('Game.Tile', styles)(Tile);
