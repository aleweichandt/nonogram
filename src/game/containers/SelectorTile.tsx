import {connect} from 'react-redux';
import {Tile} from '../ui';
import {
  setOption,
  getCurrentOption,
  StateWithGameType,
  OptionType,
} from '../module';

type PropsType = {
  value: OptionType;
};

const mapStateToProps = (state: StateWithGameType, {value}: PropsType) => ({
  selected: getCurrentOption(state) === value,
});
const mapDispatchToProps = (dispatch: any, {value}: PropsType) => ({
  onPress: () => dispatch(setOption(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tile);
