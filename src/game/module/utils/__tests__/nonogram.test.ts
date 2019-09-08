import {
  isValid,
  clearValue,
  shouldShowInfo,
} from '../nonogram';
import {
  OPTION_BLUE as A,
  OPTION_BLACK as B,
  OPTION_VOID as V,
  OPTION_BLOCKED as X,
} from '../../const';

describe('nonogram logic test suite', () => {
  describe('is valid', () => {
    it('matching void with blocked', () => {
      expect(isValid(V, X)).toEqual(true);
      expect(isValid(X, V)).toEqual(true);
    });
    it('matches exact', () => {
      expect(isValid(V, V)).toEqual(true);
      expect(isValid(B, B)).toEqual(true);
      expect(isValid(A, A)).toEqual(true);
      expect(isValid(B, B)).toEqual(true);
    });
    it('mismatches other', () => {
      expect(isValid(V, A)).toEqual(false);
      expect(isValid(B, V)).toEqual(false);
      expect(isValid(B, A)).toEqual(false);
      expect(isValid(B, X)).toEqual(false);
    });
  });
  describe('clear value', () => {
    it('board clear value', () => {
      expect(clearValue()).toEqual(V);
    });
  });
  describe('show info', () => {
    it('board clear value', () => {
      expect(shouldShowInfo(V)).toEqual(false);
      expect(shouldShowInfo(A)).toEqual(true);
      expect(shouldShowInfo(B)).toEqual(true);
      expect(shouldShowInfo(X)).toEqual(true);
    });
  });
});
