// @flow
import { createSelector } from 'reselect';
import type { NavigationDispatch } from 'react-navigation';
import type { StateType, StateWithNavigationType } from './types';

const getNavigationState = ({ navigation }: StateWithNavigationType): StateType => navigation;

// eslint-disable-next-line import/prefer-default-export
export const getDispatcher: (StateWithNavigationType) => NavigationDispatch = createSelector(
  getNavigationState,
  ({ dispatch }) => dispatch,
);
