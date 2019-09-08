import { NavigationDispatch } from 'react-navigation';

export type StateType = {
  dispatch: NavigationDispatch | undefined,
}

export type StateWithNavigationType = {
  navigation: StateType,
}
