import LoginPage from 'pages/LoginPage/LoginPage';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import SettingsPage from 'pages/SettingsPage/SettingsPage';

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
    path: '/settings',
    exact: true,
    component: SettingsPage,
  },
];
