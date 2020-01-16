import React from 'react';

import { Divider } from 'antd';

import ContentScreenLoading from 'organisms/ContentScreenLoading/ContentScreenLoading';
import classes from './WorkplacePageTemplate.module.less';

const WorkplacePageTemplate = ({ title, children, loading }) => {
  return (
    <>
      <h1 className={classes.heading}>{title}</h1>
      <Divider className={classes.divider} />
      {children}
      {loading && <ContentScreenLoading />}
    </>
  );
};

export default React.memo(WorkplacePageTemplate);
