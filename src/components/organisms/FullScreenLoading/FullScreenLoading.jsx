import React from 'react';

import Preloader from 'molecules/Preloader/Preloader';
import classes from './FullScreenLoading.module.less';

const FullScreenLoading = () => {
  return (
    <div className={classes.root}>
      <Preloader />
    </div>
  );
};

export default React.memo(FullScreenLoading);
