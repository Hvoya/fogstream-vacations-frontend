import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { vacationsReducer } from '@/store/reducers/vacationsReducer';
import { employeesReducer } from '@/store/reducers/employeesReducer';
import { filtersReducer } from '@/store/reducers/filtersReducer';

export const reducer = combineReducers({
  auth: authReducer,
  vacations: vacationsReducer,
  employees: employeesReducer,
  filters: filtersReducer,
});
