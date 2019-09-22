import {createSelector} from 'reselect';
import {NavigationDispatch} from 'react-navigation';
import {State, StateWithNavigationType} from './types';

const getNavigationState = ({navigation}: StateWithNavigationType): State =>
  navigation;

export const getDispatcher: (
  state: StateWithNavigationType,
) => NavigationDispatch | undefined = createSelector(
  getNavigationState,
  ({dispatch}) => dispatch,
);
