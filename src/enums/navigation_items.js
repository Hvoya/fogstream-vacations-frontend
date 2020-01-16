import route_paths from '@/enums/route_paths';

export default [
  {
    to: route_paths.root,
    label: 'Общий график',
    icon: 'bar-chart',
  },
  {
    to: route_paths.employees,
    label: 'Сотрудники',
    icon: 'team',
  },
  {
    to: '/settings',
    label: 'Настройки',
    icon: 'setting',
  },
];
