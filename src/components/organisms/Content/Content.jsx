import React from 'react';
import { Layout } from 'antd';

import classes from './Content.module.less';

const { Content: AntContent } = Layout;

const Content = ({ children }) => {
  return <AntContent className={classes.root}>{children}</AntContent>;
};

export default React.memo(Content);
