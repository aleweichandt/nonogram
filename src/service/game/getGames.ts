import {
  OPTION_VOID as V,
  OPTION_BLACK as B,
  OPTION_BLOCKED as BL,
  ColoredBoard,
} from '../../nonogram';

const TEST_BOARD: ColoredBoard = [[V, B, V], [B, V, B], [B, B, B]];

// TODO remove mock
const testGames = [
  {
    id: 'uid-game-1',
    title: 'kitty-one',
    thumbnailUrl: 'https://placekitten.com/g/60/40',
    boardData: JSON.stringify({
      options: [V, B, BL],
      board: TEST_BOARD,
      voidOption: V,
    }),
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGames(packId: string): Promise<Array<{}>> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(testGames);
    }, 3000);
  });
}

export default getGames;
