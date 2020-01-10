import { createStore } from 'redux';

import { reducer } from './reducers';

// eslint-disable-next-line no-underscore-dangle
export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
