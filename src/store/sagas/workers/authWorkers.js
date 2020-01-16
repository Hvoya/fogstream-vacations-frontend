import { call, put } from 'redux-saga/effects';

import { message } from 'antd';
import { createLoginFailureAction, createLoginSuccessAction } from '@/store/actions';
import axs from '@/utils/axs';
import { handleRequestError } from '@/utils/messages';
import api_urls from '@/enums/api_urls';
import { removeAccessToken, setAccessToken } from '@/utils/LS';
import { getAuthHeaderString } from '@/utils/helpers';
import messages from '@/enums/messages';
import history from '@/utils/history';

export function* loginWorker(action) {
  try {
    const { username, password } = action.payload;
    const { data } = yield call(axs.post, api_urls.login, {
      username,
      password,
    });
    const { key: access_token } = data;

    setAccessToken(access_token);
    axs.defaults.headers.common.Authorization = getAuthHeaderString(access_token);
    yield put(createLoginSuccessAction(access_token));
  } catch (e) {
    handleRequestError(e);
    yield put(createLoginFailureAction());
  }
}

export function* logoutWorker() {
  try {
    removeAccessToken();
    delete axs.defaults.headers.common['Authorization'];
    yield call(axs.post, api_urls.logout);
  } catch (e) {
    handleRequestError(e);
  }
}

export function* changePasswordWorker(action) {
  try {
    const {
      payload: { new_password, new_password_confirm },
      setLoading,
    } = action;
    setLoading(true);
    yield call(axs.post, api_urls.change_password, {
      new_password1: new_password,
      new_password2: new_password_confirm,
    });
    message.success(messages.password_changed);
    setLoading(false);
    history.push('/');
  } catch (e) {
    const { setLoading } = action;
    handleRequestError(e);
    setLoading(false);
  }
}
