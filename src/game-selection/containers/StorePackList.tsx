import {connect, MapStateToProps, MapDispatchToProps} from 'react-redux';
import {SelectionList} from '../ui';
import StorePack from './StorePack';
import {getPacks, choosePack} from '../module';
import {StateWithGameSelection, PackId} from '../module';

type Props = {};
type SProps = {
  data: string[];
  ItemView: typeof StorePack;
};
type DProps = {
  onItemSelected: (id: string) => void;
};

const mapStateToProps: MapStateToProps<
  SProps,
  Props,
  StateWithGameSelection
> = state => ({
  data: Object.keys(getPacks(state)),
  ItemView: StorePack,
});
const mapDispatchToProps: MapDispatchToProps<DProps, Props> = dispatch => ({
  onItemSelected: (id: PackId) => dispatch(choosePack(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectionList);
