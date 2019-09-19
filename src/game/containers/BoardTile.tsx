import {Dispatch} from 'react';
import {connect} from 'react-redux';
import {Tile} from '../ui';
import {setTile, createValueSelector, StateWithGameType} from '../module';

const getValue = createValueSelector();

type Props = {
  row: number | undefined;
  column: number | undefined;
};

const mapStateToProps = (state: StateWithGameType, props: Props) => ({
  value: getValue(state, props),
});
const mapDispatchToProps = (dispatch: Dispatch<any>, {column, row}: Props) => ({
  onPress: () => dispatch(setTile(column, row)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tile);
