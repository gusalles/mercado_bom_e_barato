import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);

    if (!apiResponse.ok) {
      throw new Error('Erro ao buscar produto');
    }

    const product = await apiResponse.json();

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({
      error: {
        message: 'Erro ao buscar produto',
        detail: error instanceof Error ? error.message : 'Erro desconhecido',
      },
    });
  }
}
