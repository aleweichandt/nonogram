import reducer, {initialState} from '../reducer';
import {initBoard, setOption, setTile} from '../actions';
import {Board, Options, State} from '../types';

const B = 'B';
const V = 'V';
type Option = typeof B | typeof V;

describe('game reducer test suite', () => {
  const testBoard: Board<Option> = [[B, V], [V, B]];
  const cleanProgress: Board<Option> = [[V, V], [V, V]];
  const testOptions: Options<Option> = [V, B];
  it('starts with state', () => {
    // @ts-ignore intended
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('initialise game', () => {
    const action = initBoard(testBoard, testOptions, V);
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
      const state: State<Option> = {
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
      const state: State<Option> = {
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
      const state: State<Option> = {
        ...initialState,
        board: testBoard,
        currentOption: V,
        progress: cleanProgress,
      };
      expect(reducer(state, action)).toEqual(state);
    });
    it('with board and diff option', () => {
      const state: State<Option> = {
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
