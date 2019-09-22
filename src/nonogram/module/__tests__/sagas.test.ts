import {takeEvery, put, select, call} from 'redux-saga/effects';
import {CHECK_STATE, endGame, getBoard, getProgress} from '../../../game';
import {validateBoard} from '../utils';
import {OPTION_BLACK as B, OPTION_VOID as V} from '../const';
import {onCheckState, watchActions} from '../sagas';

describe('game sagas test suite', () => {
  describe('on check state', () => {
    it('not solved', () => {
      const gen = onCheckState();
      expect(gen.next().value).toEqual(select(getBoard));
      expect(gen.next([[B]]).value).toEqual(select(getProgress));
      expect(gen.next([[V]]).value).toEqual(call(validateBoard, [[B]], [[V]]));
      expect(gen.next(false).done).toEqual(true);
    });
    it('solved', () => {
      const gen = onCheckState();
      expect(gen.next().value).toEqual(select(getBoard));
      expect(gen.next([[B]]).value).toEqual(select(getProgress));
      expect(gen.next([[B]]).value).toEqual(call(validateBoard, [[B]], [[B]]));
      expect(gen.next(true).value).toEqual(put(endGame()));
      expect(gen.next().done).toEqual(true);
    });
  });
  describe('watch actions', () => {
    it('takes every check', () => {
      const gen = watchActions();
      expect(gen.next().value).toEqual(takeEvery(CHECK_STATE, onCheckState));
      expect(gen.next().done).toEqual(true);
    });
  });
});
