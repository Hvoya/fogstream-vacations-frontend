import { call, put } from 'redux-saga/effects';

import axs from '@/utils/axs';
import api_urls from '@/enums/api_urls';
import { handleRequestError } from '@/utils/messages';
import {
  createGetEmployeeFailureAction,
  createGetEmployeesListFailureAction,
  createGetEmployeesListSuccessAction,
  createGetEmployeeSuccessAction,
} from '@/store/actions/employeesActionCreators';

export function* employeesWorker() {
  try {
    const { data: employees } = yield call(axs.get, api_urls.employees);
    yield put(createGetEmployeesListSuccessAction(employees));
  } catch (e) {
    handleRequestError(e);
    yield put(createGetEmployeesListFailureAction());
  }
}

export function* employeeWorker(action) {
  try {
    const { id: employee_id } = action.payload;
    const { data: employee } = yield call(axs.get, api_urls.employee(employee_id));
    yield put(createGetEmployeeSuccessAction(employee));
  } catch (e) {
    handleRequestError(e);
    yield put(createGetEmployeeFailureAction());
  }
}
