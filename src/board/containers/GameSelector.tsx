import {connect, MapStateToProps} from 'react-redux';
import {Selector} from '../ui';
import {getOptions, StateWithBoard, Options} from '../module';

type Props = React.ComponentProps<typeof Selector>;
type SProps = {
  options: Options<any>;
};

const mapStateToProps: MapStateToProps<
  SProps,
  Props,
  StateWithBoard<any>
> = state => ({
  options: getOptions(state),
});

export default connect(
  mapStateToProps,
  undefined,
)(Selector);
