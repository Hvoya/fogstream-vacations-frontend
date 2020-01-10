import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WorkplaceLayout from 'templates/WorkplaceLayout/WorkplaceLayout';
import LoginLayout from 'templates/LoginLayout/LoginLayout';
import { getAccessToken } from '@/utils/LS';
import { login } from '@/store/actions';

const Guard = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    const access_token = getAccessToken();
    if (access_token) dispatch(login());
  }, []);

  return isLoggedIn ? <WorkplaceLayout /> : <LoginLayout />;
};

export default React.memo(Guard);
