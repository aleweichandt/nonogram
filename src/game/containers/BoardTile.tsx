import {Dispatch} from 'react';
import {connect} from 'react-redux';
import {Tile} from '../ui';
import {setTile, createValueSelector, StateWithBoard} from '../module';
import {GridProps} from '../types';

const getValue = createValueSelector();

const mapStateToProps = (state: StateWithBoard<any>, props: GridProps) => ({
  value: getValue(state, props),
});
const mapDispatchToProps = (
  dispatch: Dispatch<any>,
  {column, row}: GridProps,
) => ({
  onPress: () => dispatch(setTile(column, row)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tile);
