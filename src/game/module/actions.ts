import {DEFAULT_OPTIONS, OPTION_VOID, OPTION_BLACK} from './const';
import {PayloadAction, Action} from '../../redux-helpers';
import {OptionType} from './types';

export const INIT_GAME = 'game/INIT_GAME';
export const SET_OPTION = 'game/SET_OPTION';
export const SET_TILE = 'game/SET_TILE';
export const CHECK_STATE = 'game/CHECK_STATE';
export const END_GAME = 'game/END_GAME';

export type InitGameAction = PayloadAction<
  typeof INIT_GAME,
  {
    board: OptionType[][];
    currentOption: OptionType;
    options: OptionType[];
  }
>;
export type SetOptionAction = PayloadAction<
  typeof SET_OPTION,
  {
    option: OptionType;
  }
>;
export type SetTyleAction = PayloadAction<
  typeof SET_TILE,
  {
    row: number;
    col: number;
  }
>;
export type CheckStateAction = Action<typeof CHECK_STATE>;
export type EndGameAction = Action<typeof END_GAME>;
/**
 - init game
 - set_tile -> check_state -> set_state [-> end_game]
 */

export const initGame = (
  board: OptionType[][] = [[]],
  options: OptionType[] = DEFAULT_OPTIONS,
  currentOption: OptionType = OPTION_BLACK,
): InitGameAction => ({
  type: INIT_GAME,
  payload: {
    board,
    currentOption,
    options,
  },
});

export const setOption = (
  option: OptionType = OPTION_VOID,
): SetOptionAction => ({
  type: SET_OPTION,
  payload: {
    option,
  },
});

export const setTile = (col: number = 0, row: number = 0): SetTyleAction => ({
  type: SET_TILE,
  payload: {
    row,
    col,
  },
});

export const checkState = (): CheckStateAction => ({
  type: CHECK_STATE,
});

export const endGame = (): EndGameAction => ({
  type: END_GAME,
});
