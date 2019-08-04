// @flow
import { connect } from 'react-redux';
import { Tile } from '../ui';
import { setTile } from '../module';

const mapDispatchToProps = (dispatch, { column, row }) => ({
  onPress: () => dispatch(setTile(column, row)),
});

export default connect(undefined, mapDispatchToProps)(Tile);
