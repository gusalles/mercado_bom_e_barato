import { Typography } from '@mui/material';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { productsQueryKey, useProducts } from '@/queries';
import { getProducts, Product } from '@/services';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [productsQueryKey],
    queryFn: getProducts,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const { data, error, isFetching } = useProducts();

  return (
    <>
      <Typography variant="h1">Mercado B&B</Typography>
      {isFetching && <p>Carregando...</p>}
      {error && <p>{error.message}</p>}
      {data && (
        <ul>
          {data.products.map((product: Product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Preço: R$ {product.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
