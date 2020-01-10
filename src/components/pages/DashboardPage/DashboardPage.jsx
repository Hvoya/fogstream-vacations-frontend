import React from 'react';

import TimeLine from 'atoms/Timeline/Timeline';
import classes from './DashboardPage.module.less';

const DashboardPage = () => {
  return (
    <div>
      <TimeLine />
    </div>
  );
};

export default React.memo(DashboardPage);
