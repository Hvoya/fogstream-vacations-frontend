import { call, put } from 'redux-saga/effects';

import { createLoginFailureAction, createLoginSuccessAction } from '@/store/actions';
import { axs } from '@/utils/axs';
import { handleRequestError } from '@/utils/messages';
import api_urls from '@/enums/api_urls';

export default function* loginWorker(action) {
  try {
    const { username, password } = action.payload;
    const { data } = yield call(axs.post, api_urls.login, {
      username,
      password,
    });
    const { key: access_token } = data;

    axs.defaults.headers.common.Authorization = `Token ${access_token}`;
    yield put(createLoginSuccessAction(access_token));
  } catch (e) {
    handleRequestError(e);
    yield put(createLoginFailureAction());
  }
}
