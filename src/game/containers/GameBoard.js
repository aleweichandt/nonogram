// @flow
import { connect } from 'react-redux';
import { Board } from '../ui';
import { getBoard } from '../module';
import BoardLineInfo from './BoardLineInfo';
import BoardTile from './BoardTile';

const mapStateToProps = (state: *) => ({
  board: getBoard(state),
  Tile: BoardTile,
  LineInfo: BoardLineInfo,
});

export default connect(mapStateToProps, undefined)(Board);
