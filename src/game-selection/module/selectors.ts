import {createSelector} from 'reselect';
import {StateType, StateWithGameSelectionType, GameId, PackId} from './types';

type GameContainerProps = {
  id: GameId;
};
type PackContainerProps = {
  id: PackId;
};

const gameSelectionSelector = ({
  gameSelection,
}: StateWithGameSelectionType): StateType => gameSelection;

const packPropsSelector = (
  state: StateWithGameSelectionType,
  props: PackContainerProps,
): PackContainerProps => props;

const gamePropsSelector = (
  state: StateWithGameSelectionType,
  props: GameContainerProps,
): GameContainerProps => props;

export const getPacks = createSelector(
  gameSelectionSelector,
  ({packs}: StateType) => packs,
);

export const getGames = createSelector(
  gameSelectionSelector,
  ({games}: StateType) => games,
);

export const getCurrentPack = createSelector(
  gameSelectionSelector,
  ({packs, currentPack}: StateType) => {
    if (packs && currentPack) {
      return packs[currentPack];
    }
    return undefined;
  },
);

export const getCurrentGame = createSelector(
  gameSelectionSelector,
  ({games, currentGame}: StateType) => {
    if (games && currentGame) {
      return games[currentGame];
    }
    return undefined;
  },
);

export const getPack = createSelector(
  [gameSelectionSelector, packPropsSelector],
  ({packs}: StateType, {id}: PackContainerProps) => {
    if (packs && id) {
      return packs[id];
    }
    return undefined;
  },
);

export const getGame = createSelector(
  [gameSelectionSelector, gamePropsSelector],
  ({games}: StateType, {id}: GameContainerProps) => {
    if (games && id) {
      return games[id];
    }
    return undefined;
  },
);
