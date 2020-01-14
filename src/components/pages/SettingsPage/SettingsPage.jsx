import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import PasswordRecoveryForm from 'organisms/PasswordRecoveryForm/PasswordRecoveryForm';
import WorkplacePageTemplate from 'templates/WorkplacePageTemplate/WorkplacePageTemplate';
import { createChangePasswordRequestAction } from '@/store/actions';

const SettingsPage = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handlePasswordChange = useCallback((new_password, new_password_confirm) => {
    dispatch(createChangePasswordRequestAction(new_password, new_password_confirm, setLoading));
  }, []);

  return (
    <WorkplacePageTemplate loading={loading} title="Настройки">
      <PasswordRecoveryForm onPasswordChange={handlePasswordChange} />
    </WorkplacePageTemplate>
  );
};

export default React.memo(SettingsPage);
