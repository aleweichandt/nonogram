const testPacks = [
  {
    id: 'uid-pack-1',
    games: ['uid-game-1'],
    title: 'kitten',
    description: 'tutorial-description',
    thumbnailUrl: 'https://placekitten.com/g/300/200',
    backgroundUrl: 'https://placekitten.com/g/600/400',
  },
];

function getPacks(): Promise<Array<{}>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(testPacks);
    }, 3000);
  });
}

export default getPacks;
