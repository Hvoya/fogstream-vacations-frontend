import React, { useMemo } from 'react';

import classes from './PositionBlock.module.less';
import createClassNames from '@/utils/createClassNames';

const PositionBlock = ({ position, className = '' }) => {
  if (!position) return null;
  const { name: positionName, department = {} } = position;
  const { name: departmentName } = department;

  const classNames = useMemo(() => createClassNames(classes.root, className), []);

  return (
    <div className={classNames}>
      <span>
        Отдел: <span className={classes.departmentName}>{departmentName}</span>
      </span>
      <span>
        Должность: <span className={classes.positionName}>{positionName}</span>
      </span>
    </div>
  );
};

export default React.memo(PositionBlock);
