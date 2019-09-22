import {
  getBoard,
  getCurrentOption,
  getOptions,
  getProgress,
  createValueSelector,
} from '../selectors';
import {State, StateWithBoard} from '../types';

const B = 'B';
const V = 'V';
type Option = typeof B | typeof V;

const board: State<Option> = {
  board: [[V, B], [B, V]],
  progress: [[V, V], [B, V]],
  currentOption: B,
  options: [V, B],
};
const mockState: StateWithBoard<Option> = {
  board,
};

describe('game selectors test suite', () => {
  it('get board', () => {
    expect(getBoard(mockState)).toEqual(board.board);
  });
  it('get progress', () => {
    expect(getProgress(mockState)).toEqual(board.progress);
  });
  it('get options', () => {
    expect(getOptions(mockState)).toEqual(board.options);
  });
  it('get current option', () => {
    expect(getCurrentOption(mockState)).toEqual(board.currentOption);
  });
  it('get progress value selector', () => {
    const getValue = createValueSelector();
    expect(getValue(mockState, {column: 1, row: 1})).toEqual(V);
  });
});
