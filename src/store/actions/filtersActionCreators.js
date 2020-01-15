import actionTypes from '@/store/actions/actionTypes';

export const createGetDepartmentOptionsRequestAction = () => ({ type: actionTypes.GET_DEPARTMENT_OPTIONS_REQUEST });
export const createGetDepartmentOptionsSuccessAction = department_options => ({
  type: actionTypes.GET_DEPARTMENT_OPTIONS_SUCCESS,
  payload: {
    department_options,
  },
});
export const createGetDepartmentOptionsFailureAction = () => ({ type: actionTypes.GET_DEPARTMENT_OPTIONS_FAILURE });

export const createGetPositionOptionsRequestAction = department_id => ({
  type: actionTypes.GET_POSITION_OPTIONS_REQUEST,
  payload: { department_id },
});
export const createGetPositionOptionsSuccessAction = position_options => ({
  type: actionTypes.GET_POSITION_OPTIONS_SUCCESS,
  payload: {
    position_options,
  },
});
export const createGetPositionOptionsFailureAction = () => ({ type: actionTypes.GET_POSITION_OPTIONS_FAILURE });

export const createSelectDepartmentAction = department_id => ({
  type: actionTypes.SELECT_DEPARTMENT,
  payload: { department_id },
});
export const createSelectPositionAction = position_id => ({
  type: actionTypes.SELECT_POSITION,
  payload: { position_id },
});
