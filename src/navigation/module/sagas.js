// @flow
import type { Saga } from 'redux-saga';
import { select, call, takeEvery } from 'redux-saga/effects';
import {
  INIT, NAVIGATE, SET_PARAMS, BACK,
  RESET, REPLACE, POP, POP_TO_TOP, PUSH,
  // OPEN_DRAWER, CLOSE_DRAWER, TOGGLE_DRAWER,
} from './actions';
import { getDispatcher } from './selectors';

const NavigationActions = [
  INIT, NAVIGATE, SET_PARAMS, BACK,
  RESET, REPLACE, POP, POP_TO_TOP, PUSH,
  // OPEN_DRAWER, CLOSE_DRAWER, TOGGLE_DRAWER,
];

function* execNavigationAction(action): Saga<void> {
  const dispatch = yield select(getDispatcher);
  if (dispatch) {
    yield call(dispatch, action);
  }
}

function* watchNavigationActions(): Saga<void> {
  yield takeEvery(NavigationActions, execNavigationAction);
}

export default [watchNavigationActions];
