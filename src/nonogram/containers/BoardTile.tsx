import React from 'react';
import {BoardTile} from '../../game';
import {Value} from '../ui';

const ColoredBoardTile: React.FC<{}> = props => (
  // @ts-ignore
  <BoardTile {...props} Option={Value} />
);

export default ColoredBoardTile;
