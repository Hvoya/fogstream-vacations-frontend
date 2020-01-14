import actionTypes from '@/store/actions/actionTypes';

export const createLoginRequestAction = (username, password) => ({
  type: actionTypes.LOGIN_REQUEST,
  payload: { username, password },
});
export const createLoginSuccessAction = access_token => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: { access_token },
});
export const createLoginFailureAction = () => ({ type: actionTypes.LOGIN_FAILURE });

export const createLogoutAction = () => ({ type: actionTypes.LOGOUT });

export const createChangePasswordRequestAction = (new_password, new_password_confirm, setLoading) => ({
  type: actionTypes.CHANGE_PASSWORD_REQUEST,
  setLoading,
  payload: {
    new_password,
    new_password_confirm,
  },
});
