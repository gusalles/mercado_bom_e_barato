import axios from 'axios';
import { refreshAccessToken } from './refreshToken';

export function createClient(accessToken?: string) {
  const client = axios.create({
    baseURL: 'https://api.mercadolibre.com/',
    headers: {
      'User-Agent': 'MercadoB&BApp/1.0',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  client.interceptors.response.use(undefined, async (error) => {
    if (error.response?.status === 401) {
      const newAccessToken = await refreshAccessToken();
      // Atualiza o cookie com o novo token de acesso
      client.defaults.headers['Authorization'] = `Bearer ${newAccessToken}`;
      // Tentando refazer a requisição original com o novo token
      error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
    }
    return Promise.reject(error);
  });

  return client;
}
