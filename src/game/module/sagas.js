// @flow
import type { Saga } from 'redux-saga';
import {
  takeEvery, put, select, call,
} from 'redux-saga/effects';
import {
  SET_TILE, CHECK_STATE, checkState, endGame,
} from './actions';
import { getBoard, getProgress } from './selectors';
import { validateBoard } from './utils';

export function* onCheckState(): Saga<void> {
  const board = yield select(getBoard);
  const progress = yield select(getProgress);
  const solved = yield call(validateBoard, board, progress);
  if (solved) {
    yield put(endGame());
  }
}

export function* onSetTile(): Saga<void> {
  yield put(checkState());
}

export function* watchSetTile(): Saga<void> {
  yield takeEvery(SET_TILE, onSetTile);
}

export function* watchCheckState(): Saga<void> {
  yield takeEvery(CHECK_STATE, onCheckState);
}

export default [
  watchCheckState,
  watchSetTile,
];
