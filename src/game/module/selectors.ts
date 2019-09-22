import {createSelector, Selector} from 'reselect';
import {getValue} from './utils';
import {State, StateWithBoard, Board, Options} from './types';
import {GridProps} from '../types';

const gameSelector = <T>({board}: StateWithBoard<T>): State<T> => board;
const propsSelector = (state: StateWithBoard<any>, props: GridProps) => props;

export const getBoard: Selector<
  StateWithBoard<any>,
  Board<any>
> = createSelector(
  gameSelector,
  ({board}) => board,
);

export const getCurrentOption: Selector<
  StateWithBoard<any>,
  any
> = createSelector(
  gameSelector,
  ({currentOption}) => currentOption,
);

export const getOptions: Selector<
  StateWithBoard<any>,
  Options<any>
> = createSelector(
  gameSelector,
  ({options}) => options,
);

export const getProgress: Selector<
  StateWithBoard<any>,
  Board<any>
> = createSelector(
  gameSelector,
  ({progress}) => progress,
);

export const createValueSelector = <T>() =>
  createSelector(
    [getProgress, propsSelector],
    (progress: Board<T>, {row = -1, column = -1}: GridProps) =>
      getValue(progress, row, column),
  );
