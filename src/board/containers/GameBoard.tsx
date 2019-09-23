import {connect, MapStateToProps} from 'react-redux';
import {Board} from '../ui';
import {getBoard, StateWithBoard, Board as BoardType} from '../module';

type Props = React.ComponentProps<typeof Board>;
type SProps = {
  board: BoardType<any>;
};

const mapStateToProps: MapStateToProps<
  SProps,
  Props,
  StateWithBoard<any>
> = state => ({
  board: getBoard(state),
});

export default connect(
  mapStateToProps,
  undefined,
)(Board);
