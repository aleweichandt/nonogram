// @flow
export type ActionWithoutPayload<A> = { type: A };
export type ActionWithPayload<A, P> = ActionWithoutPayload<A> & { payload: P };
