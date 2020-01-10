import React from 'react';
import ReactCalendarTimeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';

import './overrides.less';
import { dayInMilliseconds } from '@/utils/time';

const groups = [
  { id: 1, title: 'group 1' },
  { id: 2, title: 'group 2' },
];

const items = [
  {
    canMove: false,
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment().add(0, 'day'),
    end_time: moment().add(1, 'day'),
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(1, 'day'),
    end_time: moment().add(1, 'day'),
  },
  {
    id: 3,
    group: 3,
    title: 'item 3',
    start_time: moment().add(2, 'day'),
    end_time: moment().add(3, 'day'),
  },
];

const Timeline = () => (
  <ReactCalendarTimeline
    // minZoom={24 * 60 * 60 * 1000}
    groups={groups}
    items={items}
    defaultTimeStart={moment().add(0, 'day')}
    defaultTimeEnd={moment().add(12, 'day')}
    visibleTimeStart={moment()}
    // visibleTimeEnd={}
  />
);

export default Timeline;
