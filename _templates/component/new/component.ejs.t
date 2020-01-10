---
to: src/components/<%= folder %>/<%= name + suffix %>/<%= name + suffix %>.jsx
---
import React from 'react';

import classes from './<%= name + suffix%>.module.less';

const <%= name + suffix%> = () => {
  return <div>This is <%= name + suffix %></div>;
};

export default React.memo(<%= name + suffix%>);
