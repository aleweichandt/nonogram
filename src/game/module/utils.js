// @flow
import { OPTION_VOID } from '../const';
import type { BoardType, OptionType } from './types';

export const clearBoard = (
  board: BoardType,
): BoardType => board.map(row => row.map(() => OPTION_VOID));

export const validateBoard = (
  board: BoardType,
  values: BoardType,
): boolean => board.every(
  (row, y) => row.every((val, x) => val === values[y][x]),
);

export const updateBoard = (
  board: BoardType,
  vx: number,
  vy: number,
  option: OptionType,
): BoardType => board.map((row, y) => row.map((val, x) => {
  const isTile = vx === x && vy === y;
  return isTile ? option : val;
}));
