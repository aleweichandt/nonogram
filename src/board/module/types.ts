export type Options<T> = T[];
export type Board<T> = T[][];

export type State<T> = {
  board: Board<T>;
  currentOption: T;
  options: Options<T>;
  progress: Board<T>;
};

export type StateWithBoard<T> = {
  board: State<T>;
};
