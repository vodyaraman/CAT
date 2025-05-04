import axios from 'axios';

const httpClient = axios.create({
  baseURL: import.meta.env.PUBLIC_API_URL, // или process.env.API_URL
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Пример интерсептора (опционально)
httpClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Автоматический редирект/логаут
    }
    return Promise.reject(error);
  }
);

export default httpClient;
