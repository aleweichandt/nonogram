import {takeEvery, put} from 'redux-saga/effects';
import {SET_TILE, checkState} from './actions';

export function* onSetTile() {
  yield put(checkState());
}

export function* watchActions() {
  yield takeEvery(SET_TILE, onSetTile);
}

export default [watchActions];
