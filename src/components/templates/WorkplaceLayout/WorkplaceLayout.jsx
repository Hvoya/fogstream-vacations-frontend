import React, { useMemo } from 'react';
import { Layout } from 'antd';
import { Redirect, Route, Switch } from 'react-router-dom';

import Content from 'organisms/Content/Content';
import Header from 'organisms/Header/Header';
import Sider from 'organisms/Sider/Sider';
import { workplaceRoutes } from '@/routes';
import classes from './WorkplaceLayout.module.less';

const WorkplaceLayout = () => {
  const routes = useMemo(() => {
    return workplaceRoutes.map(route => (
      <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
    ));
  }, []);

  return (
    <Layout className={classes.layout}>
      <Sider />
      <Layout>
        <Header />
        <Content>
          <Switch>
            {routes}
            <Redirect to="/" />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default React.memo(WorkplaceLayout);
