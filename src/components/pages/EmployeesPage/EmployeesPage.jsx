import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EmployeesTable from 'atoms/EmployeesTable/EmployeesTable';
import WorkplacePageTemplate from 'templates/WorkplacePageTemplate/WorkplacePageTemplate';
import EmployeesTableFilters from 'molecules/EmployeesTableFilters/EmployeesTableFilters';
import { createGetEmployeesListRequestAction } from '@/store/actions/employeesActionCreators';

const EmployeesPage = () => {
  const dispatch = useDispatch();

  const employees = useSelector(state => state.employees.employees);
  const loading = useSelector(state => state.employees.employeesLoading);

  const selectedDepartmentId = useSelector(state => state.filters.selectedDepartmentId);
  const selectedPositionId = useSelector(state => state.filters.selectedPositionId);

  useEffect(() => {
    dispatch(createGetEmployeesListRequestAction(selectedDepartmentId, selectedPositionId));
  }, [selectedDepartmentId, selectedPositionId]);

  return (
    <WorkplacePageTemplate loading={loading} title="Сотрудники">
      <EmployeesTableFilters />
      <EmployeesTable employees={employees} />
    </WorkplacePageTemplate>
  );
};

export default React.memo(EmployeesPage);
