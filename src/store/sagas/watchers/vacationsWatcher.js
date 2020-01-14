import { takeEvery } from 'redux-saga/effects';

import actionTypes from '@/store/actions/actionTypes';
import vacationsWorker from '@/store/sagas/workers/vacationsWorker';

export default function* vacationsWatcher() {
  yield takeEvery(actionTypes.GET_FULL_VACATIONS_LIST_REQUEST, vacationsWorker);
}
