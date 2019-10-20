import {applyMiddleware} from 'redux';
import createSagaMiddleware, {Saga} from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const runSaga = (sagas: Saga<any[]>) => sagaMiddleware.run(sagas);

export default applyMiddleware(sagaMiddleware);
