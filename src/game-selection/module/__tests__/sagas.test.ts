import {
  takeEvery, call, put,
} from 'redux-saga/effects';
import {
  packs,
  games,
} from '../../../service';
import {
  onChoosePack,
  onLoadPacks,
  onLoadGames,
  watchActions,
} from '../sagas';
import {
  LOAD_PACKS,
  CHOOSE_PACK,
  LOAD_GAMES,
  loadGames,
  storePacks,
  storeGames,
  choosePack,
} from '../actions';
import { Pack, Game } from '../types';

describe('game selection sagas test suite', () => {
  it('on choose pack', () => {
    const packId = 'packId';
    const action = choosePack(packId);
    const gen = onChoosePack(action);
    expect(gen.next().value).toEqual(put(loadGames(packId)));
    expect(gen.next().done).toEqual(true);
  });
  it('on load packs', () => {
    const result: Pack[] = [];
    const gen = onLoadPacks();
    expect(gen.next().value).toEqual(call(packs));
    expect(gen.next(result).value).toEqual(put(storePacks(result)));
    expect(gen.next().done).toEqual(true);
  });
  it('on load games', () => {
    const result: Game[] = [];
    const packId = 'packId';
    const action = loadGames(packId);
    const gen = onLoadGames(action);
    expect(gen.next().value).toEqual(call(games, packId));
    expect(gen.next(result).value).toEqual(put(storeGames(result)));
    expect(gen.next().done).toEqual(true);
  });
  it('watch actions', () => {
    const gen = watchActions();
    expect(gen.next().value).toEqual(takeEvery(LOAD_PACKS, onLoadPacks));
    expect(gen.next().value).toEqual(takeEvery(LOAD_GAMES, onLoadGames));
    expect(gen.next().value).toEqual(takeEvery(CHOOSE_PACK, onChoosePack));
  });
});
