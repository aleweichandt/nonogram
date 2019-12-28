import React from 'react';
import styled from 'styled-components/native';
import Info from './Info';
import UITile from './Tile';
import {Board, Options} from '../module';
import {GridProps, SelectorProps} from '../types';

const Grid = styled.View``;
const Col = styled.View`
  flex-direction: column;
`;
const Row = styled.View`
  flex-direction: row;
`;

type Props<T> = {
  board: Board<T>;
  Tile?: React.ComponentType<GridProps & SelectorProps<T>>;
  LineInfo?: React.ComponentType<GridProps>;
};

const BoardComponent: React.FC<Props<any>> = ({
  board,
  Tile = UITile,
  LineInfo = Info,
}) => (
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

export default BoardComponent;
