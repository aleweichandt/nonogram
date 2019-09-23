import {connect, MapStateToProps, MapDispatchToProps} from 'react-redux';
import {Tile} from '../ui';
import {setTile, createValueSelector, StateWithBoard} from '../module';
import {GridProps} from '../types';

type Props = GridProps & React.ComponentProps<typeof Tile>;
type SProps = {
  value: any;
};
type DProps = {
  onPress: () => void;
};

const getValue = createValueSelector();

const mapStateToProps: MapStateToProps<SProps, Props, StateWithBoard<any>> = (
  state,
  props,
) => ({
  value: getValue(state, props),
});
const mapDispatchToProps: MapDispatchToProps<DProps, Props> = (
  dispatch,
  {column, row},
) => ({
  onPress: () => dispatch(setTile(column, row)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tile);
