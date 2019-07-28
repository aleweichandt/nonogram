import { OPTION_VOID } from '../const';

export const clearBoard = board => board.map(row => row.map(() => OPTION_VOID));

export const validateBoard = (board, values) => board.flatMap(
  (row, x) => row.map((val, y) => val === values[x][y]),
).reduce(
  (acc, v) => acc && v, true,
);

export const updateBoard = (board, vx, vy, option) => board.map((row, x) => row.map((val, y) => {
  const isTile = vx === x && vy === y;
  return isTile ? option : val;
}));
