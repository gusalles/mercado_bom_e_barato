import { ProductsResponse } from '../types';

export async function getProducts(): Promise<ProductsResponse> {
  try {
    const res = await fetch('/api/products');
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
