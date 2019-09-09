import {Reducer} from 'redux';
import {HandlerType, Action} from './types';

function createReducer<S>(
  handlers: HandlerType<S>,
  initialState: S,
): Reducer<S> {
  const identity = (state: S): S => state;
  return (state: S | undefined = initialState, action: Action<any>) => {
    const {[action.type]: handle = identity} = handlers;
    return handle(state, action);
  };
}

export default createReducer;
