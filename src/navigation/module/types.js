// @flow
import type { NavigationDispatch } from 'react-navigation';

export type StateType = {
  dispatch: ?NavigationDispatch,
}

export type StateWithNavigationType = {
  navigation: StateType,
}
