import {validateBoard, getLineInfo, isValid} from '../utils';
import {
  OPTION_VOID as V,
  OPTION_BLOCKED as X,
  OPTION_BLACK as B,
  OPTION_BLUE as C,
} from '../const';
import {ColoredBoard} from '../types';

const testBoard: ColoredBoard = [[V, B, V], [B, V, B], [B, B, B]];
const emptyBoard: ColoredBoard = [[V, V, V], [V, V, V], [V, V, V]];
const fullBoard: ColoredBoard = [[B, B, B], [B, B, B], [B, B, B]];

describe('game utils test suite', () => {
  describe('is valid', () => {
    it('matching void with blocked', () => {
      expect(isValid(V, X)).toEqual(true);
      expect(isValid(X, V)).toEqual(true);
    });
    it('matches exact', () => {
      expect(isValid(V, V)).toEqual(true);
      expect(isValid(B, B)).toEqual(true);
      expect(isValid(C, C)).toEqual(true);
      expect(isValid(B, B)).toEqual(true);
    });
    it('mismatches other', () => {
      expect(isValid(V, C)).toEqual(false);
      expect(isValid(B, V)).toEqual(false);
      expect(isValid(B, C)).toEqual(false);
      expect(isValid(B, X)).toEqual(false);
    });
  });
  describe('validate board', () => {
    it('completed board', () => {
      expect(validateBoard(testBoard, testBoard)).toEqual(true);
    });
    it('empty board', () => {
      expect(validateBoard(testBoard, emptyBoard)).toEqual(false);
    });
    it('full board', () => {
      expect(validateBoard(testBoard, fullBoard)).toEqual(false);
    });
  });
  describe('get line info', () => {
    describe('without progress', () => {
      it('counts empty', () => {
        expect(getLineInfo([])).toEqual([]);
      });
      it('counts single', () => {
        expect(getLineInfo([V])).toEqual([]);
        expect(getLineInfo([B])).toEqual([
          {option: B, count: 1, complete: false},
        ]);
      });
      it('counts blank', () => {
        expect(getLineInfo([V, V, V])).toEqual([]);
      });
      it('counts begin', () => {
        expect(getLineInfo([B, V, V])).toEqual([
          {option: B, count: 1, complete: false},
        ]);
        expect(getLineInfo([B, B, V])).toEqual([
          {option: B, count: 2, complete: false},
        ]);
        expect(getLineInfo([B, B, B])).toEqual([
          {option: B, count: 3, complete: false},
        ]);
      });
      it('counts end', () => {
        expect(getLineInfo([V, V, B])).toEqual([
          {option: B, count: 1, complete: false},
        ]);
        expect(getLineInfo([V, B, B])).toEqual([
          {option: B, count: 2, complete: false},
        ]);
      });
      it('counts middle', () => {
        expect(getLineInfo([V, B, V])).toEqual([
          {option: B, count: 1, complete: false},
        ]);
        expect(getLineInfo([V, B, B, V])).toEqual([
          {option: B, count: 2, complete: false},
        ]);
      });
      it('counts many', () => {
        expect(getLineInfo([B, V, B])).toEqual([
          {option: B, count: 1, complete: false},
          {option: B, count: 1, complete: false},
        ]);
        expect(getLineInfo([B, V, B, V])).toEqual([
          {option: B, count: 1, complete: false},
          {option: B, count: 1, complete: false},
        ]);
        expect(getLineInfo([V, B, V, B])).toEqual([
          {option: B, count: 1, complete: false},
          {option: B, count: 1, complete: false},
        ]);
        expect(getLineInfo([B, B, V, B])).toEqual([
          {option: B, count: 2, complete: false},
          {option: B, count: 1, complete: false},
        ]);
        expect(getLineInfo([B, V, B, B])).toEqual([
          {option: B, count: 1, complete: false},
          {option: B, count: 2, complete: false},
        ]);
        expect(getLineInfo([V, B, B, V, B])).toEqual([
          {option: B, count: 2, complete: false},
          {option: B, count: 1, complete: false},
        ]);
        expect(getLineInfo([V, B, V, B, B])).toEqual([
          {option: B, count: 1, complete: false},
          {option: B, count: 2, complete: false},
        ]);
        expect(getLineInfo([B, B, V, B, B])).toEqual([
          {option: B, count: 2, complete: false},
          {option: B, count: 2, complete: false},
        ]);
      });
      it('supports multi options', () => {
        expect(getLineInfo([B, C, C, V, B])).toEqual([
          {option: B, count: 1, complete: false},
          {option: C, count: 2, complete: false},
          {option: B, count: 1, complete: false},
        ]);
        expect(getLineInfo([B, V, C, C, B])).toEqual([
          {option: B, count: 1, complete: false},
          {option: C, count: 2, complete: false},
          {option: B, count: 1, complete: false},
        ]);
      });
    });
    describe('with progress', () => {
      it('missaligned', () => {
        expect(getLineInfo([V, B, V], [B, V, V])).toEqual([
          {option: B, count: 1, complete: false},
        ]);
        expect(getLineInfo([V, B, V], [V, V, B])).toEqual([
          {option: B, count: 1, complete: false},
        ]);
        expect(getLineInfo([V, B], [B, V])).toEqual([
          {option: B, count: 1, complete: false},
        ]);
        expect(getLineInfo([B, V], [V, B])).toEqual([
          {option: B, count: 1, complete: false},
        ]);
        expect(getLineInfo([B, B, V], [V, B, B])).toEqual([
          {option: B, count: 2, complete: false},
        ]);
        expect(getLineInfo([V, B, B], [B, B, V])).toEqual([
          {option: B, count: 2, complete: false},
        ]);
      });
      it('missing less count', () => {
        expect(getLineInfo([B, B, V], [B, V, V])).toEqual([
          {option: B, count: 2, complete: false},
        ]);
        expect(getLineInfo([B, B, V], [V, B, V])).toEqual([
          {option: B, count: 2, complete: false},
        ]);
        expect(getLineInfo([V, B, B], [V, B, V])).toEqual([
          {option: B, count: 2, complete: false},
        ]);
        expect(getLineInfo([V, B, B], [V, V, B])).toEqual([
          {option: B, count: 2, complete: false},
        ]);
      });
      // TODO disable multi match
      // eslint-disable-next-line jest/no-disabled-tests
      it.skip('missing more count', () => {
        expect(getLineInfo([B, B, V], [B, B, B])).toEqual([
          {option: B, count: 2, complete: false},
        ]);
        expect(getLineInfo([V, B, B], [B, B, B])).toEqual([
          {option: B, count: 2, complete: false},
        ]);
      });
      it('matches single', () => {
        expect(
          getLineInfo([B, V, B, V, B, B, B, V, B], [B, V, B, V, B, V, V, V, B]),
        ).toEqual([
          {option: B, count: 1, complete: true},
          {option: B, count: 1, complete: true},
          {option: B, count: 3, complete: false},
          {option: B, count: 1, complete: true},
        ]);
      });
      it('matches many', () => {
        expect(
          getLineInfo([B, V, B, V, B, B, B, V, B], [V, V, V, V, B, B, B, V, V]),
        ).toEqual([
          {option: B, count: 1, complete: false},
          {option: B, count: 1, complete: false},
          {option: B, count: 3, complete: true},
          {option: B, count: 1, complete: false},
        ]);
      });
      it('matches multi', () => {
        expect(getLineInfo([V, B, C, B, V, C], [V, B, C, V, V, C])).toEqual([
          {option: B, count: 1, complete: true},
          {option: C, count: 1, complete: true},
          {option: B, count: 1, complete: false},
          {option: C, count: 1, complete: true},
        ]);
      });
    });
  });
});
