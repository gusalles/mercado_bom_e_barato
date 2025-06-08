import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/services';

export const productsQueryKey = 'products';

export function useProducts(page: number) {
  return useQuery({
    queryKey: [productsQueryKey, page],
    queryFn: () => getProducts(page),
  });
}
