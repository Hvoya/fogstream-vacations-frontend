import React from 'react';

import LogoBlock from 'molecules/LogoBlock/LogoBlock';
import LoginForm from 'organisms/LoginForm/LoginForm';
import classes from './LoginPage.module.less';

const LoginPage = () => {
  return (
    <div className={classes.container}>
      <LogoBlock
        className={classes.logo}
        fogstreamLabelClassName={classes.fogstreamLabelClassName}
        vacationsLabelClassName={classes.vacationsLabelClassName}
      />
      <LoginForm />
    </div>
  );
};

export default React.memo(LoginPage);
