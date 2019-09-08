import {
  clearBoard,
  validateBoard,
  updateBoard,
  getRow,
  getCol,
  getValue,
  getLineInfo,
} from '../index';
import {
  OPTION_BLACK as B,
  OPTION_VOID as V,
  OPTION_BLUE as C,
} from '../../const';
import {BoardType} from '../../types';

const testBoard: BoardType = [[V, B, V], [B, V, B], [B, B, B]];
const emptyBoard: BoardType = [[V, V, V], [V, V, V], [V, V, V]];
const fullBoard: BoardType = [[B, B, B], [B, B, B], [B, B, B]];

describe('game utils test suite', () => {
  describe('clean board', () => {
    it('cleans up empty board', () => {
      expect(clearBoard([[]])).toEqual([[]]);
    });
    it('cleans up board', () => {
      expect(clearBoard(testBoard)).toEqual(emptyBoard);
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
  describe('update board', () => {
    it('update first', () => {
      expect(updateBoard(emptyBoard, 0, 0, B)).toEqual([
        [B, V, V],
        [V, V, V],
        [V, V, V],
      ]);
    });
    it('update last', () => {
      expect(updateBoard(emptyBoard, 2, 2, B)).toEqual([
        [V, V, V],
        [V, V, V],
        [V, V, B],
      ]);
    });
    it('update col', () => {
      expect(updateBoard(emptyBoard, 0, 1, B)).toEqual([
        [V, V, V],
        [B, V, V],
        [V, V, V],
      ]);
    });
    it('update row', () => {
      expect(updateBoard(emptyBoard, 1, 0, B)).toEqual([
        [V, B, V],
        [V, V, V],
        [V, V, V],
      ]);
    });
    it('update other option', () => {
      expect(updateBoard(fullBoard, 0, 0, V)).toEqual([
        [V, B, B],
        [B, B, B],
        [B, B, B],
      ]);
    });
  });
  describe('get row', () => {
    it('get matching row', () => {
      expect(getRow(testBoard, 0)).toEqual([V, B, V]);
      expect(getRow(testBoard, 1)).toEqual([B, V, B]);
      expect(getRow(testBoard, 2)).toEqual([B, B, B]);
    });
    it('returns empty on mismatch', () => {
      expect(getRow(testBoard, -1)).toEqual([]);
      expect(getRow(testBoard, 3)).toEqual([]);
    });
  });
  describe('get col', () => {
    it('get matching col', () => {
      expect(getCol(testBoard, 0)).toEqual([V, B, B]);
      expect(getCol(testBoard, 1)).toEqual([B, V, B]);
      expect(getCol(testBoard, 2)).toEqual([V, B, B]);
    });
    it('returns empty on mismatch', () => {
      expect(getCol(testBoard, -1)).toEqual([]);
      expect(getCol(testBoard, 3)).toEqual([]);
    });
  });
  describe('get value', () => {
    it('get for valid row and col', () => {
      expect(getValue(testBoard, 0, 0)).toEqual(V);
      expect(getValue(testBoard, 0, 2)).toEqual(V);
      expect(getValue(testBoard, 2, 0)).toEqual(B);
    });
    it('get invalid col', () => {
      expect(getValue(testBoard, 0, -1)).toEqual(undefined);
    });
    it('get invalid row', () => {
      expect(getValue(testBoard, -1, 0)).toEqual(undefined);
    });
    it('get both invalid', () => {
      expect(getValue(testBoard, -1, -1)).toEqual(undefined);
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
