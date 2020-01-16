import actionTypes from '@/store/actions/actionTypes';

const initialState = {
  department_options: [],
  position_options: [],
  departmentLoading: false,
  positionLoading: false,

  selectedDepartmentId: undefined,
  selectedPositionId: undefined,
  employeesSearchString: '',
};

export function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_DEPARTMENT_OPTIONS_REQUEST:
      return { ...state, departmentLoading: true };
    case actionTypes.GET_DEPARTMENT_OPTIONS_SUCCESS:
      return { ...state, department_options: action.payload.department_options, departmentLoading: false };
    case actionTypes.GET_DEPARTMENT_OPTIONS_FAILURE:
      return { ...state, departmentLoading: false };

    case actionTypes.GET_POSITION_OPTIONS_REQUEST:
      return { ...state, positionLoading: true };
    case actionTypes.GET_POSITION_OPTIONS_SUCCESS:
      return { ...state, positionLoading: false, position_options: action.payload.position_options };
    case actionTypes.GET_POSITION_OPTIONS_FAILURE:
      return { ...state, positionLoading: false };

    case actionTypes.SELECT_DEPARTMENT:
      return { ...state, selectedDepartmentId: action.payload.department_id };
    case actionTypes.SELECT_POSITION:
      return { ...state, selectedPositionId: action.payload.position_id };
    case actionTypes.CHANGE_EMPLOYEES_SEARCH_STRING:
      return { ...state, employeesSearchString: action.payload.search_string };
    case actionTypes.RESET_EMPLOYEES_FILTERS:
      return { ...state, selectedDepartmentId: undefined, selectedPositionId: undefined, employeesSearchString: '' };

    default:
      return state;
  }
}
