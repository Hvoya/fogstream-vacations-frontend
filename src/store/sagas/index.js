import { all } from 'redux-saga/effects';

import loginWatcher from '@/store/sagas/watchers/loginWatcher';
import vacationsWatcher from '@/store/sagas/watchers/vacationsWatcher';
import employeesWatcher from '@/store/sagas/watchers/employeesWatcher';

export default function* rootSaga() {
  yield all([loginWatcher(), vacationsWatcher(), employeesWatcher()]);
}
