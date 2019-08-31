// @flow
import { OPTION_VOID as V, OPTION_BLACK as B, type BoardType } from '../../game';

const TEST_BOARD: BoardType = [
  [V, B, V],
  [B, V, B],
  [B, B, B],
];

// TODO remove mock
const testGames = [
  {
    id: 'uid-game-1',
    title: 'kitty-one',
    thumbnailUrl: 'https://placekitten.com/g/60/40',
    boardData: JSON.stringify({
      options: [V, B],
      board: TEST_BOARD,
    }),
  },
];

// eslint-disable-next-line no-unused-vars
function getGames(packId: string): Promise<[{[string]: *}]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(testGames);
    }, 3000);
  });
}

export default getGames;
