import { takeEvery, put, select } from 'redux-saga/effects';
import {
  SET_TILE, CHECK_STATE, checkState, endGame,
} from './actions';
import { getBoard, getProgress } from './selectors';
import { validateBoard } from './utils';

export function* onCheckState() {
  const board = yield select(getBoard);
  const progress = yield select(getProgress);
  const solved = validateBoard(board, progress);
  if (solved) {
    yield put(endGame());
  }
}

export function* onSetTile() {
  yield put(checkState());
}

export function* watchSetTile() {
  yield takeEvery(SET_TILE, onSetTile);
}

export function* watchCheckState() {
  yield takeEvery(CHECK_STATE, onCheckState);
}

export default [
  watchCheckState,
  watchSetTile,
];
