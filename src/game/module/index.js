import game from './reducer';

export * from './actions';
export * from './selectors';
export const reducer = { game };
export { default as sagas } from './sagas';
