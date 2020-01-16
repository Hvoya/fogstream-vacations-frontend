export const baseUrl =
  process.env.NODE_ENV === 'development' ? 'https://vacation-visualizer.herokuapp.com/api': `${window.origin}/api`;

export default {
  login: '/auth/login/',
  logout: '/auth/logout/',
  change_password: '/auth/password/change/',

  vacations: '/vacation/',

  employees: '/employee/',
  employee: id => `/employee/${id}/`,

  positions: '/position/',
  departments: '/department/',
};
