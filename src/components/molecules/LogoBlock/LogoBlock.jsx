import React, { useMemo } from 'react';

import classes from './LogoBlock.module.less';
import logo from '@/assets/images/content/logo.png';
import createClassNames from '@/utils/createClassNames';

const LogoBlock = ({ className, fogstreamLabelClassName, vacationsLabelClassName }) => {
  const classNames = useMemo(() => createClassNames(className, classes.root), [className]);
  const fogstreamLabelClassNames = useMemo(
    () => createClassNames(classes.label, classes.fogstreamLabel, fogstreamLabelClassName),
    [],
  );
  const vacationsLabelClassNames = useMemo(
    () => createClassNames(classes.label, classes.vacationsLabel, vacationsLabelClassName),
    [],
  );

  return (
    <div className={classNames}>
      <img className={classes.logo} src={logo} alt="" />
      <div className={classes.labels}>
        <span className={fogstreamLabelClassNames}>fogstream</span>
        <span className={vacationsLabelClassNames}>vacations</span>
      </div>
    </div>
  );
};

export default React.memo(LogoBlock);
