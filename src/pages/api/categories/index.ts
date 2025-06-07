import { Category } from '@/services/categories/categories.type';
import { createClient } from '@/services/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = createClient(req.cookies.ml_access_token);

    const apiResponse = await client.get<Category[]>('/sites/MLB/categories');

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
