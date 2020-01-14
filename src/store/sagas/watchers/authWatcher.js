import { takeEvery } from 'redux-saga/effects';

import actionTypes from '@/store/actions/actionTypes';
import { changePasswordWorker, loginWorker, logoutWorker } from '@/store/sagas/workers/authWorkers';

export default function* authWatcher() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, loginWorker);
  yield takeEvery(actionTypes.LOGOUT, logoutWorker);
  yield takeEvery(actionTypes.CHANGE_PASSWORD_REQUEST, changePasswordWorker);
}
