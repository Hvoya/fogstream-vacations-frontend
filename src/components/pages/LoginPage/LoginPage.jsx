import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FullScreenLoading from 'organisms/FullScreenLoading/FullScreenLoading';
import LogoBlock from 'molecules/LogoBlock/LogoBlock';
import LoginForm from 'organisms/LoginForm/LoginForm';
import classes from './LoginPage.module.less';
import { createLoginRequestAction } from '@/store/actions';

const LoginPage = () => {
  const dispatch = useDispatch();
  const authLoading = useSelector(state => state.auth.loading);

  const handleLogin = useCallback((username, password) => dispatch(createLoginRequestAction(username, password)), []);

  return (
    <div className={classes.container}>
      <LogoBlock
        className={classes.logo}
        fogstreamLabelClassName={classes.fogstreamLabelClassName}
        vacationsLabelClassName={classes.vacationsLabelClassName}
      />
      <LoginForm onLogin={handleLogin} />
      {authLoading && <FullScreenLoading />}
    </div>
  );
};

export default React.memo(LoginPage);
