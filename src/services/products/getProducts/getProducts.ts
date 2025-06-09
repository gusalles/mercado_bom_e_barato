import { ProductsResponse } from '../types';

export async function getProducts(
  page?: number,
  limit = 12
): Promise<ProductsResponse> {
  try {
    const queryParams =
      limit && page ? `?limit=${limit}&skip=${(page - 1) * limit}` : '';

    const res = await fetch(`https://dummyjson.com/products${queryParams}`);

    if (!res.ok) {
      throw new Error('Erro ao buscar os produtos');
    }

    const data: ProductsResponse = await res.json();

    return { ...data, maxItensPerPage: limit };
  } catch {
    throw new Error('Erro ao buscar os produtos');
  }
}
