import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from './theme';

import store from './store';
import AppContainer from './router';

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  </Provider>
);

export default App;
