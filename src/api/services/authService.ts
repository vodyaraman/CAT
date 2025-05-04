import http from '../httpClient';
import { API } from '../endpoints';

export const authService = {
  login: (credentials: { email: string; password: string }) =>
    http.post(API.login, credentials),

  logout: () =>
    http.post(API.logout),
};
