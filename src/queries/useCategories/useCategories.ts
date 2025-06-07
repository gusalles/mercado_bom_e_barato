import { getCategories } from '@/services';
import { useQuery } from '@tanstack/react-query';

export const categoriesQueryKey = 'categories';

export function useCategories() {
  return useQuery({
    queryKey: [categoriesQueryKey],
    queryFn: getCategories,
  });
}
