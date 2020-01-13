import { all } from 'redux-saga/effects';

import loginWatcher from '@/store/sagas/watchers/loginWatcher';

export default function* rootSaga() {
  yield all([loginWatcher()]);
}
