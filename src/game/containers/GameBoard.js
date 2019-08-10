// @flow
import { connect } from 'react-redux';
import { Board } from '../ui';
import { getProgress } from '../module';
import BoardLineInfo from './BoardLineInfo';
import BoardTile from './BoardTile';

const mapStateToProps = (state: *) => ({
  board: getProgress(state),
  Tile: BoardTile,
  LineInfo: BoardLineInfo,
});

export default connect(mapStateToProps, undefined)(Board);
