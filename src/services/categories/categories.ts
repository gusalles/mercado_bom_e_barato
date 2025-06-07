import axios from 'axios';
import { Category } from './categories.type';

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await axios.get<Category[]>('/api/categories');
    return res.data;
  } catch (error) {
    throw new Error(
      `Erro ao buscar categorias: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
    );
  }
}
