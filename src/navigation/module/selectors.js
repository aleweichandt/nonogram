import { createSelector } from 'reselect';

const getNavigationState = ({ navigation }) => navigation;

// eslint-disable-next-line import/prefer-default-export
export const getDispatcher = createSelector(
  getNavigationState,
  ({ dispatch }) => dispatch,
);
