import { createReducer } from '../../redux-helpers';
import { SET_NAVIGATION } from './actions';
import { SetNavigationAction } from './actions';
import { StateType } from './types';


export const initialState: StateType = {
  dispatch: undefined,
};

const handleSetNavigation = (
  state: StateType,
  { payload: { dispatch } }: SetNavigationAction,
): StateType => ({
  ...state,
  dispatch,
});

const handlers = Object.freeze({
  [SET_NAVIGATION]: handleSetNavigation,
});

export default createReducer<StateType>(handlers, initialState);
