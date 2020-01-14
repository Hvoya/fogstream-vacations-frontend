import actionTypes from '@/store/actions/actionTypes';

const initialState = {
  employees: [],
  employee: {},
  employeesLoading: false,
  employeeLoading: false,
};

export function employeesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_EMPLOYEES_LIST_REQUEST:
      return { ...state, employeesLoading: true };
    case actionTypes.GET_EMPLOYEES_LIST_SUCCESS:
      return { ...state, employeesLoading: false, employees: action.payload.employees };
    case actionTypes.GET_FULL_VACATIONS_LIST_FAILURE:
      return { ...state, employeesLoading: false };

    case actionTypes.GET_EMPLOYEE_REQUEST:
      return { ...state, employeeLoading: true };
    case actionTypes.GET_EMPLOYEE_SUCCESS:
      return { ...state, employeeLoading: false, employee: action.payload.employee };
    case actionTypes.GET_EMPLOYEE_FAILURE:
      return { ...state, employeeLoading: false };

    default:
      return state;
  }
}
