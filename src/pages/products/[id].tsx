import { productQueryKey, useProduct } from '@/queries';
import { getProductById, getProducts, Product } from '@/services';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { ProductContainer } from '@/containers/Product';

interface Params {
  params: {
    id: string;
  };
}
interface ProductPageProps {
  id: string;
}

export async function getStaticPaths() {
  const res = await getProducts(undefined, false);

  const paths = res.products.map((product: Product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(ctx: Params) {
  const id = ctx.params.id;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [productQueryKey, id],
    queryFn: () => getProductById(Number(id)),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id,
    },
    revalidate: 60 * 60,
  };
}

export default function ProductPage({ id }: ProductPageProps) {
  const { data, isFetching, isLoading } = useProduct(Number(id));

  return (
    <ProductContainer product={data} isLoading={isFetching || isLoading} />
  );
}
