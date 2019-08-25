
// @flow
import { createSelector } from 'reselect';
import type {
  StateType, StateWithGameSelectionType, Game, Pack, GameId, PackId,
} from './types';

const gameSelectionSelector = (
  { gameSelection }: StateWithGameSelectionType,
): StateType => gameSelection;

type SelectorType<R> = (StateWithGameSelectionType) => R;

export const getPacks: SelectorType<{[PackId]: Pack}> = createSelector(
  gameSelectionSelector,
  ({ packs }: StateType) => packs,
);

export const getGames: SelectorType<{[GameId]: Game}> = createSelector(
  gameSelectionSelector,
  ({ games }: StateType) => games,
);

export const getCurrentPack: SelectorType<?Pack> = createSelector(
  gameSelectionSelector,
  ({ packs, currentPack }: StateType) => {
    if (packs && currentPack) {
      return packs[currentPack];
    }
    return undefined;
  },
);

export const getCurrentGame: SelectorType<?Game> = createSelector(
  gameSelectionSelector,
  ({ games, currentGame }: StateType) => {
    if (games && currentGame) {
      return games[currentGame];
    }
    return undefined;
  },
);

export const getCurrentPackGames: SelectorType<{[GameId]: Game}> = createSelector(
  [getCurrentPack, getGames],
  (pack: ?Pack, allGames: {[GameId]: Game}) => {
    const { games = [] } = pack || {};
    return games.reduce((acc: {[GameId]: Game}, id: GameId) => ({
      ...acc,
      [id]: allGames[id],
    }), {});
  },
);
