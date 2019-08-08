// @flow
import {
  clearBoard,
  validateBoard,
  updateBoard,
} from '../utils';
import { OPTION_BLACK as B, OPTION_VOID as V } from '../../const';

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
});
