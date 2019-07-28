import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import AppContainer from './router';

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
