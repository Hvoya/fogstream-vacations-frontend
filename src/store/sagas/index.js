import { all } from 'redux-saga/effects';

import loginWatcher from '@/store/sagas/watchers/loginWatcher';
import vacationsWatcher from '@/store/sagas/watchers/vacationsWatcher';

export default function* rootSaga() {
  yield all([loginWatcher(), vacationsWatcher()]);
}
