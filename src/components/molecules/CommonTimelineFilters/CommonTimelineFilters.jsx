import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select as AntSelect } from 'antd';

import classes from './CommonTimelineFilters.module.less';
import Select from 'atoms/Select/Select';
import { createGetDepartmentOptionsRequestAction } from '@/store/actions/filtersActionCreators';
import { createGetEmployeesListRequestAction } from '@/store/actions/employeesActionCreators';
import { getFullUserName } from '@/utils/helpers';

const { Option } = AntSelect;

const CommonTimelineFilters = () => {
  const dispatch = useDispatch();

  const departmentOptions = useSelector(state => state.filters.department_options);
  const employees = useSelector(state => state.employees.employees);

  const departmentOptionNodes = useMemo(
    () => departmentOptions.map(option => <Option value={option.id}>{option.name}</Option>),
    [departmentOptions],
  );
  const employeeOptionNodes = useMemo(
    () =>
      employees.map(option => {
        const name = getFullUserName(option);
        return (
          <Option name={name} value={option.id}>
            {name}
          </Option>
        );
      }),
    [employees],
  );

  useEffect(() => {
    dispatch(createGetDepartmentOptionsRequestAction());
    dispatch(createGetEmployeesListRequestAction());
  }, []);

  return (
    <div className={classes.root}>
      <Select placeholder="Отдел" className={classes.departmentSelect}>
        {departmentOptionNodes}
      </Select>
      <Select
        optionFilterProp="name"
        className={classes.userGroupSelect}
        placeholder="Группа пользователей"
        mode="multiple"
      >
        {employeeOptionNodes}
      </Select>
    </div>
  );
};

export default React.memo(CommonTimelineFilters);
