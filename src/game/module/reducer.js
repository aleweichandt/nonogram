import { INIT_GAME, SET_OPTION, SET_TILE } from './actions';
import { DEFAULT_OPTIONS, OPTION_BLACK } from '../const';
import { clearBoard, updateBoard } from './utils';


export const initialState = {
  board: [[]],
  currentOption: OPTION_BLACK,
  options: DEFAULT_OPTIONS,
  progress: [[]],
};

const onInitGame = (state, { payload: { board, options, currentOption } }) => ({
  ...state,
  board,
  currentOption,
  options,
  progress: clearBoard(board),
});

const onSetOption = (state, { payload: { option } }) => ({
  ...state,
  currentOption: option,
});

const onSetTile = (state, { payload: { row, col } }) => ({
  ...state,
  progress: updateBoard(state.progress, row, col, state.currentOption),
});

const actionHandlers = {
  [INIT_GAME]: onInitGame,
  [SET_TILE]: onSetTile,
  [SET_OPTION]: onSetOption,
};

const reducer = (state = initialState, { type = '', ...action }) => {
  const { [type]: handler = t => t } = actionHandlers;
  return handler(state, action);
};

export default reducer;
