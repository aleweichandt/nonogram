// @flow
import type { Saga } from 'redux-saga';
import {
  takeEvery, call, put,
} from 'redux-saga/effects';
import {
  packs,
  games,
} from '../../service';
import {
  LOAD_PACKS,
  CHOOSE_PACK,
  LOAD_GAMES,
  loadGames,
  storePacks,
  storeGames,
} from './actions';
import type {
  ChoosePackAction,
  LoadGamesAction,
} from './actions';

export function* onChoosePack({ payload: { packId } }: ChoosePackAction): Saga<void> {
  yield put(loadGames(packId));
}

export function* onLoadPacks(): Saga<void> {
  const result = yield call(packs);
  yield put(storePacks(result));
}

export function* onLoadGames({ payload: { packId } }: LoadGamesAction): Saga<void> {
  const result = yield call(games, packId);
  yield put(storeGames(result));
}

export function* watchActions(): Saga<void> {
  yield takeEvery(LOAD_PACKS, onLoadPacks);
  yield takeEvery(LOAD_GAMES, onLoadGames);
  yield takeEvery(CHOOSE_PACK, onChoosePack);
}

export default [
  watchActions,
];
