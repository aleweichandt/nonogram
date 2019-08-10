// @flow
import { createSelector } from 'reselect';
import { getCol, getRow, getLineInfo } from './utils';
import type {
  StateType, StateWithGameType, BoardType, OptionsType, OptionType, LineType, LineInfoType,
} from './types';

type PropsType = { row?: number, column?: number };

const gameSelector = ({ game }: StateWithGameType): StateType => game;
const boardRowSelector = (
  { game: { board } }: StateWithGameType,
  { row = -1 }: PropsType,
): LineType => getRow(board, row);
const boardColSelector = (
  { game: { board } }: StateWithGameType,
  { column = -1 }: PropsType,
): LineType => getCol(board, column);

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

type InfoSelector = () => (StateWithGameType, PropsType) => LineInfoType[];

export const createRowInfo: InfoSelector = () => createSelector(
  boardRowSelector,
  (boardRow: LineType) => getLineInfo(boardRow),
);

export const createColInfo: InfoSelector = () => createSelector(
  boardColSelector,
  (boardCol: LineType) => getLineInfo(boardCol),
);
