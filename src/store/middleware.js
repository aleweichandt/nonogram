import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({});

// eslint-disable-next-line
const devMiddleware = __DEV__ ? [logger] : [];

export const runSaga = sagas => sagaMiddleware.run(sagas);

export default applyMiddleware(
  sagaMiddleware,
  ...devMiddleware,
);
