// @flow
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import UITile, { type PropsType as TileType } from './Tile';
import type { BoardType, OptionType } from '../types';

export type PropsType = {
  board: BoardType,
  Tile?: React$ComponentType<TileType>,
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'blue', // TEST
  },
  col: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const Board = ({ board, Tile = UITile }: PropsType) => (
  <View style={styles.container}>
    {board.map((col: OptionType[], column: number) => (
      <View style={styles.col}>
        {col.map((item: OptionType, row: number) => (
          <Tile value={item} column={column} row={row} />
        ))}
      </View>
    ))}
  </View>
);
Board.defaultProps = {
  Tile: UITile,
};

export default Board;
