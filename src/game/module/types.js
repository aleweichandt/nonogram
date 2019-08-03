// @flow
import type { BoardType, OptionType, OptionsType } from '../types';

export * from '../types';

export type StateType = {
  board: BoardType,
  currentOption: OptionType,
  options: OptionsType,
  progress: BoardType,
}

export type StateWithGameType = {
  game: StateType,
}
