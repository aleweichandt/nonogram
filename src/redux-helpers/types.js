// @flow
import type { Action } from 'redux';

export type ActionWithPayload<A, P> = Action<A> & { payload: P };
export type ActionWithoutPayload<A> = Action<A>;
