import React from 'react';
import {Grid, Col, Row} from 'native-base';
import UILineInfo from './LineInfo';
import UITile from './Tile';
import {BoardType, OptionType} from '../module';

type GridProps = {
  row?: number;
  column?: number;
};

export type PropsType = {
  board: BoardType;
  Tile?: React.ComponentType<GridProps>;
  LineInfo?: React.ComponentType<GridProps>;
};

const Board = ({board, Tile = UITile, LineInfo = UILineInfo}: PropsType) => (
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
