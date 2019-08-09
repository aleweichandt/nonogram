// @flow
import { OPTION_VOID } from '../const';
import type {
  BoardType, OptionType, LineType, LineInfoType, InfoType,
} from './types';

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

export const getRow = (
  board: BoardType,
  row: number,
): LineType => board[row] || [];

export const getCol = (
  board: BoardType,
  col: number,
): LineType => board.map(row => row[col]).filter(n => !!n);

type CountType = {
  result: LineInfoType[],
  last: InfoType,
};

export const getLineInfo = (
  line: LineType,
  // $FlowFixMe bad reduce definition
): LineInfoType[] => [...line, OPTION_VOID].reduce((
  { result, last }: CountType,
  next: OptionType,
) => {
  const { option, count } = last;
  if (next === option) {
    return {
      result,
      last: { option, count: count + 1 },
    };
  }
  return {
    result: option === OPTION_VOID ? result : [...result, last],
    last: { option: next, count: 1 },
  };
}, {
  result: [],
  last: { option: OPTION_VOID, count: 1 },
}).result;
