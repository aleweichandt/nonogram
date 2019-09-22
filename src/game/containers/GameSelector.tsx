import {connect} from 'react-redux';
import {Selector} from '../ui';
import {getOptions, StateWithBoard} from '../module';

const mapStateToProps = (state: StateWithBoard<any>) => ({
  options: getOptions(state),
});

export default connect(
  mapStateToProps,
  undefined,
)(Selector);
