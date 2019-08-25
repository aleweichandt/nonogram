// @flow

const testPacks = [
  {
    id: 'uid-pack-1',
    games: ['uid-game-1'],
    title: 'kitten',
    description: 'tutorial-description',
    thumbnailUrl: 'https://placekitten.com/g/60/40',
    backgroundUrl: 'https://placekitten.com/g/300/200',
  },
];

function getPacks(): Promise<[{[string]: *}]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(testPacks);
    }, 3000);
  });
}

export default getPacks;
