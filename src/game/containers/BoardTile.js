// @flow
import { connect } from 'react-redux';
import { Tile } from '../ui';
import { setTile, createValueSelector } from '../module';

const getValue = createValueSelector();

const mapStateToProps = (state: *, props) => ({
  value: getValue(state, props),
});
const mapDispatchToProps = (dispatch, { column, row }) => ({
  onPress: () => dispatch(setTile(column, row)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
