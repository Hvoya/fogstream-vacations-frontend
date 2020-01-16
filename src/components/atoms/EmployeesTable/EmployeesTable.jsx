import React, { useCallback } from 'react';
import { Table } from 'antd';
import { useHistory } from 'react-router';

import classes from './EmployeesTable.module.less';
import { getFullUserName } from '@/utils/helpers';

const columns = [
  {
    title: 'Имя',
    render: employee => getFullUserName(employee),
    key: 'name',
    width: '50%',
  },
  {
    title: 'Должность',
    render: ({ position }) => {
      if (!position) return null;
      return position.name;
    },
    key: 'position',
    width: '50%',
  },
];

const EmployeesTable = ({ employees }) => {
  const history = useHistory();

  const onRowClick = useCallback(row => ({
    onClick: () => history.push(`/employees/${row.id}`),
  }));

  return (
    <Table
      onRow={onRowClick}
      className={classes.table}
      bordered
      columns={columns}
      rowKey={row => row.id}
      dataSource={employees}
      pagination={false}
    />
  );
};

export default React.memo(EmployeesTable);
