import http from '../httpClient';
import { API } from '../endpoints';

export const userService = {
  getAll: () => http.get(API.users),
  getById: (id: string | number) => http.get(API.userById(id)),
};
