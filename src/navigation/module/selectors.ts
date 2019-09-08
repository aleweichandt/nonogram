import { createSelector } from 'reselect';
import { NavigationDispatch } from 'react-navigation';
import { StateType, StateWithNavigationType } from './types';

const getNavigationState = ({ navigation }: StateWithNavigationType): StateType => navigation;

// eslint-disable-next-line import/prefer-default-export
export const getDispatcher: (state: StateWithNavigationType) => NavigationDispatch | undefined = createSelector(
  getNavigationState,
  ({ dispatch }) => dispatch,
);
