import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from 'antd';

import Button from 'atoms/Button/Button';
import classes from './Header.module.less';
import { logout } from '@/store/actions';

const { Header: AntHeader } = Layout;

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => dispatch(logout()), []);

  return (
    <AntHeader className={classes.root}>
      <Button onClick={handleLogout} icon="logout" type="primary">
        Выйти
      </Button>
    </AntHeader>
  );
};

export default React.memo(Header);
