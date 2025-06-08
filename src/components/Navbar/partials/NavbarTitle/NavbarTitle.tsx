import { useRouter } from 'next/router';
import { Title } from './NavbarTitle.styles';
import { useQueryClient } from '@tanstack/react-query';
import { productQueryKey } from '@/queries';
import { Product } from '@/services';

export function NavbarTitle() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const productId = router.query.id;
  const product = queryClient.getQueryData<Product>([
    productQueryKey,
    productId,
  ]);

  return <Title>{product!.title}</Title>;
}
