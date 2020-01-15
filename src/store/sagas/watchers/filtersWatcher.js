import { takeEvery } from 'redux-saga/effects';
import actionTypes from '@/store/actions/actionTypes';
import { departmentsWorker, positionsWorker } from '@/store/sagas/workers/filtersWorkers';

export default function* filtersWatcher() {
  yield takeEvery(actionTypes.GET_DEPARTMENT_OPTIONS_REQUEST, departmentsWorker);
  yield takeEvery(actionTypes.GET_POSITION_OPTIONS_REQUEST, positionsWorker);
}
