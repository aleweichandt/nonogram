import {all, fork} from 'redux-saga/effects';

import {sagas as navigationSagas} from '../navigation';
import {sagas as gameScenesSagas} from '../game-scenes';
import {sagas as boardSagas} from '../board';
import {sagas as gameSagas} from '../nonogram';
import {sagas as gameSelectionSagas} from '../game-selection';

export default function* rootSaga() {
  const sagas = [
    ...navigationSagas,
    ...boardSagas,
    ...gameSagas,
    ...gameSelectionSagas,
    ...gameScenesSagas,
  ].map(saga => fork(saga));
  yield all(sagas);
}
