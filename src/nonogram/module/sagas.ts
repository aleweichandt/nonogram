import {takeEvery, put, select, call} from 'redux-saga/effects';
import {CHECK_STATE, endGame, getBoard, getProgress} from '../../game';
import {validateBoard} from './utils';

export function* onCheckState() {
  const board = yield select(getBoard);
  const progress = yield select(getProgress);
  const solved = yield call(validateBoard, board, progress);
  if (solved) {
    yield put(endGame());
  }
}

export function* watchActions() {
  yield takeEvery(CHECK_STATE, onCheckState);
}

export default [watchActions];
