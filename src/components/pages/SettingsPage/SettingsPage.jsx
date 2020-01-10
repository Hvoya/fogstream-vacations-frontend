import React from 'react';

import PasswordRecoveryForm from 'organisms/PasswordRecoveryForm/PasswordRecoveryForm';
import classes from './SettingsPage.module.less';

const SettingsPage = () => {
  return (
    <>
      <PasswordRecoveryForm />
    </>
  );
};

export default React.memo(SettingsPage);
