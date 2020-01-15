import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import WorkplacePageTemplate from 'templates/WorkplacePageTemplate/WorkplacePageTemplate';
import Timeline from 'atoms/Timeline/Timeline';
import PositionBlock from 'atoms/PositionBlock/PositionBlock';
import { createGetEmployeeRequestAction } from '@/store/actions/employeesActionCreators';
import { getShortUserName } from '@/utils/helpers';
import classes from './EmployeePage.module.less';

const EmployeePage = () => {
  const dispatch = useDispatch();
  const { id: employee_id } = useParams();

  const employee = useSelector(state => state.employees.employee);

  const employeeName = useMemo(() => getShortUserName(employee), [employee]);
  const groups = useMemo(
    () => [
      {
        id: employee.id,
        title: employeeName,
      },
    ],
    [employee],
  );

  useEffect(() => {
    dispatch(createGetEmployeeRequestAction(employee_id));
  }, []);

  return (
    <WorkplacePageTemplate title={`Сотрудник: ${employeeName}`}>
      <PositionBlock className={classes.position} positionName={employee.position.name} />
      <div className={classes.vacationsLabel}>Отпуски</div>
      <Timeline groups={groups} items={[]} />
    </WorkplacePageTemplate>
  );
};

export default React.memo(EmployeePage);
