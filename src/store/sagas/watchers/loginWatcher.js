import { takeEvery } from 'redux-saga/effects';

import actionTypes from '@/store/actions/actionTypes';
import loginWorker from '@/store/sagas/workers/loginWorker';

export default function* loginWatcher() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, loginWorker);
}
