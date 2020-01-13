import React from 'react';
import ReactCalendarTimeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';

import './overrides.less';

const timeSteps = {
  year: 1,
  month: 1,
  day: 1,
  hours: 0,
};

const Timeline = ({ groups, items }) => (
  <ReactCalendarTimeline
    maxZoom={24 * 60 * 60 * 1000}
    timeSteps={timeSteps}
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
