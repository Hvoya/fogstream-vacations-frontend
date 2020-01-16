export default {
  root: '/',
  employees: '/employees',
  employee: {
    match: '/employees/:id',
    construct(id) {
      return `/employees/${id}`
    }
  },
  settings: '/settings',
  login: '/login',
}
