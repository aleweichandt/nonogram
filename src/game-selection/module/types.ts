export type GameId = string;
export type Game = {
  id: GameId;
  title: string;
  thumbnailUrl: string;
  boardData: string;
};

export type PackId = string;
export type Pack = {
  id: PackId;
  games: GameId[];
  title: string;
  description: string;
  thumbnailUrl: string;
  backgroundUrl: string;
};

export type State = {
  currentPack?: PackId;
  currentGame?: GameId;
  packs: {[PackId: string]: Pack | undefined};
  games: {[GameId: string]: Game | undefined};
};

export type StateWithGameSelection = {
  gameSelection: State;
};
