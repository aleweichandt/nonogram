import {createSelector} from 'reselect';
import {getCol, getRow, getLineInfo, getValue} from './utils';
import {StateType, StateWithGameType, BoardType} from './types';

type PropsType = {row?: number; column?: number};

const gameSelector = ({game}: StateWithGameType): StateType => game;
const propsSelector = (state: StateWithGameType, props: PropsType) => props;

export const getBoard = createSelector(
  gameSelector,
  ({board}) => board,
);

export const getCurrentOption = createSelector(
  gameSelector,
  ({currentOption}) => currentOption,
);

export const getOptions = createSelector(
  gameSelector,
  ({options}) => options,
);

export const getProgress = createSelector(
  gameSelector,
  ({progress}) => progress,
);

export const createValueSelector = () =>
  createSelector(
    [getProgress, propsSelector],
    (progress: BoardType, {row = -1, column = -1}: PropsType) =>
      getValue(progress, row, column),
  );

export const createRowInfo = () =>
  createSelector(
    [getBoard, getProgress, propsSelector],
    (board: BoardType, progress: BoardType, {row = -1}: PropsType) => {
      const rowRef = getRow(board, row);
      const rowProgress = getRow(progress, row);
      return getLineInfo(rowRef, rowProgress);
    },
  );

export const createColInfo = () =>
  createSelector(
    [getBoard, getProgress, propsSelector],
    (board: BoardType, progress: BoardType, {column = -1}: PropsType) => {
      const colRef = getCol(board, column);
      const colProgress = getCol(progress, column);
      return getLineInfo(colRef, colProgress);
    },
  );
