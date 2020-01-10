import actionTypes from '@/store/actions/actionTypes';
import { removeAccessToken } from '@/utils/LS';

const initialState = {
  isLoggedIn: false,
  access_token: '',
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state, isLoggedIn: true, access_token: action.payload.access_token };
    case actionTypes.LOGOUT:
      removeAccessToken();
      return initialState;
    default:
      return state;
  }
}
