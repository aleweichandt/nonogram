import {OPTION_BLACK, OPTION_BLUE, OPTION_BLOCKED, OPTION_VOID} from './const';
import {Board, Options} from '../../game';

export type ColoredOption =
  | typeof OPTION_BLACK
  | typeof OPTION_BLUE
  | typeof OPTION_BLOCKED
  | typeof OPTION_VOID;

export type ColoredOptions = Options<ColoredOption>;

export type InfoType = {
  option: ColoredOption;
  count: number;
  complete: boolean;
};
export type LineInfoType = InfoType[];

export type LineType = ColoredOption[];
export type ColoredBoard = Board<ColoredOption>;
