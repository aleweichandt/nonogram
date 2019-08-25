// @flow
export type GameId = string;
export type Game = {
  id: GameId,
  title: string,
  thumbnail: string,
  boardData: string,
}

export type PackId = string;
export type Pack = {
  id: PackId,
  games: GameId[],
  title: string,
  description: string,
  thumbnailUrl: string,
  backgroundUrl: string,
}

export type StateType = {
  currentPack?: PackId,
  currentGame?: GameId,
  packs: {[PackId]: ?Pack},
  games: {[GameId]: ?Game},
}

export type StateWithGameSelectionType = {
  gameSelection: StateType,
}
