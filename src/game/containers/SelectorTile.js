// @flow
import { connect } from 'react-redux';
import { Tile } from '../ui';
import { setOption, getCurrentOption } from '../module';

const mapStateToProps = (state: *, { value }) => ({
  selected: getCurrentOption(state) === value,
});
const mapDispatchToProps = (dispatch, { value }) => ({
  onPress: () => dispatch(setOption(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
