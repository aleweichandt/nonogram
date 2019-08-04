// @flow
import { OPTION_VOID } from '../const';
import type { BoardType, OptionType } from './types';

export const clearBoard = (
  board: BoardType,
): BoardType => board.map(col => col.map(() => OPTION_VOID));

export const validateBoard = (
  board: BoardType,
  values: BoardType,
): boolean => board.every(
  (col, x) => col.every((val, y) => val === values[x][y]),
);

export const updateBoard = (
  board: BoardType,
  vx: number,
  vy: number,
  option: OptionType,
): BoardType => board.map((col, x) => col.map((val, y) => {
  const isTile = vx === x && vy === y;
  return isTile ? option : val;
}));
