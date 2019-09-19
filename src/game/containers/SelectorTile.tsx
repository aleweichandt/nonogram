import {Dispatch} from 'react';
import {connect} from 'react-redux';
import {Tile} from '../ui';
import {
  setOption,
  getCurrentOption,
  StateWithGameType,
  OptionType,
} from '../module';

type Props = {
  value: OptionType;
};

const mapStateToProps = (state: StateWithGameType, {value}: Props) => ({
  selected: getCurrentOption(state) === value,
});
const mapDispatchToProps = (dispatch: Dispatch<any>, {value}: Props) => ({
  onPress: () => dispatch(setOption(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tile);
