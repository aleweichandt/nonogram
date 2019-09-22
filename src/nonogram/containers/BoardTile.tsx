import React from 'react';
import {BoardTile} from '../../board';
import {Value} from '../ui';

const ColoredBoardTile: React.FC<{}> = props => (
  // @ts-ignore
  <BoardTile {...props} Option={Value} />
);

export default ColoredBoardTile;
