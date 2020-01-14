import { takeEvery } from 'redux-saga/effects';

import actionTypes from '@/store/actions/actionTypes';
import { employeesWorker, employeeWorker } from '@/store/sagas/workers/employeesWorkers';

export default function* employeesWatcher() {
  yield takeEvery(actionTypes.GET_EMPLOYEES_LIST_REQUEST, employeesWorker);
  yield takeEvery(actionTypes.GET_EMPLOYEE_REQUEST, employeeWorker);
}
