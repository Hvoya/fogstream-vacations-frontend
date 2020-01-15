import { call, put } from 'redux-saga/effects';

import axs from '@/utils/axs';
import api_urls from '@/enums/api_urls';
import {
  createGetDepartmentOptionsFailureAction,
  createGetDepartmentOptionsSuccessAction,
  createGetPositionOptionsFailureAction,
  createGetPositionOptionsSuccessAction,
} from '@/store/actions/filtersActionCreators';
import { handleRequestError } from '@/utils/messages';

export function* departmentsWorker() {
  try {
    const { data: departmentOptions } = yield call(axs.get, api_urls.departments);
    yield put(createGetDepartmentOptionsSuccessAction(departmentOptions));
  } catch (e) {
    handleRequestError(e);
    yield put(createGetDepartmentOptionsFailureAction());
  }
}

export function* positionsWorker(action) {
  try {
    const { department_id } = action.payload;
    const { data: positionOptions } = yield call(axs.get, api_urls.positions, {
      params: { department: department_id },
    });
    yield put(createGetPositionOptionsSuccessAction(positionOptions));
  } catch (e) {
    handleRequestError(e);
    yield put(createGetPositionOptionsFailureAction());
  }
}
