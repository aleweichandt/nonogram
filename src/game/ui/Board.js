// @flow
import React from 'react';
import {
  Grid, Col, Row,
} from 'native-base';
import UILineInfo, { type PropsType as LineInfoType } from './LineInfo';
import UITile, { type PropsType as TileType } from './Tile';
import type { BoardType, OptionType } from '../module';

export type PropsType = {
  board: BoardType,
  Tile?: React$ComponentType<TileType>,
  LineInfo?: React$ComponentType<LineInfoType>,
}

const Board = ({ board, Tile = UITile, LineInfo = UILineInfo }: PropsType) => (
  /* eslint-disable react/no-array-index-key */
  <Grid>
    <Col>
      <Row>
        <LineInfo />
        {board[0].map((col: OptionType, colId: number) => (
          <LineInfo key={colId} column={colId} />
        ))}
      </Row>
      {board.map((row: OptionType[], rowId: number) => (
        <Row key={rowId}>
          <LineInfo key={rowId} row={rowId} />
          {row.map((item: OptionType, colId: number) => (
            <Tile key={colId} column={colId} row={rowId} />
          ))}
        </Row>
      ))}
    </Col>
  </Grid>
  /* eslint-enable react/no-array-index-key */
);
Board.defaultProps = {
  Tile: UITile,
  LineInfo: UILineInfo,
};

export default Board;
