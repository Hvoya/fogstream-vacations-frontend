import { call, put } from 'redux-saga/effects';

import { createLoginFailureAction, createLoginSuccessAction } from '@/store/actions';
import { axs } from '@/utils/axs';

export default function* loginWorker(action) {
  try {
    const { login, password } = action.payload;
    const data = yield call(axs.post, '/auth/login/', {
      username: login,
      password,
    });
    const { token: access_token } = data;
    yield put(createLoginSuccessAction(access_token));
  } catch (e) {
    yield put(createLoginFailureAction());
  }
}
