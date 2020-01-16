import React from 'react';
import ReactCalendarTimeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';

import './overrides.less';
import './Timeline.less';
import TimelineItemRenderer from 'atoms/TimelineItemRenderer/TimelineItemRenderer';
import TimelineGroupRenderer from 'atoms/TimelineGroupRenderer/TimelineGroupRenderer';

const timeSteps = {
  year: 1,
  month: 1,
  day: 1,
  hours: 0,
};

const minTime = moment()
  .subtract(1, 'year')
  .startOf('year')
  .valueOf();
const maxTime = moment()
  .add(1, 'year')
  .endOf('year')
  .valueOf();

function limitScrollBehavior(visibleTimeStart, visibleTimeEnd, updateScrollCanvas) {
  if (visibleTimeStart < minTime && visibleTimeEnd > maxTime) {
    updateScrollCanvas(minTime, maxTime);
  } else if (visibleTimeStart < minTime) {
    updateScrollCanvas(minTime, minTime + (visibleTimeEnd - visibleTimeStart));
  } else if (visibleTimeEnd > maxTime) {
    updateScrollCanvas(maxTime - (visibleTimeEnd - visibleTimeStart), maxTime);
  } else {
    updateScrollCanvas(visibleTimeStart, visibleTimeEnd);
  }
}

const Timeline = ({ groups, items, onColumnCheck }) => {
  return (
    <ReactCalendarTimeline
      itemRenderer={TimelineItemRenderer}
      groupRenderer={TimelineGroupRenderer}
      timeSteps={timeSteps}
      groups={groups}
      items={items}
      onTimeChange={limitScrollBehavior}
      defaultTimeStart={moment('2020-01-01')}
      defaultTimeEnd={moment('2020-12-31')}
      lineHeight={45}
      sidebarWidth={250}
      verticalLineClassNamesForTime={onColumnCheck}
    />
  );
};

export default Timeline;
