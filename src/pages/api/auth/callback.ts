import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const code = req.query.code as string;

  if (!code) {
    res.status(400).json({
      error: { message: 'Parametro(s) obrigatório(s) não fornecido(s).' },
    });
  }

  const body = new URLSearchParams({
    code,
    grant_type: 'authorization_code',
    client_id: process.env.ML_CLIENT_ID!,
    client_secret: process.env.ML_CLIENT_SECRET!,
    redirect_uri: process.env.ML_REDIRECT_URI!,
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

    res.redirect('/');
  } catch (error) {
    res.status(500).json({
      error: { message: 'Erro ao completar operação.', detail: String(error) },
    });
  }
}
