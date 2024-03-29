import {PayloadAction, Action} from '../../redux-helpers';
import {Board, Options} from './types';

export const INIT_BOARD = 'board/INIT_BOARD';
export const SET_OPTION = 'board/SET_OPTION';
export const SET_TILE = 'board/SET_TILE';
export const CHECK_STATE = 'board/CHECK_STATE';
export const END_GAME = 'board/END_GAME';

export type InitBoard<T> = PayloadAction<
  typeof INIT_BOARD,
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

export const initBoard = <T>(
  board: Board<T> = [[]],
  options: Options<T> = [],
  voidOption?: T,
): InitBoard<T> => ({
  type: INIT_BOARD,
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
