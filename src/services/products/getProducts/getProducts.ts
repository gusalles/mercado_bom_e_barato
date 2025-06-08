import { MAX_ITEMS_PER_PAGE } from '@/constants/pagination';
import { ProductsResponse } from '../types';

export async function getProducts(
  page?: number,
  shouldLimitItems = true
): Promise<ProductsResponse> {
  try {
    const queryParams =
      shouldLimitItems && page
        ? `?limit=${MAX_ITEMS_PER_PAGE}&skip=${(page - 1) * MAX_ITEMS_PER_PAGE}`
        : '';

    const res = await fetch(`https://dummyjson.com/products${queryParams}`);

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
