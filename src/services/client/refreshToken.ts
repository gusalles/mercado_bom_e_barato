import axios from 'axios';

export async function refreshAccessToken() {
  try {
    const refreshResponse = await axios.post('/api/auth/refreshToken');
    return refreshResponse.data.access_token;
  } catch (refreshError) {
    console.error('Failed to refresh access token:', refreshError);
  }
}
