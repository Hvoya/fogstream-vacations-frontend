import actionTypes from '@/store/actions/actionTypes';

export const createGetEmployeesListRequestAction = (selected_department_id, selected_position_id, search_string) => ({
  type: actionTypes.GET_EMPLOYEES_LIST_REQUEST,
  payload: {
    selected_department_id,
    selected_position_id,
    search_string,
  },
});
export const createGetEmployeesListSuccessAction = employees => ({
  type: actionTypes.GET_EMPLOYEES_LIST_SUCCESS,
  payload: { employees },
});
export const createGetEmployeesListFailureAction = () => ({ type: actionTypes.GET_EMPLOYEES_LIST_FAILURE });

export const createGetEmployeeRequestAction = id => ({ type: actionTypes.GET_EMPLOYEE_REQUEST, payload: { id } });
export const createGetEmployeeSuccessAction = employee => ({
  type: actionTypes.GET_EMPLOYEE_SUCCESS,
  payload: { employee },
});
export const createGetEmployeeFailureAction = () => ({ type: actionTypes.GET_EMPLOYEES_LIST_FAILURE });
