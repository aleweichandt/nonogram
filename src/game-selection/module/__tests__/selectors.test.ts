import {
  getPacks,
  getGames,
  getCurrentPack,
  getCurrentGame,
  getPack,
  getGame,
} from '../selectors';
import { StateWithGameSelectionType } from '../types';

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
const packs = { packId: testPack };
const games = { gameId: testGame };

const mockState = (props: {} = {}): StateWithGameSelectionType => ({
  gameSelection: {
    currentPack: 'packId',
    currentGame: 'gameId',
    packs,
    games,
    ...props,
  },
});

describe('game selection selectors test suite', () => {
  it('get packs', () => {
    expect(getPacks(mockState())).toEqual(packs);
  });
  it('get games', () => {
    expect(getGames(mockState())).toEqual(games);
  });
  describe('get current pack', () => {
    it('valid', () => {
      expect(getCurrentPack(mockState())).toEqual(testPack);
    });
    it('missing current pack', () => {
      expect(getCurrentPack(mockState({
        currentPack: undefined,
      }))).toBeUndefined();
    });
    it('missing packs', () => {
      expect(getCurrentPack(mockState({
        packs: {},
        currentPack: undefined,
      }))).toBeUndefined();
    });
  });
  describe('get current game', () => {
    it('valid', () => {
      expect(getCurrentGame(mockState())).toEqual(testGame);
    });
    it('missing current game', () => {
      expect(getCurrentGame(mockState({
        currentGame: undefined,
      }))).toBeUndefined();
    });
    it('missing games', () => {
      expect(getCurrentGame(mockState({
        games: {},
        currentGame: undefined,
      }))).toBeUndefined();
    });
  });
  describe('get pack with id', () => {
    it('valid', () => {
      expect(getPack(
        mockState(),
        { id: 'packId' },
      )).toEqual(testPack);
    });
    it('invalid pack id', () => {
      expect(getPack(
        mockState(),
        { id: 'other' },
      )).toBeUndefined();
    });
    it('missing packs', () => {
      expect(getPack(
        mockState({ packs: {} }),
        { id: 'packId' },
      )).toBeUndefined();
    });
  });
  describe('get game with id', () => {
    it('valid', () => {
      expect(getGame(
        mockState(),
        { id: 'gameId' },
      )).toEqual(testGame);
    });
    it('invalid game id', () => {
      expect(getGame(
        mockState(),
        { id: 'other' },
      )).toBeUndefined();
    });
    it('missing games', () => {
      expect(getGame(
        mockState({ games: {} }),
        { id: 'gameId' },
      )).toBeUndefined();
    });
  });
});
