export interface ActionWithoutPayload<A> {
  type: A;
}
export interface ActionWithPayload<A, P> {
  type: A;
  payload: P;
}
