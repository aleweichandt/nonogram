import {Dispatch} from 'react';
import {connect} from 'react-redux';
import {Tile} from '../ui';
import {setOption, getCurrentOption, StateWithBoard} from '../module';
import {SelectorProps} from '../types';

const mapStateToProps = (
  state: StateWithBoard<any>,
  {value}: SelectorProps<any>,
) => ({
  selected: getCurrentOption(state) === value,
});
const mapDispatchToProps = (
  dispatch: Dispatch<any>,
  {value}: SelectorProps<any>,
) => ({
  onPress: () => dispatch(setOption(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tile);
