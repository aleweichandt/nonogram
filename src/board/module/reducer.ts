import {createReducer} from '../../redux-helpers';
import {
  INIT_BOARD,
  SET_OPTION,
  SET_TILE,
  InitBoard,
  SetOption,
  SetTile,
} from './actions';
import {cleanBoard, updateBoard} from './utils';
import {State} from './types';

export const initialState: State<any> = {
  board: [[]],
  currentOption: undefined,
  options: [],
  progress: [[]],
};

const onInitBoard = (
  state: State<any>,
  {payload: {board, options, voidOption}}: InitBoard<any>,
): State<any> => ({
  ...state,
  board,
  currentOption: voidOption,
  options,
  progress: cleanBoard<any>(board, voidOption),
});

const onSetOption = (
  state: State<any>,
  {payload: {option}}: SetOption<any>,
): State<any> =>
  state.options.includes(option)
    ? {
        ...state,
        currentOption: option,
      }
    : state;

const onSetTile = (
  state: State<any>,
  {payload: {col, row}}: SetTile,
): State<any> => ({
  ...state,
  progress: updateBoard(state.progress, col, row, state.currentOption),
});

const handlers = Object.freeze({
  [INIT_BOARD]: onInitBoard,
  [SET_TILE]: onSetTile,
  [SET_OPTION]: onSetOption,
});

export default createReducer<State<any>>(handlers, initialState);
