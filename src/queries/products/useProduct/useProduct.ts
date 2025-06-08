import { useQuery } from '@tanstack/react-query';
import { getProductById } from '@/services';

export const productQueryKey = 'product';

export function useProduct(id: number) {
  return useQuery({
    queryKey: [productQueryKey, id],
    queryFn: () => getProductById(id),
  });
}
