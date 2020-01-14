import actionTypes from '@/store/actions/actionTypes';

export const createGetFullVacationsListRequestAction = () => ({ type: actionTypes.GET_FULL_VACATIONS_LIST_REQUEST });
export const createGetFullVacationsListSuccessAction = vacations => ({
  type: actionTypes.GET_FULL_VACATIONS_LIST_SUCCESS,
  payload: { vacations },
});
export const createGetFullVacationsListFailureAction = () => ({ type: actionTypes.GET_FULL_VACATIONS_LIST_FAILURE });
