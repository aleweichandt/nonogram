import {
  takeEvery, put, select,
} from 'redux-saga/effects';
import {
  CHOOSE_PACK, CHOOSE_GAME, getCurrentGame, loadPacks, Game,
} from '../../../game-selection';
import { initGame } from '../../../game';
import { navigate } from '../../../navigation';
import { GAME_SELECTION, GAME } from '../../../routes';
import {
  onChoosePack,
  onChooseGame,
  watchForNavActions,
  initApp,
} from '../sagas';
import { BoardType } from '../../../game/module';

const board: BoardType = [[]];
const validGame: Game = {
  id: 'test',
  title: 'title',
  thumbnailUrl: 'test.com',
  boardData: JSON.stringify({ board })
};

describe('game scenes sagas', () => {
  it('on choose pack', () => {
    const gen = onChoosePack();
    expect(gen.next().value).toEqual(put(navigate({ routeName: GAME_SELECTION })));
    expect(gen.next().done).toEqual(true);
  });
  describe('on choose game', () => {
    it('with valid game', () => {
      const gen = onChooseGame();
      expect(gen.next().value).toEqual(select(getCurrentGame));
      expect(gen.next(validGame).value).toEqual(put(navigate({ routeName: GAME })));
      expect(gen.next().value).toEqual(put(initGame(board)));
      expect(gen.next().done).toEqual(true);
    });
    it('with missing game', () => {
      const gen = onChooseGame();
      expect(gen.next().value).toEqual(select(getCurrentGame));
      expect(gen.next().done).toEqual(true);
    });
  });
  it('watch for navigation actions', () => {
    const gen = watchForNavActions();
    expect(gen.next().value).toEqual(takeEvery(CHOOSE_PACK, onChoosePack));
    expect(gen.next().value).toEqual(takeEvery(CHOOSE_GAME, onChooseGame));
    expect(gen.next().done).toEqual(true);
  });
  it('init app', () => {
    const gen = initApp();
    expect(gen.next().value).toEqual(put(loadPacks()));
    expect(gen.next().done).toEqual(true);
  });
});
