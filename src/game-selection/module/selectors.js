
// @flow
import { createSelector } from 'reselect';
import type {
  StateType, StateWithGameSelectionType, Game, Pack, GameId, PackId,
} from './types';

const gameSelectionSelector = (
  { gameSelection }: StateWithGameSelectionType,
): StateType => gameSelection;

const packPropsSelector = (
  state: StateWithGameSelectionType,
  props: $Shape<Pack>,
): $Shape<Pack> => props;

const gamePropsSelector = (
  state: StateWithGameSelectionType,
  props: $Shape<Game>,
): $Shape<Game> => props;

type SelectorType<R> = (StateWithGameSelectionType) => R;
type SelectorPropType<R, P> = (StateWithGameSelectionType, P) => R;

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

export const getPack: SelectorPropType<?Pack, $Shape<Pack>> = createSelector(
  [gameSelectionSelector, packPropsSelector],
  ({ packs }: StateType, { id }: $Shape<Pack>) => {
    if (packs && id) {
      return packs[id];
    }
    return undefined;
  },
);

export const getGame: SelectorPropType<?Game, $Shape<Game>> = createSelector(
  [gameSelectionSelector, gamePropsSelector],
  ({ games }: StateType, { id }: $Shape<Game>) => {
    if (games && id) {
      return games[id];
    }
    return undefined;
  },
);
