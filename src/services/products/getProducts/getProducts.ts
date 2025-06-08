import { ProductsResponse } from '../types';

export async function getProducts(
  page: number,
  limit = 12
): Promise<ProductsResponse> {
  try {
    console.log('Fetching products for page:', page);
    const res = await fetch(`/api/products?page=${page}&limit=${limit}`);
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
