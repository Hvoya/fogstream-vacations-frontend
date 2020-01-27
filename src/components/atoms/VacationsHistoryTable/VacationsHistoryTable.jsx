import React, { useMemo } from 'react';
import { Table } from 'antd';
import moment from 'moment';

import classes from './VacationsHistoryTable.module.less';
import { getVacationHistoryRows } from '@/utils/helpers';

const DateBlock = ({ start, end }) => {
  return (
    <div className={classes.dataBlock}>
      <div>
        <span>С: </span>
        {moment(start).format('DD MMMM YYYY')}
      </div>
      <div>
        <span>До: </span>
        {moment(end).format('DD MMMM YYYY')}
      </div>
    </div>
  );
};

const columns = [
  {
    dataIndex: 'from',
    title: 'Старые даты:',
    render: v => <DateBlock start={v.start} end={v.end} />,
  },
  {
    dataIndex: 'to',
    title: 'Новые даты:',
    render: v => <DateBlock start={v.start} end={v.end} />,
  },
];

const VacationsHistoryTable = ({ vacations = [] }) => {
  const data = useMemo(() => getVacationHistoryRows(vacations), [vacations]);
  return <Table pagination={false} bordered columns={columns} dataSource={data} />;
};

export default React.memo(VacationsHistoryTable);
