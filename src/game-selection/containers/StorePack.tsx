import {connect} from 'react-redux';
import {PackItem} from '../ui';
import {getPack} from '../module';
import {StateWithGameSelectionType, PackId} from '../module';

type Props = {id: PackId};

const mapStateToProps = (state: StateWithGameSelectionType, props: Props) => ({
  ...(getPack(state, props) || {}),
});

export default connect(
  mapStateToProps,
  null,
)(PackItem);
