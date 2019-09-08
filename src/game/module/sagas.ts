import {
  takeEvery, put, select, call,
} from 'redux-saga/effects';
import {
  SET_TILE, CHECK_STATE, checkState, endGame,
} from './actions';
import { getBoard, getProgress } from './selectors';
import { validateBoard } from './utils';

export function* onCheckState() {
  const board = yield select(getBoard);
  const progress = yield select(getProgress);
  const solved = yield call(validateBoard, board, progress);
  if (solved) {
    yield put(endGame());
  }
}

export function* onSetTile() {
  yield put(checkState());
}

export function* watchActions() {
  yield takeEvery(CHECK_STATE, onCheckState);
  yield takeEvery(SET_TILE, onSetTile);
}

export default [
  watchActions,
];
