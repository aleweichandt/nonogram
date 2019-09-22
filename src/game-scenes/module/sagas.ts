import {takeEvery, put, select} from 'redux-saga/effects';
import {
  CHOOSE_PACK,
  CHOOSE_GAME,
  getCurrentGame,
  loadPacks,
  Game,
} from '../../game-selection';
import {initGame} from '../../game';
import {navigate} from '../../navigation';
import {GAME_SELECTION, GAME} from '../../routes';

export function* onChoosePack() {
  yield put(navigate({routeName: GAME_SELECTION}));
}

export function* onChooseGame() {
  const game: Game = yield select(getCurrentGame);
  if (game) {
    const {board, options, voidOption} = JSON.parse(game.boardData);
    if (board) {
      yield put(navigate({routeName: GAME}));
      yield put(initGame(board, options, voidOption));
    }
  }
}

export function* watchForNavActions() {
  yield takeEvery(CHOOSE_PACK, onChoosePack);
  yield takeEvery(CHOOSE_GAME, onChooseGame);
}

export function* initApp() {
  yield put(loadPacks());
}

export default [watchForNavActions, initApp];
