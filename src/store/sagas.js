// @flow
import type { Saga } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import { sagas as navigationSagas } from '../navigation';
import { sagas as gameSagas } from '../game';

export default function* rootSaga(): Saga<void> {
  const sagas = [
    ...navigationSagas,
    ...gameSagas,
  ].map(saga => fork(saga));
  yield all(sagas);
}
