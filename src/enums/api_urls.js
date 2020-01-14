export const baseUrl = 'http://192.168.0.129:8000/api';

export default {
  login: '/auth/login/',
  logout: '/auth/logout/',
  change_password: '/auth/password/change/',

  vacations: '/vacation/',

  employees: '/employee/',
  employee: id => `/employee/${id}/`,
};
