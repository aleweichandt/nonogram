import {connect, MapStateToProps} from 'react-redux';
import {GameItem} from '../ui';
import {getGame, Game} from '../module';
import {GameId, StateWithGameSelection} from '../module';

type Props = {id: GameId};
type SProps = Partial<Game>;

const mapStateToProps: MapStateToProps<
  SProps,
  Props,
  StateWithGameSelection
> = (state, props) => ({
  ...(getGame(state, props) || {}),
});

export default connect(
  mapStateToProps,
  null,
)(GameItem);
