import React from 'react';

import PasswordRecoveryForm from 'organisms/PasswordRecoveryForm/PasswordRecoveryForm';
import WorkplacePageTemplate from 'templates/WorkplacePageTemplate/WorkplacePageTemplate';

const SettingsPage = () => {
  return (
    <WorkplacePageTemplate title="Настройки">
      <PasswordRecoveryForm />
    </WorkplacePageTemplate>
  );
};

export default React.memo(SettingsPage);
