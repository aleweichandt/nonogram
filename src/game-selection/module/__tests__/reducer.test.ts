import reducer, { initialState } from '../reducer';
import {
  storeGames,
  chooseGame,
  storePacks,
  choosePack,
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
const packs = { packId: testPack };
const games = { gameId: testGame };

const filledState = {
  ...initialState,
  packs,
  games,
};

describe('game selection reducer test suite', () => {
  it('starts with state', () => {
    // $FlowFixMe intended
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  describe('store packs', () => {
    it('empty', () => {
      expect(reducer(filledState, storePacks())).toEqual(filledState);
    });
    it('fill', () => {
      expect(reducer(initialState, storePacks([testPack]))).toEqual({
        ...initialState,
        packs,
      });
    });
  });
  describe('choose pack', () => {
    it('invalid', () => {
      expect(reducer(filledState, choosePack('t'))).toEqual(filledState);
    });
    it('valid', () => {
      expect(reducer(filledState, choosePack('packId'))).toEqual({
        ...filledState,
        currentPack: 'packId',
      });
    });
  });
  describe('store games', () => {
    it('empty', () => {
      expect(reducer(filledState, storeGames())).toEqual(filledState);
    });
    it('fill', () => {
      expect(reducer(initialState, storeGames([testGame]))).toEqual({
        ...initialState,
        games,
      });
    });
  });
  describe('choose game', () => {
    it('invalid', () => {
      expect(reducer(filledState, chooseGame('t'))).toEqual(filledState);
    });
    it('valid', () => {
      expect(reducer(filledState, chooseGame('gameId'))).toEqual({
        ...filledState,
        currentGame: 'gameId',
      });
    });
  });
});
