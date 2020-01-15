import React from 'react';
import { Select as AntSelect } from 'antd';

const Select = ({ children, ...rest }) => {
  return <AntSelect {...rest}>{children}</AntSelect>;
};

export default React.memo(Select);
