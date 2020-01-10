import React from 'react';
import { Input } from 'antd';

const InputField = props => {
  return <Input {...props} />;
};

export default React.memo(InputField);
