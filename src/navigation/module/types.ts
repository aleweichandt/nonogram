import {NavigationDispatch} from 'react-navigation';

export type State = {
  dispatch: NavigationDispatch | undefined;
};

export type StateWithNavigationType = {
  navigation: State;
};
