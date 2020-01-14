import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { vacationsReducer } from '@/store/reducers/vacationsReducer';
import { employeesReducer } from '@/store/reducers/employeesReducer';

export const reducer = combineReducers({
  auth: authReducer,
  vacations: vacationsReducer,
  employees: employeesReducer,
});
