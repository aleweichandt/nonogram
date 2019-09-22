import {State} from '../../../game';
import {createColInfo, createRowInfo} from '../selectors';
import {OPTION_BLACK as B, OPTION_VOID as V} from '../const';
import {ColoredOption} from '../types';

const board: State<ColoredOption> = {
  board: [[V, B], [B, V]],
  progress: [[V, V], [B, V]],
  currentOption: B,
  options: [V, B],
};
const mockState = {
  board,
};

describe('game selectors test suite', () => {
  it('get row info', () => {
    const getRowInfo = createRowInfo();
    expect(getRowInfo(mockState, {row: 0})).toEqual([
      {option: B, count: 1, complete: false},
    ]);
  });
  it('get col info', () => {
    const getColInfo = createColInfo();
    expect(getColInfo(mockState, {column: 0})).toEqual([
      {option: B, count: 1, complete: true},
    ]);
  });
});
