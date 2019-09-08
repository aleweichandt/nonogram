import {connect} from 'react-redux';
import {Selector} from '../ui';
import {getOptions, StateWithGameType} from '../module';
import SelectorTile from './SelectorTile';

const mapStateToProps = (state: StateWithGameType) => ({
  options: getOptions(state),
  Tile: SelectorTile,
});

export default connect(
  mapStateToProps,
  undefined,
)(Selector);
