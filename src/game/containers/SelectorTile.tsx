import {Dispatch} from 'react';
import {connect} from 'react-redux';
import {Tile} from '../ui';
import {setOption, getCurrentOption, StateWithGameType} from '../module';
import {SelectorProps} from '../types';

const mapStateToProps = (state: StateWithGameType, {value}: SelectorProps) => ({
  selected: getCurrentOption(state) === value,
});
const mapDispatchToProps = (
  dispatch: Dispatch<any>,
  {value}: SelectorProps,
) => ({
  onPress: () => dispatch(setOption(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tile);
