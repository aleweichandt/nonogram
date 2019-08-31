// @flow
import type { Saga } from 'redux-saga';
import {
  takeEvery, put, select,
} from 'redux-saga/effects';
import {
  CHOOSE_PACK, CHOOSE_GAME, getCurrentGame, loadPacks, type Game,
} from '../../game-selection';
import { initGame } from '../../game';
import { navigate } from '../../navigation';
import { GAME_SELECTION, GAME } from '../../routes';

export function* onChoosePack(): Saga<void> {
  yield put(navigate({ routeName: GAME_SELECTION }));
}

export function* onChooseGame(): Saga<void> {
  const game: ?Game = yield select(getCurrentGame);
  if (game) {
    const { board, options } = JSON.parse(game.boardData);
    if (board) {
      yield put(navigate({ routeName: GAME }));
      yield put(initGame(board, options));
    }
  }
}

export function* watchForNavActions(): Saga<void> {
  yield takeEvery(CHOOSE_PACK, onChoosePack);
  yield takeEvery(CHOOSE_GAME, onChooseGame);
}

export function* initApp(): Saga<void> {
  yield put(loadPacks());
}

export default [
  watchForNavActions,
  initApp,
];
