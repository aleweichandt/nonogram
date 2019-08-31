// @flow
import { connect } from 'react-redux';
import { PackDetail } from '../ui';
import PackGame from './PackGame';
import { getCurrentPack, chooseGame } from '../module';
import type { StateWithGameSelectionType, GameId } from '../module';

const mapStateToProps = (state: StateWithGameSelectionType) => ({
  ...(getCurrentPack(state) || {}),
  Game: PackGame,
});
const mapDispatchToProps = dispatch => ({
  onGameSelected: (id: GameId) => dispatch(chooseGame(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PackDetail);
