import React from 'react';
import {Grid, Col, Row} from 'native-base';
import UILineInfo from './LineInfo';
import UITile from './Tile';
import {BoardType, OptionType} from '../module';
import {GridProps} from '../types';

type Props = {
  board: BoardType;
  Tile?: React.ComponentType<GridProps>;
  LineInfo?: React.ComponentType<GridProps>;
};

const Board: React.FC<Props> = ({
  board,
  Tile = UITile,
  LineInfo = UILineInfo,
}) => (
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
);
Board.defaultProps = {
  Tile: UITile,
  LineInfo: UILineInfo,
};

export default Board;
