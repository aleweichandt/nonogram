// @flow
import {
  clearBoard,
  validateBoard,
  updateBoard,
  getRow,
  getCol,
  getLineInfo,
} from '../utils';
import { OPTION_BLACK as B, OPTION_VOID as V, OPTION_BLUE as C } from '../../const';

const testBoard = [
  [V, B, V],
  [B, V, B],
  [B, B, B],
];
const emptyBoard = [
  [V, V, V],
  [V, V, V],
  [V, V, V],
];
const fullBoard = [
  [B, B, B],
  [B, B, B],
  [B, B, B],
];

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
  describe('get line info', () => {
    it('counts empty', () => {
      expect(getLineInfo([])).toEqual([]);
    });
    it('counts single', () => {
      expect(getLineInfo([V])).toEqual([]);
      expect(getLineInfo([B])).toEqual([
        { option: B, count: 1 },
      ]);
    });
    it('counts blank', () => {
      expect(getLineInfo([V, V, V])).toEqual([]);
    });
    it('counts begin', () => {
      expect(getLineInfo([B, V, V])).toEqual([
        { option: B, count: 1 },
      ]);
      expect(getLineInfo([B, B, V])).toEqual([
        { option: B, count: 2 },
      ]);
      expect(getLineInfo([B, B, B])).toEqual([
        { option: B, count: 3 },
      ]);
    });
    it('counts end', () => {
      expect(getLineInfo([V, V, B])).toEqual([
        { option: B, count: 1 },
      ]);
      expect(getLineInfo([V, B, B])).toEqual([
        { option: B, count: 2 },
      ]);
    });
    it('counts middle', () => {
      expect(getLineInfo([V, B, V])).toEqual([
        { option: B, count: 1 },
      ]);
      expect(getLineInfo([V, B, B, V])).toEqual([
        { option: B, count: 2 },
      ]);
    });
    it('counts many', () => {
      expect(getLineInfo([B, V, B])).toEqual([
        { option: B, count: 1 },
        { option: B, count: 1 },
      ]);
      expect(getLineInfo([B, V, B, V])).toEqual([
        { option: B, count: 1 },
        { option: B, count: 1 },
      ]);
      expect(getLineInfo([V, B, V, B])).toEqual([
        { option: B, count: 1 },
        { option: B, count: 1 },
      ]);
      expect(getLineInfo([B, B, V, B])).toEqual([
        { option: B, count: 2 },
        { option: B, count: 1 },
      ]);
      expect(getLineInfo([B, V, B, B])).toEqual([
        { option: B, count: 1 },
        { option: B, count: 2 },
      ]);
      expect(getLineInfo([V, B, B, V, B])).toEqual([
        { option: B, count: 2 },
        { option: B, count: 1 },
      ]);
      expect(getLineInfo([V, B, V, B, B])).toEqual([
        { option: B, count: 1 },
        { option: B, count: 2 },
      ]);
      expect(getLineInfo([B, B, V, B, B])).toEqual([
        { option: B, count: 2 },
        { option: B, count: 2 },
      ]);
    });
    it('supports multi options', () => {
      expect(getLineInfo([B, C, C, V, B])).toEqual([
        { option: B, count: 1 },
        { option: C, count: 2 },
        { option: B, count: 1 },
      ]);
      expect(getLineInfo([B, V, C, C, B])).toEqual([
        { option: B, count: 1 },
        { option: C, count: 2 },
        { option: B, count: 1 },
      ]);
    });
  });
});
