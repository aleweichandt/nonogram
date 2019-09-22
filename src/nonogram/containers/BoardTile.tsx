import React from 'react';
import {BoardTile} from '../../board';
import {Value} from '../ui';

type Props = React.ComponentProps<typeof BoardTile>;

const ColoredBoardTile: React.FC<Props> = props => (
  // @ts-ignore
  <BoardTile {...props} Option={Value} />
);

export default ColoredBoardTile;
