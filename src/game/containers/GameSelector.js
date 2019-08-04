// @flow
import { connect } from 'react-redux';
import { Selection } from '../ui';
import { getOptions } from '../module';

const mapStateToProps = (state: *) => ({
  options: getOptions(state),
});

export default connect(mapStateToProps, undefined)(Selection);
