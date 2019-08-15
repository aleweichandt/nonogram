// @flow
import { OPTION_VOID } from '../const';
import type {
  BoardType, OptionType, LineType, LineInfoType, InfoType,
} from '../types';

export const genClearBoard = (
  clearValue: () => OptionType,
) => (
  board: BoardType,
): BoardType => board.map(row => row.map(clearValue));

export const genValidateBoard = (
  isValid: (OptionType, OptionType) => boolean,
) => (
  board: BoardType,
  values: BoardType,
): boolean => board.every(
  (row, y) => row.every((val, x) => isValid(val, values[y][x])),
);

export const updateBoard = (
  board: BoardType,
  targetRow: number,
  targetCol: number,
  option: OptionType,
): BoardType => board.map((row, y) => row.map((val, x) => {
  const isTile = targetRow === x && targetCol === y;
  return isTile ? option : val;
}));

export const getValue = (
  board: BoardType,
  row: number,
  col: number,
): OptionType => {
  const targetRow = board[row] || [];
  return targetRow[col];
};

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

export const genGetLineInfo = (
  shouldShowInfo: (OptionType) => boolean,
) => (
  line: LineType,
  progress?: LineType = [],
  // $FlowFixMe bad reduce definition
): LineInfoType[] => [...line, OPTION_VOID].reduce((
  { result, last }: CountType,
  next: OptionType,
  i: number,
) => {
  const prog = progress[i] || OPTION_VOID;
  const tagged = prog === next;
  const { option, count, complete } = last;
  if (next === option) {
    return {
      result,
      last: { option, count: count + 1, complete: complete && tagged },
    };
  }
  return {
    result: shouldShowInfo(option) ? [...result, last] : result,
    last: { option: next, count: 1, complete: tagged },
  };
}, {
  result: [],
  last: { option: OPTION_VOID, count: 1, complete: false },
}).result;
