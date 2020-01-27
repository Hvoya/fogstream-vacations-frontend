import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import WorkplacePageTemplate from 'templates/WorkplacePageTemplate/WorkplacePageTemplate';
import Timeline from 'atoms/Timeline/Timeline';
import PositionBlock from 'atoms/PositionBlock/PositionBlock';
import { createGetEmployeeRequestAction } from '@/store/actions/employeesActionCreators';
import { getFullUserName, getItems } from '@/utils/helpers';
import classes from './EmployeePage.module.less';
import VacationsHistoryTable from 'atoms/VacationsHistoryTable/VacationsHistoryTable';

const EmployeePage = () => {
  const dispatch = useDispatch();
  const { id: employee_id } = useParams();

  const employee = useSelector(state => state.employees.employee);
  const loading = useSelector(state => state.employees.employeeLoading);
  const position = employee.position || {};

  const employeeName = useMemo(() => getFullUserName(employee), [employee]);
  const groups = useMemo(
    () => [
      {
        id: employee.id,
        title: employeeName,
      },
    ],
    [employee],
  );

  const items = useMemo(() => getItems(employee.vacation_set, employee.id));

  useEffect(() => {
    dispatch(createGetEmployeeRequestAction(employee_id));
  }, []);

  return (
    <WorkplacePageTemplate loading={loading} title={`Сотрудник: ${employeeName}`}>
      <PositionBlock className={classes.position} position={position} />
      <div className={classes.vacationsLabel}>Отпуски</div>
      <Timeline groups={groups} items={items} />
      <h2 className={classes.historyHeading}>Переносы:</h2>
      <VacationsHistoryTable vacations={employee.vacation_set} />
    </WorkplacePageTemplate>
  );
};

export default React.memo(EmployeePage);
