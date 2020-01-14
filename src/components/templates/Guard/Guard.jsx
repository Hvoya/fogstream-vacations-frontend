import React from 'react';
import { useSelector } from 'react-redux';

import WorkplaceLayout from 'templates/WorkplaceLayout/WorkplaceLayout';
import LoginLayout from 'templates/LoginLayout/LoginLayout';

const Guard = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? <WorkplaceLayout /> : <LoginLayout />;
};

export default React.memo(Guard);
