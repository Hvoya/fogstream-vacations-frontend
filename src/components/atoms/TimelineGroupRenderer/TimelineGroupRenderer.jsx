import React, { useCallback } from 'react';

import { useHistory } from 'react-router';
import route_paths from '@/enums/route_paths';

const TimelineGroupRenderer = ({ group }) => {
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push(route_paths.employee.construct(group.id));
  }, [group]);

  return (
    <div onClick={handleClick} className="tm-group">
      {group.title}
    </div>
  );
};

export default React.memo(TimelineGroupRenderer);
