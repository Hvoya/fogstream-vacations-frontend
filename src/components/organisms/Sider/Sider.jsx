import React from 'react';
import { Layout } from 'antd';

import NavigationMenu from 'molecules/NavigationMenu/NavigationMenu';
import LogoBlock from 'molecules/LogoBlock/LogoBlock';
import classes from './Sider.module.less';

const { Sider: AntSider } = Layout;

const Sider = () => {
  return (
    <AntSider className={classes.root} width={250}>
      <LogoBlock className={classes.logo} />
      <NavigationMenu />
    </AntSider>
  );
};

export default React.memo(Sider);
