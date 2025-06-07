import { getProducts } from '@/services';
import { useQuery } from '@tanstack/react-query';

export const productsQueryKey = 'products';

export function useProducts() {
  return useQuery({
    queryKey: [productsQueryKey],
    queryFn: getProducts,
  });
}
