// @flow
import type { Saga } from 'redux-saga';
import {
  takeEvery, put,
} from 'redux-saga/effects';
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
  // TODO fetch packs
  const mocks = [];
  yield put(storePacks(mocks));
}

export function* onLoadGames({ payload: { packId } }: LoadGamesAction): Saga<void> {
  // TODO fetch pack games
  const mocks = { [packId]: [] };
  yield put(storeGames(mocks[packId]));
}

export function* watchActions(): Saga<void> {
  yield takeEvery(LOAD_PACKS, onLoadPacks);
  yield takeEvery(LOAD_GAMES, onLoadGames);
  yield takeEvery(CHOOSE_PACK, onChoosePack);
}

export default [
  watchActions,
];
