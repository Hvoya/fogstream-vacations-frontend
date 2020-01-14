import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Timeline from 'atoms/Timeline/Timeline';
import WorkplacePageTemplate from 'templates/WorkplacePageTemplate/WorkplacePageTemplate';
import { createGetFullVacationsListRequestAction } from '@/store/actions/vacationsActionCreators';
import { colorColumns, getBusyDays, getGroupsAndItems } from '@/utils/helpers';

const DashboardPage = () => {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.vacations.loading);
  const vacations = useSelector(state => state.vacations.vacations);

  const [groups, items] = useMemo(() => getGroupsAndItems(vacations), [vacations]);
  const busyDays = useMemo(() => getBusyDays(vacations), [vacations]);
  const handleColumnCheck = useCallback(time_start => colorColumns(busyDays, time_start), [busyDays]);

  useEffect(() => {
    dispatch(createGetFullVacationsListRequestAction());
  }, []);

  return (
    <WorkplacePageTemplate loading={loading} title="Общий график">
      <Timeline onColumnCheck={handleColumnCheck} groups={groups} items={items} />
    </WorkplacePageTemplate>
  );
};

export default React.memo(DashboardPage);
