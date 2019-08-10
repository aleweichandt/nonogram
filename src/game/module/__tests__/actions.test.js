// @flow
import {
  initGame,
  setOption,
  setTile,
  checkState,
  endGame,
} from '../actions';
import { OPTION_BLACK as B, OPTION_VOID as V } from '../const';

describe('game actions test suite', () => {
  const testBoard = [[B, V], [V, B]];
  const testOptions = [B, V];
  describe('init game', () => {
    it('default params', () => {
      expect(initGame()).toMatchSnapshot();
    });
    it('with params', () => {
      expect(initGame(testBoard, testOptions, V)).toMatchSnapshot();
    });
  });
  describe('set option', () => {
    it('default params', () => {
      expect(setOption()).toMatchSnapshot();
    });
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
