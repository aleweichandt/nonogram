import {createReducer} from '../../redux-helpers';
import {SET_NAVIGATION} from './actions';
import {SetNavigationAction} from './actions';
import {State} from './types';

export const initialState: State = {
  dispatch: undefined,
};

const handleSetNavigation = (
  state: State,
  {payload: {dispatch}}: SetNavigationAction,
): State => ({
  ...state,
  dispatch,
});

const handlers = Object.freeze({
  [SET_NAVIGATION]: handleSetNavigation,
});

export default createReducer<State>(handlers, initialState);
