import React from 'react';
import { useSelector } from 'react-redux';

import FullScreenLoading from 'organisms/FullScreenLoading/FullScreenLoading';
import LogoBlock from 'molecules/LogoBlock/LogoBlock';
import LoginForm from 'organisms/LoginForm/LoginForm';
import classes from './LoginPage.module.less';

const LoginPage = () => {
  const authLoading = useSelector(state => state.auth.loading);

  return (
    <div className={classes.container}>
      <LogoBlock
        className={classes.logo}
        fogstreamLabelClassName={classes.fogstreamLabelClassName}
        vacationsLabelClassName={classes.vacationsLabelClassName}
      />
      <LoginForm />
      {authLoading && <FullScreenLoading />}
    </div>
  );
};

export default React.memo(LoginPage);
