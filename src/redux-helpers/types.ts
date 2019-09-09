import {Action as ReduxAction} from 'redux';

export interface Action<A> extends ReduxAction<A> {
  type: A;
}
export interface PayloadAction<A, P> extends Action<A> {
  type: A;
  payload: P;
}

export type Reducer<S, A extends Action<any>> = (state: S, action: A) => S;
export interface HandlerType<S> {
  [key: string]: Reducer<S, any>;
}
