import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { page = 1, limit = 12 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    console.log('chegou no SSR');

    const apiResponse = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );

    console.log('chamou o endpoint');

    if (!apiResponse.ok) {
      throw new Error('Erro ao buscar produtos');
    }

    const products = await apiResponse.json();

    console.log('resposta ok: ', products);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      error: {
        message: 'Erro ao buscar produtos',
        detail: error instanceof Error ? error.message : 'Erro desconhecido',
      },
    });
  }
}
