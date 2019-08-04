// @flow
import { connect } from 'react-redux';
import { Selector } from '../ui';
import { getOptions } from '../module';
import SelectorTile from './SelectorTile';

const mapStateToProps = (state: *) => ({
  options: getOptions(state),
  Tile: SelectorTile,
});

export default connect(mapStateToProps, undefined)(Selector);
