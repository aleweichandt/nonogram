type Reducer<S> = (state: S, action: {type: string}) => S;
type HandlerType<S> = {[key: string]: Reducer<S>};

function createReducer<State>(
  handlers: HandlerType<State>,
  initialState: State,
): Reducer<State> {
  // eslint-disable-next-line no-unused-vars
  const identity = (state: State, action: {type: string}): State => state;

  return (state = initialState, action) => {
    const {[action.type]: handle = identity} = handlers;
    return handle(state, action);
  };
}

export default createReducer;
