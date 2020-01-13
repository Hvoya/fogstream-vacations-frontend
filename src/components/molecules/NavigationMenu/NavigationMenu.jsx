import React, { useCallback, useMemo } from 'react';
import { Menu, Icon } from 'antd';
import { useHistory } from 'react-router';

import navigation_items from '@/enums/navigation_items';

const NavigationMenu = () => {
  const history = useHistory();

  const getOnMenuItemClickHandler = useCallback(to => {
    return () => history.push(to);
  }, []);

  const menuItems = useMemo(() => {
    return navigation_items.map(item => (
      <Menu.Item onClick={getOnMenuItemClickHandler(item.to)} key={item.to}>
        <Icon type={item.icon} />
        {item.label}
      </Menu.Item>
    ));
  }, []);

  return <Menu theme="dark">{menuItems}</Menu>;
};

export default React.memo(NavigationMenu);
