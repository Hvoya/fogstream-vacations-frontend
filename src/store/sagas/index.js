import { all } from 'redux-saga/effects';

import authWatcher from '@/store/sagas/watchers/authWatcher';
import vacationsWatcher from '@/store/sagas/watchers/vacationsWatcher';
import employeesWatcher from '@/store/sagas/watchers/employeesWatcher';

export default function* rootSaga() {
  yield all([authWatcher(), vacationsWatcher(), employeesWatcher()]);
}
