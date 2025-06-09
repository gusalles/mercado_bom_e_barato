import { Product } from '../types';

export async function getProductById(id: number) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
      throw new Error(`Erro ao buscar o produto com ID ${id}`);
    }
    const data: Product = await res.json();

    return data;
  } catch {
    throw new Error(`Erro ao buscar o produto com ID ${id}`);
  }
}
