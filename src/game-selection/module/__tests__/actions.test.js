// @flow
import {
  chooseGame,
  choosePack,
  loadGames,
  loadPacks,
  storeGames,
  storePacks,
} from '../actions';

const testGame = {
  id: 'gameId',
  title: 'title',
  thumbnailUrl: 't-url',
  boardData: 'data',
};
const testPack = {
  id: 'packId',
  games: ['gameId'],
  title: 'title',
  description: 'desc',
  thumbnailUrl: 't-url',
  backgroundUrl: 'b-url',
};

describe('game selection actions test suite', () => {
  it('load packs', () => {
    expect(loadPacks()).toMatchSnapshot();
  });
  describe('store packs', () => {
    it('empty', () => {
      expect(storePacks()).toMatchSnapshot();
    });
    it('filled', () => {
      expect(storePacks([testPack])).toMatchSnapshot();
    });
  });
  it('choose pack', () => {
    expect(choosePack('packid')).toMatchSnapshot();
  });
  it('load pack games', () => {
    expect(loadGames('packid')).toMatchSnapshot();
  });
  describe('store pack games', () => {
    it('empty', () => {
      expect(storeGames()).toMatchSnapshot();
    });
    it('filled', () => {
      expect(storeGames([testGame])).toMatchSnapshot();
    });
  });
  it('choose game', () => {
    expect(chooseGame('gameid')).toMatchSnapshot();
  });
});
