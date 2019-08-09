// @flow
import {
  OPTION_BLACK, OPTION_BLUE, OPTION_BLOCKED, OPTION_VOID,
} from './const';

export type OptionType = |
  typeof OPTION_BLACK |
  typeof OPTION_BLUE |
  typeof OPTION_BLOCKED |
  typeof OPTION_VOID;

export type OptionsType = OptionType[];

export type InfoType = {
  option: OptionType,
  count: number,
}
export type LineInfoType = InfoType[];

export type LineType = OptionType[];
export type BoardType = OptionType[][];
