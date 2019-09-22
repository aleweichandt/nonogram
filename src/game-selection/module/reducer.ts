import {createReducer, HandlerType} from '../../redux-helpers';
import {STORE_PACKS, CHOOSE_PACK, STORE_GAMES, CHOOSE_GAME} from './actions';
import {
  StorePacksAction,
  ChoosePackAction,
  StoreGamesAction,
  ChooseGameAction,
} from './actions';
import {State, Pack, Game} from './types';

export const initialState: State = {
  currentPack: undefined,
  currentGame: undefined,
  packs: {},
  games: {},
};
type IdType = {id: string};
function asMap<T extends IdType>(list: T[]): {[id: string]: T} {
  return list.reduce((acc, elem) => ({...acc, [elem.id]: elem}), {});
}

const onStorePacks = (
  state: State,
  {payload: {packs}}: StorePacksAction,
): State => ({
  ...state,
  packs: {
    ...state.packs,
    ...asMap<Pack>(packs),
  },
});
const onChoosePack = (
  state: State,
  {payload: {packId}}: ChoosePackAction,
): State =>
  Object.keys(state.packs).includes(packId)
    ? {
        ...state,
        currentPack: packId,
      }
    : state;

const onStoreGames = (
  state: State,
  {payload: {games}}: StoreGamesAction,
): State => ({
  ...state,
  games: {
    ...state.games,
    ...asMap<Game>(games),
  },
});
const onChooseGame = (
  state: State,
  {payload: {gameId}}: ChooseGameAction,
): State =>
  Object.keys(state.games).includes(gameId)
    ? {
        ...state,
        currentGame: gameId,
      }
    : state;

const handlers: HandlerType<State> = {
  [STORE_PACKS]: onStorePacks,
  [CHOOSE_PACK]: onChoosePack,
  [STORE_GAMES]: onStoreGames,
  [CHOOSE_GAME]: onChooseGame,
};

export default createReducer<State>(handlers, initialState);
