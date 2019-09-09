import reducer, {initialState} from '../reducer';
import {initGame, setOption, setTile} from '../actions';
import {OPTION_BLACK as B, OPTION_VOID as V} from '../const';
import {BoardType, OptionsType, StateType} from '../types';

describe('game reducer test suite', () => {
  const testBoard: BoardType = [[B, V], [V, B]];
  const cleanProgress: BoardType = [[V, V], [V, V]];
  const testOptions: OptionsType = [B, V];
  it('starts with state', () => {
    // @ts-ignore intended
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('initialise game', () => {
    const action = initGame(testBoard, testOptions, V);
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      board: testBoard,
      currentOption: V,
      options: testOptions,
      progress: cleanProgress,
    });
  });
  describe('set option', () => {
    it('valid option', () => {
      const action = setOption(B);
      const state: StateType = {
        ...initialState,
        currentOption: V,
        options: [V, B],
      };
      expect(reducer(state, action)).toEqual({
        ...state,
        currentOption: B,
      });
    });
    it('invalid option', () => {
      const action = setOption(B);
      const state: StateType = {
        ...initialState,
        currentOption: V,
        options: [V],
      };
      expect(reducer(state, action)).toEqual(state);
    });
  });
  describe('set tile', () => {
    const action = setTile(1, 1);
    it('without board', () => {
      expect(reducer(initialState, action)).toEqual(initialState);
    });
    it('with board and same option', () => {
      const state: StateType = {
        ...initialState,
        board: testBoard,
        currentOption: V,
        progress: cleanProgress,
      };
      expect(reducer(state, action)).toEqual(state);
    });
    it('with board and diff option', () => {
      const state: StateType = {
        ...initialState,
        board: testBoard,
        currentOption: B,
        progress: cleanProgress,
      };
      expect(reducer(state, action)).toEqual({
        ...state,
        progress: [[V, V], [V, B]],
      });
    });
  });
});
