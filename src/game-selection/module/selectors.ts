import {createSelector} from 'reselect';
import {State, StateWithGameSelectionType, GameId, PackId} from './types';

type GameContainerProps = {
  id: GameId;
};
type PackContainerProps = {
  id: PackId;
};

const gameSelectionSelector = ({
  gameSelection,
}: StateWithGameSelectionType): State => gameSelection;

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
  ({packs}: State) => packs,
);

export const getGames = createSelector(
  gameSelectionSelector,
  ({games}: State) => games,
);

export const getCurrentPack = createSelector(
  gameSelectionSelector,
  ({packs, currentPack}: State) => {
    if (packs && currentPack) {
      return packs[currentPack];
    }
    return undefined;
  },
);

export const getCurrentGame = createSelector(
  gameSelectionSelector,
  ({games, currentGame}: State) => {
    if (games && currentGame) {
      return games[currentGame];
    }
    return undefined;
  },
);

export const getPack = createSelector(
  [gameSelectionSelector, packPropsSelector],
  ({packs}: State, {id}: PackContainerProps) => {
    if (packs && id) {
      return packs[id];
    }
    return undefined;
  },
);

export const getGame = createSelector(
  [gameSelectionSelector, gamePropsSelector],
  ({games}: State, {id}: GameContainerProps) => {
    if (games && id) {
      return games[id];
    }
    return undefined;
  },
);
