import {cleanBoard, updateBoard, getRow, getCol, getValue} from '../utils';
import {Board} from '../types';

const B = 'B';
const V = undefined;
type Option = typeof B | typeof V;

const testBoard: Board<Option> = [[V, B, V], [B, V, B], [B, B, B]];
const emptyBoard: Board<Option> = [[V, V, V], [V, V, V], [V, V, V]];
const fullBoard: Board<Option> = [[B, B, B], [B, B, B], [B, B, B]];

describe('game utils test suite', () => {
  describe('clean board', () => {
    it('cleans up empty board', () => {
      expect(cleanBoard([[]])).toEqual([[]]);
    });
    it('cleans up board', () => {
      expect(cleanBoard(testBoard)).toEqual(emptyBoard);
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
});
