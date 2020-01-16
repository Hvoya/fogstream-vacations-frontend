import LoginPage from 'pages/LoginPage/LoginPage';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import SettingsPage from 'pages/SettingsPage/SettingsPage';
import EmployeesPage from 'pages/EmployeesPage/EmployeesPage';
import SingleEmployeePage from 'pages/EmployeePage/EmployeePage';
import route_paths from '@/enums/route_paths';

export const loginRoutes = [
  {
    path: route_paths.login,
    exact: true,
    component: LoginPage,
  },
];

export const workplaceRoutes = [
  {
    path: route_paths.root,
    exact: true,
    component: DashboardPage,
  },
  {
    path: route_paths.employees,
    exact: true,
    component: EmployeesPage,
  },
  {
    path: route_paths.employee.match,
    exact: true,
    component: SingleEmployeePage,
  },
  {
    path: route_paths.settings,
    exact: true,
    component: SettingsPage,
  },
];
