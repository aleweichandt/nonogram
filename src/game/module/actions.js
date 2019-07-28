import { DEFAULT_OPTIONS, OPTION_VOID, OPTION_BLACK } from '../const';

export const INIT_GAME = 'game/INIT_GAME';
export const SET_OPTION = 'game/SET_OPTION';
export const SET_TILE = 'game/SET_TILE';
export const CHECK_STATE = 'game/CHECK_STATE';
export const END_GAME = 'game/END_GAME';

/**
 - init game
 - set_tile -> check_state -> set_state [-> end_game]
 */

export const initGame = (
  board = [[]],
  options = DEFAULT_OPTIONS,
  currentOption = OPTION_BLACK,
) => ({
  type: INIT_GAME,
  payload: {
    board,
    currentOption,
    options,
  },
});

export const setOption = (option = OPTION_VOID) => ({
  type: SET_OPTION,
  payload: {
    option,
  },
});

export const setTile = (row = 0, col = 0) => ({
  type: SET_TILE,
  payload: {
    row,
    col,
  },
});

export const checkState = () => ({
  type: CHECK_STATE,
});

export const endGame = () => ({
  type: END_GAME,
});
