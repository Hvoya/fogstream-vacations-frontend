import React from 'react';
import ReactCalendarTimeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';

import './overrides.less';

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

const Timeline = () => (
  <ReactCalendarTimeline
    maxZoom={24 * 60 * 60 * 1000}
    groups={groups}
    items={items}
    defaultTimeStart={moment('2020-01-01')}
    defaultTimeEnd={moment('2020-12-31')}
    lineHeight={45}
    sidebarWidth={250}
    verticalLineClassNamesForTime={timeStart => {
      if (moment('2020-01-01').isSame(timeStart, 'day')) return ['red'];
      return [];
    }}
  />
);

export default Timeline;
