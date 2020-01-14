import actionTypes from '@/store/actions/actionTypes';

const initialState = {
  vacations: [],
  loading: false,
};

export function vacationsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_FULL_VACATIONS_LIST_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_FULL_VACATIONS_LIST_SUCCESS:
      return { vacations: action.payload.vacations, loading: false };
    case actionTypes.GET_FULL_VACATIONS_LIST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
