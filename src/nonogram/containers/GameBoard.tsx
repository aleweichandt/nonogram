import React from 'react';
import {GameBoard as Board} from '../../board';
import BoardTile from './BoardTile';
import BoardLineInfo from './BoardLineInfo';

const GameBoard: React.FC<{}> = props => (
  <Board {...props} board={[[]]} Tile={BoardTile} LineInfo={BoardLineInfo} />
);

export default GameBoard;
