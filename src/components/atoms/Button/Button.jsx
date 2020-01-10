import React from 'react';
import { Button as AntButton } from 'antd';

import classes from './Button.module.less';

const Button = ({ children, ...props }) => {
  return <AntButton {...props}> {children} </AntButton>;
};

export default React.memo(Button);
