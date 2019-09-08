import {NavigationActions, StackActions} from 'react-navigation';
import {NavigationProp} from 'react-navigation';
import {ActionWithPayload} from '../../redux-helpers';

export const {
  BACK,
  SET_PARAMS,
  NAVIGATE,
  INIT,
  init,
  setParams,
  navigate,
  back,
} = NavigationActions;
export const {
  RESET,
  REPLACE,
  PUSH,
  POP,
  POP_TO_TOP,
  reset,
  replace,
  push,
  pop,
  popToTop,
} = StackActions;
// export const {
//   OPEN_DRAWER, CLOSE_DRAWER, TOGGLE_DRAWER,
//   openDrawer, closeDrawer, toggleDrawer,
// } = DrawerActions;

export const SET_NAVIGATION = 'NAVIGATION/SET_NAVIGATION';
export type SetNavigationAction = ActionWithPayload<
  typeof SET_NAVIGATION,
  NavigationProp<{}>
>;
export type ActionType = typeof SET_NAVIGATION;

export const setNavigation = (
  payload: NavigationProp<{}>,
): SetNavigationAction => ({
  type: SET_NAVIGATION,
  payload,
});
