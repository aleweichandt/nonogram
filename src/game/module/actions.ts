import {PayloadAction, Action} from '../../redux-helpers';
import {Board, Options} from './types';

export const INIT_GAME = 'game/INIT_GAME';
export const SET_OPTION = 'game/SET_OPTION';
export const SET_TILE = 'game/SET_TILE';
export const CHECK_STATE = 'game/CHECK_STATE';
export const END_GAME = 'game/END_GAME';

export type InitGame<T> = PayloadAction<
  typeof INIT_GAME,
  {
    board: Board<T>;
    voidOption: T | void;
    options: Options<T>;
  }
>;
export type SetOption<T> = PayloadAction<
  typeof SET_OPTION,
  {
    option: T;
  }
>;
export type SetTile = PayloadAction<
  typeof SET_TILE,
  {
    row: number;
    col: number;
  }
>;
export type CheckState = Action<typeof CHECK_STATE>;
export type EndGame = Action<typeof END_GAME>;

export const initGame = <T>(
  board: Board<T> = [[]],
  options: Options<T> = [],
  voidOption?: T,
): InitGame<T> => ({
  type: INIT_GAME,
  payload: {
    board,
    voidOption,
    options,
  },
});

export const setOption = <T>(option: T): SetOption<T> => ({
  type: SET_OPTION,
  payload: {
    option,
  },
});

export const setTile = (col: number = 0, row: number = 0): SetTile => ({
  type: SET_TILE,
  payload: {
    row,
    col,
  },
});

export const checkState = (): CheckState => ({
  type: CHECK_STATE,
});

export const endGame = (): EndGame => ({
  type: END_GAME,
});
