// @flow
import { createReducer } from '../../redux-helpers';
import { INIT_GAME, SET_OPTION, SET_TILE } from './actions';
import { DEFAULT_OPTIONS, OPTION_BLACK } from '../const';
import { clearBoard, updateBoard } from './utils';
import type { StateType } from './types';

export const initialState: StateType = {
  board: [[]],
  currentOption: OPTION_BLACK,
  options: DEFAULT_OPTIONS,
  progress: [[]],
};

const onInitGame = (
  state: StateType,
  { payload: { board, options, currentOption } },
): StateType => ({
  ...state,
  board,
  currentOption,
  options,
  progress: clearBoard(board),
});

const onSetOption = (
  state: StateType,
  { payload: { option } },
): StateType => ({
  ...state,
  currentOption: option,
});

const onSetTile = (
  state: StateType,
  { payload: { col, row } },
): StateType => ({
  ...state,
  progress: updateBoard(state.progress, col, row, state.currentOption),
});

const handlers = {
  [INIT_GAME]: onInitGame,
  [SET_TILE]: onSetTile,
  [SET_OPTION]: onSetOption,
};

export default createReducer<StateType, $Keys<typeof handlers>>(handlers, initialState);
