import {ActionWithPayload, ActionWithoutPayload} from '../../redux-helpers';
import {PackId, Pack, GameId, Game} from './types';

export const LOAD_PACKS = 'game-selection/LOAD_PACKS';
export const STORE_PACKS = 'game-selection/STORE_PACKS';
export const CHOOSE_PACK = 'game-selection/CHOOSE_PACK';
export const LOAD_GAMES = 'game-selection/LOAD_GAMES';
export const STORE_GAMES = 'game-selection/STORE_GAMES';
export const CHOOSE_GAME = 'game-selection/CHOOSE_GAME';

export type LoadPacksAction = ActionWithoutPayload<typeof LOAD_PACKS>;
export type StorePacksAction = ActionWithPayload<
  typeof STORE_PACKS,
  {packs: Pack[]}
>;
export type ChoosePackAction = ActionWithPayload<
  typeof CHOOSE_PACK,
  {packId: PackId}
>;
export type LoadGamesAction = ActionWithPayload<
  typeof LOAD_GAMES,
  {packId: PackId}
>;
export type StoreGamesAction = ActionWithPayload<
  typeof STORE_GAMES,
  {games: Game[]}
>;
export type ChooseGameAction = ActionWithPayload<
  typeof CHOOSE_GAME,
  {gameId: GameId}
>;

export const loadPacks = (): LoadPacksAction => ({
  type: LOAD_PACKS,
});

export const storePacks = (packs: Pack[] = []): StorePacksAction => ({
  type: STORE_PACKS,
  payload: {
    packs,
  },
});

export const choosePack = (packId: PackId): ChoosePackAction => ({
  type: CHOOSE_PACK,
  payload: {
    packId,
  },
});

export const loadGames = (packId: PackId): LoadGamesAction => ({
  type: LOAD_GAMES,
  payload: {
    packId,
  },
});

export const storeGames = (games: Game[] = []): StoreGamesAction => ({
  type: STORE_GAMES,
  payload: {
    games,
  },
});

export const chooseGame = (gameId: GameId): ChooseGameAction => ({
  type: CHOOSE_GAME,
  payload: {
    gameId,
  },
});
