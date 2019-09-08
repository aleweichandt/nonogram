import { all, fork } from 'redux-saga/effects';

import { sagas as navigationSagas } from '../navigation';
import { sagas as gameScenesSagas } from '../game-scenes';
import { sagas as gameSagas } from '../game';
import { sagas as gameSelectionSagas } from '../game-selection';

export default function* rootSaga() {
  const sagas = [
    ...navigationSagas,
    ...gameSagas,
    ...gameSelectionSagas,
    ...gameScenesSagas,
  ].map(saga => fork(saga));
  yield all(sagas);
}
