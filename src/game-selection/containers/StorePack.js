// @flow
import { connect } from 'react-redux';
import { PackItem } from '../ui';
import { getPack } from '../module';
import type { StateWithGameSelectionType, PackId } from '../module';

const mapStateToProps = (state: StateWithGameSelectionType, props: {id: PackId}) => ({
  ...(getPack(state, props) || {}),
});

export default connect(mapStateToProps, null)(PackItem);
