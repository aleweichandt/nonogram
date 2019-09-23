import {connect, MapStateToProps, MapDispatchToProps} from 'react-redux';
import {Tile} from '../ui';
import {setOption, getCurrentOption, StateWithBoard} from '../module';

type Props = React.ComponentProps<typeof Tile>;
type SProps = {
  selected: boolean;
};
type DProps = {
  onPress: () => void;
};

const mapStateToProps: MapStateToProps<SProps, Props, StateWithBoard<any>> = (
  state,
  {value},
) => ({
  selected: getCurrentOption(state) === value,
});
const mapDispatchToProps: MapDispatchToProps<DProps, Props> = (
  dispatch,
  {value},
) => ({
  onPress: () => dispatch(setOption(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tile);
