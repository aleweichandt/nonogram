import {connect, MapStateToProps} from 'react-redux';
import {PackItem} from '../ui';
import {getPack, Pack} from '../module';
import {StateWithGameSelection, PackId} from '../module';

type Props = {id: PackId};
type SProps = Partial<Pack>;

const mapStateToProps: MapStateToProps<
  SProps,
  Props,
  StateWithGameSelection
> = (state, props) => ({
  ...(getPack(state, props) || {}),
});

export default connect(
  mapStateToProps,
  null,
)(PackItem);
