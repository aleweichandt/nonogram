// @flow
import { connect } from 'react-redux';
import { Board } from '../ui';
import { getProgress } from '../module';

const mapStateToProps = (state: *) => ({
  board: getProgress(state),
});

export default connect(mapStateToProps, undefined)(Board);
