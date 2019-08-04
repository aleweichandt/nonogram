// @flow
type Reducer<State> = (State, *) => State
type HandlersType<State, Types> = {[Types]: Reducer<State> };
type HandlerType<State> = HandlersType<State, *>;

function createReducer<State>(
  handlers: HandlerType<State>,
  initialState: State,
): Reducer<State> {
  // eslint-disable-next-line no-unused-vars
  const identity = (state: State, action: *): State => state;

  return (state = initialState, action) => {
    const { [action.type]: handle = identity } = handlers;
    return handle(state, action);
  };
}

export default createReducer;
