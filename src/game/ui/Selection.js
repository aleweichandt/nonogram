// @flow
import React from 'react';
import {
  View,
} from 'native-base';
import UITile, { type PropsType as TileType } from './Tile';
import type { OptionsType, OptionType } from '../types';

export type PropsType = {
  options: OptionsType,
  Tile?: React$ComponentType<TileType>,
}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
};

const Selection = ({ options, Tile = UITile }: PropsType) => (
  <View style={styles.container}>
    {options.map((item: OptionType) => (
      <Tile value={item} />
    ))}
  </View>
);
Selection.defaultProps = {
  Tile: UITile,
};

export default Selection;
