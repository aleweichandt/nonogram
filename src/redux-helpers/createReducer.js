// @flow
import type { Action } from 'redux';

// use custom
type Reducer<S, A> = (S, A) => S;

type HandlersType<State, Actions> = {[Actions]: Reducer<State, Action<Actions> & {[string]: *}> };

function createReducer<State, Actions>(
  handlers: HandlersType<State, Actions>,
  initialState: State,
): Reducer<State, Action<Actions>> {
  // eslint-disable-next-line no-unused-vars
  const identity: Reducer<State, Action<Actions>> = (state, action) => state;

  return (state: State = initialState, action: Action<Actions>): State => {
    const { [action.type]: handle = identity } = handlers;
    return handle(state, action);
  };
}

export default createReducer;
