import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs } from 'antd';

import Timeline from 'atoms/Timeline/Timeline';
import WorkplacePageTemplate from 'templates/WorkplacePageTemplate/WorkplacePageTemplate';
import { createGetFullVacationsListRequestAction } from '@/store/actions/vacationsActionCreators';
import { colorColumns, getBusyDays, getGroupsAndItems } from '@/utils/helpers';
import CommonTimelineFilters from 'molecules/CommonTimelineFilters/CommonTimelineFilters';
import VacationsTable from 'atoms/VacationsTable/VacationsTable';

const { TabPane } = Tabs;

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
      <CommonTimelineFilters />
      <Tabs defaultActiveKey="1">
        <TabPane tab="Диаграмма Ганта" key="1">
          {/* Change data props cause bugs, so just remount  */}
          {!loading && <Timeline onColumnCheck={handleColumnCheck} groups={groups} items={items} />}
        </TabPane>
        <TabPane disabled tab="Таблица" key="2">
          <VacationsTable />
        </TabPane>
      </Tabs>
    </WorkplacePageTemplate>
  );
};

export default React.memo(DashboardPage);
