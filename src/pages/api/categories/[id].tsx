import { createClient } from '@/services';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    const client = createClient(req.cookies.ml_access_token);

    console.log('Fetching category with ID:', id);

    const apiResponse = await client.get(`/categories/${id}`);

    res.status(200).json(apiResponse.data);
  } catch (error) {
    res.status(500).json({
      error: {
        message: 'Erro ao buscar categorias',
        detail: error instanceof Error ? error.message : 'Erro desconhecido',
      },
    });
  }
}
