import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Router } from 'react-router-dom';

import '@/assets/styles/index.less';
import Guard from 'templates/Guard/Guard';
import store from './store';
import history from '@/utils/history';

import '@/assets/fonts/fonts.less';
import '@/assets/styles/global.less';

const App = () => {
  return (
    <>
      <ReduxProvider store={store}>
        <Router history={history}>
          <Guard />
        </Router>
      </ReduxProvider>
    </>
  );
};

export default App;
