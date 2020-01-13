import actionTypes from '@/store/actions/actionTypes';

export const createLoginRequestAction = (login, password) => ({
  type: actionTypes.LOGIN_REQUEST,
  payload: { login, password },
});
export const createLoginSuccessAction = access_token => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: { access_token },
});
export const createLoginFailureAction = () => ({ type: actionTypes.LOGIN_FAILURE });

export const logoutActionCreator = () => ({ type: actionTypes.LOGOUT });
