// @flow
import { connect } from 'react-redux';
import { Board } from '../ui';
import { getBoard } from '../module';

const mapStateToProps = (state: *) => ({
  board: getBoard(state),
});

export default connect(mapStateToProps, undefined)(Board);
