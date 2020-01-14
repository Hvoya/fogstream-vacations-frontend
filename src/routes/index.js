import LoginPage from 'pages/LoginPage/LoginPage';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import SettingsPage from 'pages/SettingsPage/SettingsPage';
import EmployeesPage from 'pages/EmployeesPage/EmployeesPage';
import SingleEmployeePage from 'pages/EmployeePage/EmployeePage';

export const loginRoutes = [
  {
    path: '/login',
    exact: true,
    component: LoginPage,
  },
];

export const workplaceRoutes = [
  {
    path: '/',
    exact: true,
    component: DashboardPage,
  },
  {
    path: '/employees',
    exact: true,
    component: EmployeesPage,
  },
  {
    path: '/employees/:id',
    exact: true,
    component: SingleEmployeePage,
  },
  {
    path: '/settings',
    exact: true,
    component: SettingsPage,
  },
];
