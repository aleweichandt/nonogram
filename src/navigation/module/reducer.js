import { SET_NAVIGATION } from './actions';

export const initialState = {
  dispatch: undefined,
};

const handleSetNavigation = (state, { payload: { dispatch } }) => ({
  ...state,
  dispatch,
});

const handlers = {
  [SET_NAVIGATION]: handleSetNavigation,
};
export default (state = initialState, { type, ...action }) => {
  const { [type]: handle = s => s } = handlers;
  return handle(state, action);
};
