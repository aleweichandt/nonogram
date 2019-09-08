import {connect} from 'react-redux';
import {GameItem} from '../ui';
import {getGame} from '../module';
import {GameId, StateWithGameSelectionType} from '../module';

const mapStateToProps = (
  state: StateWithGameSelectionType,
  props: {id: GameId},
) => ({
  ...(getGame(state, props) || {}),
});

export default connect(
  mapStateToProps,
  null,
)(GameItem);
