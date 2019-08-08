// @flow
import { createSelector } from 'reselect';
import type {
  StateType, StateWithGameType, BoardType, OptionsType, OptionType,
} from './types';

const gameSelector = ({ game }: StateWithGameType): StateType => game;

export const getBoard: (StateWithGameType) => BoardType = createSelector(
  gameSelector,
  ({ board }) => board,
);

export const getCurrentOption: (StateWithGameType) => OptionType = createSelector(
  gameSelector,
  ({ currentOption }) => currentOption,
);

export const getOptions: (StateWithGameType) => OptionsType = createSelector(
  gameSelector,
  ({ options }) => options,
);

export const getProgress: (StateWithGameType) => BoardType = createSelector(
  gameSelector,
  ({ progress }) => progress,
);
