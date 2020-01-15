import React from 'react';

import classes from './PositionBlock.module.less';
import createClassNames from '@/utils/createClassNames';

const PositionBlock = ({ positionName, className = '' }) => {
  const classNames = createClassNames(classes.root, className);
  return (
    <div className={classNames}>
      Должность: <span className={classes.positionName}>{positionName}</span>
    </div>
  );
};

export default React.memo(PositionBlock);
