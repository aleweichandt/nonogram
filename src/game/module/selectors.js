// @flow
import { createSelector } from 'reselect';
import {
  getCol, getRow, getLineInfo, getValue,
} from './utils';
import type {
  StateType, StateWithGameType, BoardType, OptionsType, OptionType, LineInfoType,
} from './types';

type PropsType = { row?: number, column?: number };

const gameSelector = ({ game }: StateWithGameType): StateType => game;
const propsSelector = (state: StateWithGameType, props: PropsType) => props;

type SelectorType<R> = (StateWithGameType) => R;

export const getBoard: SelectorType<BoardType> = createSelector(
  gameSelector,
  ({ board }) => board,
);

export const getCurrentOption: SelectorType<OptionType> = createSelector(
  gameSelector,
  ({ currentOption }) => currentOption,
);

export const getOptions: SelectorType<OptionsType> = createSelector(
  gameSelector,
  ({ options }) => options,
);

export const getProgress: SelectorType<BoardType> = createSelector(
  gameSelector,
  ({ progress }) => progress,
);

type ValueSelector = () => (StateWithGameType, PropsType) => OptionType

export const createValueSelector: ValueSelector = () => createSelector(
  [getProgress, propsSelector],
  (progress: BoardType, { row = -1, column = -1 }: PropsType) => getValue(progress, row, column),
);

type InfoSelector = () => (StateWithGameType, PropsType) => LineInfoType[];
export const createRowInfo: InfoSelector = () => createSelector(
  [getBoard, getProgress, propsSelector],
  (board: BoardType, progress: BoardType, { row = -1 }: PropsType) => {
    const rowRef = getRow(board, row);
    const rowProgress = getRow(progress, row);
    return getLineInfo(rowRef, rowProgress);
  },
);

export const createColInfo: InfoSelector = () => createSelector(
  [getBoard, getProgress, propsSelector],
  (board: BoardType, progress: BoardType, { column = -1 }: PropsType) => {
    const colRef = getCol(board, column);
    const colProgress = getCol(progress, column);
    return getLineInfo(colRef, colProgress);
  },
);
