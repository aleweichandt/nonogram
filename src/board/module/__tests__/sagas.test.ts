import {takeEvery, put} from 'redux-saga/effects';
import {SET_TILE, checkState} from '../actions';
import {onSetTile, watchActions} from '../sagas';

describe('game sagas test suite', () => {
  describe('on set tile', () => {
    it('runs check', () => {
      const gen = onSetTile();
      expect(gen.next().value).toEqual(put(checkState()));
      expect(gen.next().done).toEqual(true);
    });
  });
  describe('watch actions', () => {
    it('takes every check', () => {
      const gen = watchActions();
      expect(gen.next().value).toEqual(takeEvery(SET_TILE, onSetTile));
      expect(gen.next().done).toEqual(true);
    });
  });
});
