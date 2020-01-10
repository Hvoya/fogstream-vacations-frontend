import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import App from '@/App';

moment.locale('ru');

const container = document.querySelector('#TheApp');
ReactDOM.render(<App />, container);
