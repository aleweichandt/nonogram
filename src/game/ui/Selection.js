// @flow
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import UITile, { type PropsType as TileType } from './Tile';
import type { OptionsType, OptionType } from '../types';

export type PropsType = {
  options: OptionsType,
  Tile?: React$ComponentType<TileType>,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'red', // TEST
  },
});

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
