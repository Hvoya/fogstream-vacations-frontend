import React, { useCallback } from 'react';
import { Table } from 'antd';
import { useHistory } from 'react-router';

import classes from './EmployeesTable.module.less';
import { getShortUserName } from '@/utils/helpers';

const columns = [
  {
    title: 'Имя',
    render: employee => getShortUserName(employee),
    key: 'name',
  },
  {
    title: 'Должность',
    render: ({ position }) => {
      if (!position) return null;
      return position.name;
    },
    key: 'position',
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
