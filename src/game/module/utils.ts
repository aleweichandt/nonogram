import {Board, Options} from './types';

export const cleanBoard = <T>(board: Board<T>, voidOption?: T): Board<any> =>
  board.map(row => row.map(() => voidOption));

export const updateBoard = <T>(
  board: Board<T>,
  targetRow: number,
  targetCol: number,
  option: T,
): Board<T> =>
  board.map((row, y) =>
    row.map((val, x) => {
      const isTile = targetRow === x && targetCol === y;
      return isTile ? option : val;
    }),
  );

export const getValue = <T>(board: Board<T>, row: number, col: number): T => {
  const targetRow = board[row] || [];
  return targetRow[col];
};

export const getRow = <T>(board: Board<T>, row: number): Options<T> =>
  board[row] || [];

export const getCol = <T>(board: Board<T>, col: number): Options<T> => {
  const [first] = board;
  return first.length > col && col > -1 ? board.map(row => row[col]) : [];
};
