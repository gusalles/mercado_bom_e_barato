import { getProducts } from '@/services';
import { useQuery } from '@tanstack/react-query';

export const productsQueryKey = 'products';

export function useProducts(page: number) {
  return useQuery({
    queryKey: [productsQueryKey, page],
    queryFn: () => getProducts(page),
  });
}
