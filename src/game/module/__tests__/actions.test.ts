import {initGame, setOption, setTile, checkState, endGame} from '../actions';
import {Board, Options} from '../types';

const B = 'B';
const V = 'V';
type Option = typeof B | typeof V;

describe('game actions test suite', () => {
  const testBoard: Board<Option> = [[B, V], [V, B]];
  const testOptions: Options<Option> = [B, V];

  describe('init game', () => {
    it('default params', () => {
      expect(initGame()).toMatchSnapshot();
    });
    it('with params', () => {
      expect(initGame(testBoard, testOptions, V)).toMatchSnapshot();
    });
  });
  describe('set option', () => {
    it('with params', () => {
      expect(setOption(B)).toMatchSnapshot();
    });
  });
  describe('set tile', () => {
    it('default params', () => {
      expect(setTile()).toMatchSnapshot();
    });
    it('with params', () => {
      expect(setTile(1, 1)).toMatchSnapshot();
    });
  });
  it('check state', () => {
    expect(checkState()).toMatchSnapshot();
  });
  it('end game', () => {
    expect(endGame()).toMatchSnapshot();
  });
});
