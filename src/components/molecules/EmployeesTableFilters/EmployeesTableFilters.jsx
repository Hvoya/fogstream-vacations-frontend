import React, { useCallback, useEffect, useMemo } from 'react';
import { Select as AntSelect, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Select from 'atoms/Select/Select';
import Button from 'atoms/Button/Button';
import {
  createGetDepartmentOptionsRequestAction,
  createGetPositionOptionsRequestAction,
  createSelectDepartmentAction,
  createSelectPositionAction,
  createChangeEmployeesSearchStringAction,
  createResetEmployeesFiltersAction,
} from '@/store/actions/filtersActionCreators';
import classes from './EmployeesTableFilters.module.less';

const { Option } = AntSelect;
const { Search } = Input;

const EmployeesTableFilters = () => {
  const dispatch = useDispatch();

  // Store values
  const departmentOptions = useSelector(state => state.filters.department_options);
  const positionOptions = useSelector(state => state.filters.position_options);

  const departmentOptionsLoading = useSelector(state => state.filters.departmentLoading);
  const positionOptionsLoading = useSelector(state => state.filters.positionLoading);

  const selectedDepartmentId = useSelector(state => state.filters.selectedDepartmentId);
  const selectedPositionId = useSelector(state => state.filters.selectedPositionId);
  const searchString = useSelector(state => state.filters.employeesSearchString);

  // Memoize
  const departmentOptionNodes = useMemo(() => {
    return departmentOptions.map(option => (
      <Option value={option.id} key={option.id}>
        {option.name}
      </Option>
    ));
  }, [departmentOptions]);
  const positionOptionNodes = useMemo(() => {
    return positionOptions.map(option => (
      <Option value={option.id} key={option.id}>
        {option.name}
      </Option>
    ));
  }, [positionOptions]);

  // Handlers
  const handleDepartmentPick = useCallback(value => {
    dispatch(createGetPositionOptionsRequestAction(value));
    dispatch(createSelectPositionAction(undefined));
    dispatch(createSelectDepartmentAction(value));
  }, []);

  const handlePositionPick = useCallback(value => {
    dispatch(createSelectPositionAction(value));
  }, []);

  const handleSearch = useCallback(value => dispatch(createChangeEmployeesSearchStringAction(value)), []);

  const handleResetFilters = useCallback(() => dispatch(createResetEmployeesFiltersAction()), []);

  // Effects
  useEffect(() => {
    dispatch(createGetDepartmentOptionsRequestAction());
  }, []);

  return (
    <div className={classes.root}>
      <Search
        onSearch={handleSearch}
        defaultValue={searchString}
        enterButton
        placeholder="Поиск"
        className={classes.input}
      />
      <Select
        allowClear
        disabled={departmentOptionsLoading}
        value={selectedDepartmentId}
        onChange={handleDepartmentPick}
        placeholder="Отдел"
        className={classes.select}
      >
        {departmentOptionNodes}
      </Select>
      <Select
        allowClear
        value={selectedPositionId}
        onChange={handlePositionPick}
        disabled={!selectedDepartmentId && !positionOptionsLoading}
        placeholder="Должность"
        className={classes.select}
      >
        {positionOptionNodes}
      </Select>
      <Button onClick={handleResetFilters} type="primary">
        Сбросить фильтры
      </Button>
    </div>
  );
};

export default React.memo(EmployeesTableFilters);
