import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const refreshToken = req.cookies.ml_refresh_token;

  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    client_id: process.env.ML_CLIENT_ID!,
    client_secret: process.env.ML_CLIENT_SECRET!,
    refresh_token: refreshToken!,
  });

  try {
    const { data } = await axios.post(
      'https://api.mercadolibre.com/oauth/token',
      body,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    res.setHeader('Set-Cookie', [
      `ml_access_token=${data.access_token}; Max-Age=${data.expires_in}; HttpOnly; Secure; Path=/`,
      `ml_refresh_token=${data.refresh_token}; HttpOnly; Secure; Path=/`,
    ]);

    res.status(200).json({ message: 'Tokens refreshed successfully' });
  } catch (error) {
    res.status(500).json({
      error: { message: 'Erro ao completar operação.', detail: String(error) },
    });
  }
}
