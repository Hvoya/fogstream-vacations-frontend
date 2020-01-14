import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { vacationsReducer } from '@/store/reducers/vacationsReducer';

export const reducer = combineReducers({
  auth: authReducer,
  vacations: vacationsReducer,
});
