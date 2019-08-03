// @flow
import { OPTION_BLACK, OPTION_BLOCKED, OPTION_VOID } from './const';

export type OptionType = |
  typeof OPTION_BLACK |
  typeof OPTION_BLOCKED |
  typeof OPTION_VOID;

export type OptionsType = OptionType[];
export type BoardType = OptionType[][];
