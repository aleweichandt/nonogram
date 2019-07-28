import { createSelector } from 'reselect';

const gameSelector = ({ game }) => game;

export const getBoard = createSelector(
  gameSelector,
  ({ board }) => board,
);

export const getCurrentOption = createSelector(
  gameSelector,
  ({ currentOption }) => currentOption,
);

export const getOptions = createSelector(
  gameSelector,
  ({ options }) => options,
);

export const getProgress = createSelector(
  gameSelector,
  ({ progress }) => progress,
);
