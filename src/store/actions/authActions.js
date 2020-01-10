import actionTypes from '@/store/actions/actionTypes';

export const login = access_token => ({ type: actionTypes.LOGIN, payload: { access_token } });
export const logout = () => ({ type: actionTypes.LOGOUT });
