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
import {
  ChoosePackAction,
  LoadGamesAction,
} from './actions';

export function* onChoosePack({ payload: { packId } }: ChoosePackAction) {
  yield put(loadGames(packId));
}

export function* onLoadPacks() {
  const result = yield call(packs);
  yield put(storePacks(result));
}

export function* onLoadGames({ payload: { packId } }: LoadGamesAction) {
  const result = yield call(games, packId);
  yield put(storeGames(result));
}

export function* watchActions() {
  yield takeEvery(LOAD_PACKS, onLoadPacks);
  yield takeEvery(LOAD_GAMES, onLoadGames);
  yield takeEvery(CHOOSE_PACK, onChoosePack);
}

export default [
  watchActions,
];
