import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import '@/assets/styles/index.less';
import Guard from 'templates/Guard/Guard';
import store from './store';

import '@/assets/fonts/fonts.less';
import '@/assets/styles/global.less';

const App = () => {
  return (
    <>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <Guard />
        </BrowserRouter>
      </ReduxProvider>
    </>
  );
};

export default App;
