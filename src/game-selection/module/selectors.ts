
import { createSelector } from 'reselect';
import {
  StateType, StateWithGameSelectionType, Game, Pack, GameId, PackId,
} from './types';

type GameContainerPropsType = {
  id: GameId,
}
type PackContainerPropsType = {
  id: PackId,
}

const gameSelectionSelector = (
  { gameSelection }: StateWithGameSelectionType,
): StateType => gameSelection;

const packPropsSelector = (
  state: StateWithGameSelectionType,
  props: PackContainerPropsType,
): PackContainerPropsType => props;

const gamePropsSelector = (
  state: StateWithGameSelectionType,
  props: GameContainerPropsType,
): GameContainerPropsType => props;

export const getPacks = createSelector(
  gameSelectionSelector,
  ({ packs }: StateType) => packs,
);

export const getGames = createSelector(
  gameSelectionSelector,
  ({ games }: StateType) => games,
);

export const getCurrentPack = createSelector(
  gameSelectionSelector,
  ({ packs, currentPack }: StateType) => {
    if (packs && currentPack) {
      return packs[currentPack];
    }
    return undefined;
  },
);

export const getCurrentGame = createSelector(
  gameSelectionSelector,
  ({ games, currentGame }: StateType) => {
    if (games && currentGame) {
      return games[currentGame];
    }
    return undefined;
  },
);

export const getPack = createSelector(
  [gameSelectionSelector, packPropsSelector],
  ({ packs }: StateType, { id }: PackContainerPropsType) => {
    if (packs && id) {
      return packs[id];
    }
    return undefined;
  },
);

export const getGame = createSelector(
  [gameSelectionSelector, gamePropsSelector],
  ({ games }: StateType, { id }: GameContainerPropsType) => {
    if (games && id) {
      return games[id];
    }
    return undefined;
  },
);
