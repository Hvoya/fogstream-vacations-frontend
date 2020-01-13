import React from 'react';

import Timeline from 'atoms/Timeline/Timeline';
import WorkplacePageTemplate from 'templates/WorkplacePageTemplate/WorkplacePageTemplate';
import moment from 'moment';

const groups = [
  { id: 1, title: 'Кирин Д.М.' },
  { id: 2, title: 'group 2' },
  { id: 3, title: 'group 1' },
  { id: 4, title: 'group 2' },
  { id: 5, title: 'group 1' },
  { id: 6, title: 'group 2' },
  { id: 7, title: 'group 1' },
  { id: 8, title: 'group 2' },
  { id: 9, title: 'group 1' },
  { id: 10, title: 'group 2' },
];

const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment(),
    end_time: moment().add(1, 'hour'),
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(0.5, 'hour'),
  },
  {
    id: 3,
    group: 1,
    title: 'item 3',
    start_time: moment('2019-12-15'),
    end_time: moment('2020-01-20'),
  },
];

const DashboardPage = () => {
  return (
    <WorkplacePageTemplate title="Общий график">
      <Timeline groups={groups} items={items} />
    </WorkplacePageTemplate>
  );
};

export default React.memo(DashboardPage);
