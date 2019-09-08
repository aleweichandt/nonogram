import { createReducer } from '../../redux-helpers';
import {
  STORE_PACKS, CHOOSE_PACK,
  STORE_GAMES, CHOOSE_GAME,
} from './actions';
import {
  StorePacksAction, ChoosePackAction,
  StoreGamesAction, ChooseGameAction,
} from './actions';
import { StateType } from './types';

export const initialState: StateType = {
  currentPack: undefined,
  currentGame: undefined,
  packs: {},
  games: {},
};
type IdType = { id: string };
function asMap<T extends IdType>(list: T[]): {[id: string]: T} {
  return list.reduce(
    (acc, elem) => ({ ...acc, [elem.id]: elem }),
    {},
  );
} 

const onStorePacks = (state: StateType, { payload: { packs } }: StorePacksAction): StateType => ({
  ...state,
  packs: {
    ...state.packs,
    ...asMap(packs),
  },
});
const onChoosePack = (
  state: StateType,
  { payload: { packId } }: ChoosePackAction,
): StateType => (Object.keys(state.packs).includes(packId) ? ({
  ...state,
  currentPack: packId,
}) : state);

const onStoreGames = (state: StateType, { payload: { games } }: StoreGamesAction): StateType => ({
  ...state,
  games: {
    ...state.games,
    ...asMap(games),
  },
});
const onChooseGame = (
  state: StateType,
  { payload: { gameId } }: ChooseGameAction,
): StateType => (Object.keys(state.games).includes(gameId) ? ({
  ...state,
  currentGame: gameId,
}) : state);

const handlers = Object.freeze({
  [STORE_PACKS]: onStorePacks,
  [CHOOSE_PACK]: onChoosePack,
  [STORE_GAMES]: onStoreGames,
  [CHOOSE_GAME]: onChooseGame,
});

export default createReducer<StateType>(handlers, initialState);
