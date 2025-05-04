export const API = {
    login: '/auth/login',
    logout: '/auth/logout',
    users: '/users',
    userById: (id: number | string) => `/users/${id}`,
  };
  