import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from 'antd';

import Button from 'atoms/Button/Button';
import classes from './Header.module.less';
import { createLogoutAction } from '@/store/actions';

const { Header: AntHeader } = Layout;

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => dispatch(createLogoutAction()), []);

  return (
    <AntHeader className={classes.root}>
      <Button onClick={handleLogout} icon="logout" type="primary">
        Выйти
      </Button>
    </AntHeader>
  );
};

export default React.memo(Header);
