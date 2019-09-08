import { connect } from 'react-redux';
import { Tile } from '../ui';
import { setTile, createValueSelector, StateWithGameType } from '../module';

const getValue = createValueSelector();

type PropsType = {
  row: number | undefined,
  column: number | undefined,
}

const mapStateToProps = (state: StateWithGameType, props: PropsType) => ({
  value: getValue(state, props),
});
const mapDispatchToProps = (dispatch: any, { column, row }: PropsType) => ({
  onPress: () => dispatch(setTile(column, row)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
