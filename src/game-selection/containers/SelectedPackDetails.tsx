import {connect, MapStateToProps, MapDispatchToProps} from 'react-redux';
import {PackDetail} from '../ui';
import PackGame from './PackGame';
import {getCurrentPack, chooseGame, Pack} from '../module';
import {StateWithGameSelection, GameId} from '../module';

type Props = {};
type SProps = Partial<Pack> & {
  Game: typeof PackGame;
};
type DProps = {
  onGameSelected: (id: GameId) => void;
};

const mapStateToProps: MapStateToProps<
  SProps,
  Props,
  StateWithGameSelection
> = state => ({
  ...(getCurrentPack(state) || {}),
  Game: PackGame,
});
const mapDispatchToProps: MapDispatchToProps<DProps, Props> = dispatch => ({
  onGameSelected: (id: GameId) => dispatch(chooseGame(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PackDetail);
