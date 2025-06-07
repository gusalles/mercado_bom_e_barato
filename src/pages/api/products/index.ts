import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const apiResponse = await fetch('https://dummyjson.com/products');

    if (!apiResponse.ok) {
      throw new Error('Erro ao buscar produtos');
    }

    const products = await apiResponse.json();

    res.status(200).json({
      products: products.products,
      total: products.total,
      skip: products.skip,
      limit: products.limit,
    });
  } catch (error) {
    res.status(500).json({
      error: {
        message: 'Erro ao buscar produtos',
        detail: error instanceof Error ? error.message : 'Erro desconhecido',
      },
    });
  }
}
