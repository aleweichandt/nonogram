// @flow
import React from 'react';
import {
  View,
} from 'native-base';
import { connectStyle } from '../../theme';
import UITile, { type PropsType as TileType } from './Tile';
import type { OptionsType, OptionType } from '../types';

export type PropsType = {
  options: OptionsType,
  Tile?: React$ComponentType<TileType>,
}

const styles = {
  'NativeBase.ViewNB': {
    flexDirection: 'row',
  },
};

const Selector = ({ options, Tile = UITile }: PropsType) => (
  <View padder>
    {options.map((item: OptionType, index: number) => (
      // eslint-disable-next-line react/no-array-index-key
      <Tile key={index} value={item} />
    ))}
  </View>
);
Selector.defaultProps = {
  Tile: UITile,
};

export default connectStyle('Game.Selector', styles)(Selector);
