import React, { useMemo } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import classes from './LoginLayout.module.less';
import { loginRoutes } from '@/routes';

const LoginLayout = () => {
  const routes = useMemo(() => {
    return loginRoutes.map(route => (
      <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
    ));
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <Switch>
          {routes}
          <Redirect to="/login" />
        </Switch>
      </div>
    </div>
  );
};

export default React.memo(LoginLayout);
