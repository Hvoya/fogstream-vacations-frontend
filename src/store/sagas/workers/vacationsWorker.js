import { call, put } from 'redux-saga/effects';

import api_urls from '@/enums/api_urls';
import axs from '@/utils/axs';
import {
  createGetFullVacationsListFailureAction,
  createGetFullVacationsListSuccessAction,
} from '@/store/actions/vacationsActionCreators';
import { handleRequestError } from '@/utils/messages';

export default function* vacationsWorker() {
  try {
    const { data: vacations } = yield call(axs.get, api_urls.vacations);
    yield put(createGetFullVacationsListSuccessAction(vacations));
  } catch (e) {
    handleRequestError(e);
    yield put(createGetFullVacationsListFailureAction());
  }
}
