import React from 'react';

import Preloader from 'molecules/Preloader/Preloader';
import classes from './ContentScreenLoading.module.less';

const ContentScreenLoading = () => {
  return (
    <div className={classes.root}>
      <Preloader />
    </div>
  );
};

export default React.memo(ContentScreenLoading);
