import React from 'react';
import {Grid, Col, Row} from 'native-base';
import Info from './Info';
import UITile from './Tile';
import {Board, Options} from '../module';
import {GridProps} from '../types';

type Props<T> = {
  board: Board<T>;
  Tile: React.ComponentType<GridProps & {value: T}>;
  LineInfo: React.ComponentType<GridProps>;
};

const BoardComponent: React.FC<Props<any>> = ({board, Tile, LineInfo}) => (
  <Grid>
    <Col>
      <Row>
        <LineInfo />
        {board[0].map((_, colId: number) => (
          <LineInfo key={colId} column={colId} />
        ))}
      </Row>
      {board.map((row: Options<any>, rowId: number) => (
        <Row key={rowId}>
          <LineInfo key={rowId} row={rowId} />
          {row.map((item: any, colId: number) => (
            <Tile key={colId} column={colId} row={rowId} value={item} />
          ))}
        </Row>
      ))}
    </Col>
  </Grid>
);
BoardComponent.defaultProps = {
  Tile: UITile,
  LineInfo: Info,
};

export default BoardComponent;
