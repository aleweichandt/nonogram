// @flow
import React from 'react';
import {
  Grid, Col, Row,
} from 'native-base';
import UITile, { type PropsType as TileType } from './Tile';
import type { BoardType, OptionType } from '../types';

export type PropsType = {
  board: BoardType,
  Tile?: React$ComponentType<TileType>,
}

const Board = ({ board, Tile = UITile }: PropsType) => (
  <Grid>
    <Col>
      {board.map((col: OptionType[], column: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <Row key={column}>
          {col.map((item: OptionType, row: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <Tile key={row} value={item} column={column} row={row} />
          ))}
        </Row>
      ))}
    </Col>
  </Grid>
);
Board.defaultProps = {
  Tile: UITile,
};

export default Board;
