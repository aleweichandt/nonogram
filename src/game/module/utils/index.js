// @flow
import { genClearBoard, genGetLineInfo, genValidateBoard } from './utils';
import {
  isValid,
  clearValue,
  shouldShowInfo,
} from './nonogram';

export const clearBoard = genClearBoard(clearValue);
export const validateBoard = genValidateBoard(isValid);
export const getLineInfo = genGetLineInfo(shouldShowInfo);

export {
  updateBoard, getRow, getCol, getValue,
} from './utils';
