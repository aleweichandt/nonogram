import {connect} from 'react-redux';
import {GameItem} from '../ui';
import {getGame} from '../module';
import {GameId, StateWithGameSelectionType} from '../module';

type Props = {id: GameId};

const mapStateToProps = (state: StateWithGameSelectionType, props: Props) => ({
  ...(getGame(state, props) || {}),
});

export default connect(
  mapStateToProps,
  null,
)(GameItem);
