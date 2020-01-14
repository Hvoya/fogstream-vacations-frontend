import actionTypes from '@/store/actions/actionTypes';
import { getAccessToken } from '@/utils/LS';

const access_token = getAccessToken();

const initialState = {
  loading: false,
  isLoggedIn: !!access_token,
  access_token,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return { ...state, loading: true };
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, access_token: action.payload.access_token, loading: false };
    case actionTypes.LOGIN_FAILURE:
      return { loading: false, isLoggedIn: false, access_token: '' };
    case actionTypes.LOGOUT:
      return { loading: false, isLoggedIn: false, access_token: '' };
    default:
      return state;
  }
}
