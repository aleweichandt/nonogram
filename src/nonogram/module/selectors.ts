import {createSelector} from 'reselect';
import {getBoard, getProgress, getRow, getCol, GridProps} from '../../board';
import {getLineProgress} from './utils';
import {ColoredBoard} from './types';

const propsSelector = (state: any, props: GridProps) => props;

export const createRowInfo = () =>
  createSelector(
    [getBoard, getProgress, propsSelector],
    (board: ColoredBoard, progress: ColoredBoard, {row = -1}: GridProps) => {
      const rowRef = getRow(board, row);
      const rowProgress = getRow(progress, row);
      return getLineProgress(rowRef, rowProgress);
    },
  );

export const createColInfo = () =>
  createSelector(
    [getBoard, getProgress, propsSelector],
    (board: ColoredBoard, progress: ColoredBoard, {column = -1}: GridProps) => {
      const colRef = getCol(board, column);
      const colProgress = getCol(progress, column);
      return getLineProgress(colRef, colProgress);
    },
  );
