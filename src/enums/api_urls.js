export const baseUrl = 'http://192.168.0.129:1488/api';

export default {
  login: '/auth/login/',
  vacations: '/vacation/',
  employees: '/employee/',
  employee: id => `/employee/${id}/`,
};
