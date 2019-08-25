// @flow
import {
  takeEvery, put,
} from 'redux-saga/effects';
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

describe('game selection sagas test suite', () => {
  it('on choose pack', () => {
    const packId = 'packId';
    const action = choosePack(packId);
    const gen = onChoosePack(action);
    expect(gen.next().value).toEqual(put(loadGames(packId)));
    expect(gen.next().done).toEqual(true);
  });
  it('on load packs', () => {
    const packs = [];
    const gen = onLoadPacks();
    // TODO fetch packs
    expect(gen.next().value).toEqual(put(storePacks(packs)));
    expect(gen.next().done).toEqual(true);
  });
  it('on load games', () => {
    const games = [];
    const packId = 'packId';
    const action = loadGames(packId);
    const gen = onLoadGames(action);
    // TODO fetch pack games
    expect(gen.next().value).toEqual(put(storeGames(games)));
    expect(gen.next().done).toEqual(true);
  });
  it('watch actions', () => {
    const gen = watchActions();
    expect(gen.next().value).toEqual(takeEvery(LOAD_PACKS, onLoadPacks));
    expect(gen.next().value).toEqual(takeEvery(LOAD_GAMES, onLoadGames));
    expect(gen.next().value).toEqual(takeEvery(CHOOSE_PACK, onChoosePack));
  });
});
