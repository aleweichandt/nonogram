// @flow
import {
  getBoard,
  getCurrentOption,
  getOptions,
  getProgress,
} from '../selectors';
import { OPTION_BLACK as B, OPTION_VOID as V } from '../../const';

const game = {
  board: [[V, B], [B, V]],
  progress: [[V, V], [V, B]],
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
});
