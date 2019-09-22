import {connect} from 'react-redux';
import {Board} from '../ui';
import {getBoard, StateWithBoard} from '../module';

const mapStateToProps = (state: StateWithBoard<any>) => ({
  board: getBoard(state),
});

export default connect(
  mapStateToProps,
  undefined,
)(Board);
