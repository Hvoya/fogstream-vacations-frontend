import React, { useMemo } from 'react';

import classes from './TimelineItemRenderer.module.less';
import { Popover } from 'antd';
import moment from 'moment';
import { getPluralDays } from '@/utils/helpers';

const PopoverContent = ({ item: { name, start_time, end_time } }) => {
  const startFormated = useMemo(() => moment(start_time).format('DD MMMM YYYY'), [start_time]);
  const endFormated = useMemo(() => moment(end_time).subtract(1, 'day').format('DD MMMM YYYY'), [end_time]);
  const diff = useMemo(() => moment(end_time).diff(start_time, 'days') , [start_time, end_time]);
  const daysLabel = useMemo((() => getPluralDays(diff)), [diff]);

  return (
    <div className={classes.popoverContent}>
      <div className={classes.employeeName}>{name}</div>
      <div className={classes.dateRange}>{`${startFormated} - ${endFormated}`}</div>
      <div> <span className={classes.daysNum}>{diff} </span>{daysLabel}</div>
    </div>
  );
};

const TimelineItemRenderer = ({ item, itemContext, getItemProps, getResizeProps }) => {
  const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
  return (
    <Popover trigger="click" content={<PopoverContent item={item} />}>
      <div {...getItemProps(item.itemProps)} onClick={() => console.log('hehe-boy')}>
        {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : ''}

        <div className="rct-item-content" style={{ maxHeight: `${itemContext.dimensions.height}` }}>
          {itemContext.title}
        </div>

        {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : ''}
      </div>
    </Popover>
  );
};

export default TimelineItemRenderer;
