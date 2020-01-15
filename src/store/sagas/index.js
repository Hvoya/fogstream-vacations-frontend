import { all } from 'redux-saga/effects';

import authWatcher from '@/store/sagas/watchers/authWatcher';
import vacationsWatcher from '@/store/sagas/watchers/vacationsWatcher';
import employeesWatcher from '@/store/sagas/watchers/employeesWatcher';
import filtersWatcher from '@/store/sagas/watchers/filtersWatcher';

export default function* rootSaga() {
  yield all([authWatcher(), vacationsWatcher(), employeesWatcher(), filtersWatcher()]);
}
