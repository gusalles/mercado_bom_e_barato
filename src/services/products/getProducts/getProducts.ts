import { ProductsResponse } from '../types';

export async function getProducts(
  page: number,
  limit = 12
): Promise<ProductsResponse> {
  try {
    const skip = (Number(page) - 1) * Number(limit);

    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );

    if (!res.ok) {
      throw new Error('Erro ao buscar os produtos');
    }

    const data: ProductsResponse = await res.json();

    return data;
  } catch (error) {
    throw new Error(
      `Erro ao buscar os produtos: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
    );
  }
}
