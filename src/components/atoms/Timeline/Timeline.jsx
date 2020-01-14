import React from 'react';
import ReactCalendarTimeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';

import './overrides.less';
import './Timeline.less';

const timeSteps = {
  year: 1,
  month: 1,
  day: 1,
  hours: 0,
};

const Timeline = ({ groups, items, onColumnCheck }) => {
  return (
    <ReactCalendarTimeline
      timeSteps={timeSteps}
      groups={groups}
      items={items}
      defaultTimeStart={moment('2020-01-01')}
      defaultTimeEnd={moment('2020-12-31')}
      lineHeight={45}
      sidebarWidth={250}
      verticalLineClassNamesForTime={onColumnCheck}
    />
  );
};

export default Timeline;
