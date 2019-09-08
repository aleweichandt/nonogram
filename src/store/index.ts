import {createStore} from 'redux';

import reducer from './reducer';
import middleware, {runSaga} from './middleware';
import rootSaga from './sagas';

export default createStore(reducer, middleware);

runSaga(rootSaga);
