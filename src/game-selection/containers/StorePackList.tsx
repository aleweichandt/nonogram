import { connect } from 'react-redux';
import { SelectionList } from '../ui';
import StorePack from './StorePack';
import { getPacks, choosePack } from '../module';
import { StateWithGameSelectionType, PackId } from '../module';

const mapStateToProps = (state: StateWithGameSelectionType) => ({
  data: Object.keys(getPacks(state)),
  ItemView: StorePack,
});
const mapDispatchToProps = (dispatch: any) => ({
  onItemSelected: (id: PackId) => dispatch(choosePack(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectionList);
