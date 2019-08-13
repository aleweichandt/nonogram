// @flow
import {
  getBoard,
  getCurrentOption,
  getOptions,
  getProgress,
  createColInfo,
  createRowInfo,
  createValueSelector,
} from '../selectors';
import { OPTION_BLACK as B, OPTION_VOID as V } from '../const';

const game = {
  board: [
    [V, B],
    [B, V],
  ],
  progress: [
    [V, V],
    [B, V],
  ],
  currentOption: B,
  options: [V, B],
};
const mockState = {
  game,
};

describe('game selectors test suite', () => {
  it('get board', () => {
    expect(getBoard(mockState)).toEqual(game.board);
  });
  it('get progress', () => {
    expect(getProgress(mockState)).toEqual(game.progress);
  });
  it('get options', () => {
    expect(getOptions(mockState)).toEqual(game.options);
  });
  it('get current option', () => {
    expect(getCurrentOption(mockState)).toEqual(game.currentOption);
  });
  it('get row info', () => {
    const getRowInfo = createRowInfo();
    expect(getRowInfo(mockState, { row: 0 })).toEqual([
      { option: B, count: 1 },
    ]);
  });
  it('get col info', () => {
    const getColInfo = createColInfo();
    expect(getColInfo(mockState, { column: 0 })).toEqual([
      { option: B, count: 1 },
    ]);
  });
  it('get progress value selector', () => {
    const getValue = createValueSelector();
    expect(getValue(mockState, { column: 1, row: 1 })).toEqual(V);
  });
});
