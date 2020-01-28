import React from 'react';
import { Table } from 'antd';

import classes from './VacationsTable.module.less';

const columns = [
  {
    title: 'Сотрудник'
  },
  {
    title: 'Даты отпуска'
  },
];

const VacationsTable = () => {
  return <Table bordered columns={columns}/>;
};

export default React.memo(VacationsTable);
