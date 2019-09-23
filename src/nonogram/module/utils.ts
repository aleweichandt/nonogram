import {OPTION_VOID, OPTION_BLOCKED} from './const';
import {
  Line,
  LineInfo,
  Info,
  ColoredOptions,
  ColoredOption,
  ColoredBoard,
} from './types';

const validGroup: ColoredOptions[] = [[OPTION_BLOCKED, OPTION_VOID]];

export const isValid = (
  boardOption: ColoredOption,
  progressOption: ColoredOption,
) => {
  const groupMatcher = (group: ColoredOptions) =>
    group.includes(boardOption) && group.includes(progressOption);
  const matches = validGroup.some(groupMatcher);
  return matches || boardOption === progressOption;
};
const shouldShowInfo = (option: ColoredOption) => option !== OPTION_VOID;

export const validateBoard = (
  board: ColoredBoard,
  values: ColoredBoard,
): boolean =>
  board.every((row, y) => row.every((val, x) => isValid(val, values[y][x])));

type CountType = {
  result: LineInfo;
  last: Info;
};

export const getLineInfo = (line: Line): LineInfo => {
  const {result: info}: CountType = [...line, OPTION_VOID].reduce<CountType>(
    // @ts-ignore bad reduce definition
    ({result, last}: CountType, next: OptionType) => {
      const {option, count} = last;
      if (next === option) {
        return {
          result,
          last: {option, count: count + 1},
        };
      }
      return {
        result: shouldShowInfo(option) ? [...result, last] : result,
        last: {option: next, count: 1},
      };
    },
    {
      result: [],
      last: {option: OPTION_VOID, count: 1},
    },
  );
  return info;
};

export const getLineProgress = (line: Line, progress: Line = []): LineInfo =>
  [...line, OPTION_VOID].reduce<CountType>(
    // @ts-ignore bad reduce definition
    ({result, last}: CountType, next: OptionType, i: number) => {
      const prog = progress[i] || OPTION_VOID;
      const tagged = prog === next;
      const {option, count, complete} = last;
      if (next === option) {
        return {
          result,
          last: {option, count: count + 1, complete: complete && tagged},
        };
      }
      return {
        result: shouldShowInfo(option) ? [...result, last] : result,
        last: {option: next, count: 1, complete: tagged},
      };
    },
    {
      result: [],
      last: {option: OPTION_VOID, count: 1, complete: false},
    },
  ).result;
